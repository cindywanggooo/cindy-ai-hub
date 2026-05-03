"""
抓 Cindy IG 最近的貼文資料
跑法：python3 fetch_posts.py
產出：output/ig_posts_YYYY-MM-DD.csv  +  .json
"""

import csv
import json
import os
import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path

import requests
from dotenv import load_dotenv

# 載入 .env 檔（同資料夾）
SCRIPT_DIR = Path(__file__).parent
load_dotenv(SCRIPT_DIR / ".env")

ACCESS_TOKEN = os.getenv("IG_ACCESS_TOKEN", "").strip()
USERNAME = os.getenv("IG_USERNAME", "").strip()

# Meta Graph API 版本（v21.0 是 2025 年穩定版）
GRAPH_VERSION = "v21.0"
BASE_URL = f"https://graph.facebook.com/{GRAPH_VERSION}"

# 撈最近幾篇（IG 單次最多 100，先設 25）
POST_LIMIT = 25

# 台北時區
TPE = timezone(timedelta(hours=8))


def check_token():
    """檢查 Token 是否填好"""
    if not ACCESS_TOKEN or ACCESS_TOKEN == "PASTE_YOUR_TOKEN_HERE":
        print("❌ 還沒填 Token！請打開 tools/ig-analytics/.env 把 Token 貼進去")
        sys.exit(1)


def get_fb_pages():
    """步驟 1：拿到綁定的 FB 粉專列表"""
    url = f"{BASE_URL}/me/accounts"
    params = {"access_token": ACCESS_TOKEN}
    r = requests.get(url, params=params)
    data = r.json()
    if "error" in data:
        print(f"❌ 拿粉專失敗：{data['error'].get('message')}")
        sys.exit(1)
    return data.get("data", [])


def get_ig_business_id(page_id):
    """步驟 2：從粉專拿 IG Business Account ID"""
    url = f"{BASE_URL}/{page_id}"
    params = {
        "fields": "instagram_business_account",
        "access_token": ACCESS_TOKEN,
    }
    r = requests.get(url, params=params)
    data = r.json()
    return data.get("instagram_business_account", {}).get("id")


def get_posts(ig_user_id):
    """步驟 3：撈貼文"""
    url = f"{BASE_URL}/{ig_user_id}/media"
    fields = ",".join([
        "id",
        "caption",
        "media_type",          # IMAGE / VIDEO / CAROUSEL_ALBUM / REELS
        "media_url",
        "thumbnail_url",
        "permalink",
        "timestamp",
        "like_count",
        "comments_count",
    ])
    params = {
        "fields": fields,
        "limit": POST_LIMIT,
        "access_token": ACCESS_TOKEN,
    }
    r = requests.get(url, params=params)
    data = r.json()
    if "error" in data:
        print(f"❌ 撈貼文失敗：{data['error'].get('message')}")
        sys.exit(1)
    return data.get("data", [])


def format_post(p):
    """整理單筆貼文資料"""
    raw_time = p.get("timestamp", "")
    # 轉成台北時間
    try:
        dt = datetime.fromisoformat(raw_time.replace("Z", "+00:00"))
        local_time = dt.astimezone(TPE).strftime("%Y-%m-%d %H:%M")
    except Exception:
        local_time = raw_time

    caption = (p.get("caption") or "").replace("\n", " ").strip()
    return {
        "發佈時間（台北）": local_time,
        "類型": p.get("media_type", ""),
        "讚數": p.get("like_count", 0),
        "留言數": p.get("comments_count", 0),
        "文案": caption,
        "文案長度": len(caption),
        "貼文連結": p.get("permalink", ""),
        "封面圖": p.get("thumbnail_url") or p.get("media_url", ""),
        "貼文 ID": p.get("id", ""),
    }


def save_csv(rows, path):
    if not rows:
        return
    with open(path, "w", newline="", encoding="utf-8-sig") as f:
        # utf-8-sig 確保 Excel 開不會亂碼
        writer = csv.DictWriter(f, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)


def save_json(rows, path):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=2)


def main():
    print(f"🔍 開始撈 @{USERNAME} 的 IG 資料...\n")

    check_token()

    # Step 1: 拿粉專
    print("[1/3] 取得 FB 粉專...")
    pages = get_fb_pages()
    if not pages:
        print("❌ 沒找到任何 FB 粉專。請確認 IG 已連到粉專。")
        sys.exit(1)
    print(f"      ✅ 找到 {len(pages)} 個粉專：{', '.join(p['name'] for p in pages)}")

    # Step 2: 找對應的 IG Business 帳號
    print("\n[2/3] 尋找 IG Business Account...")
    ig_user_id = None
    for page in pages:
        ig_id = get_ig_business_id(page["id"])
        if ig_id:
            ig_user_id = ig_id
            print(f"      ✅ 找到 IG Business ID（連在粉專「{page['name']}」）")
            break
    if not ig_user_id:
        print("❌ 找不到 IG Business 帳號。請確認 IG 已切換為 Creator/Business 並綁粉專。")
        sys.exit(1)

    # Step 3: 撈貼文
    print(f"\n[3/3] 撈最近 {POST_LIMIT} 篇貼文...")
    posts = get_posts(ig_user_id)
    print(f"      ✅ 拿到 {len(posts)} 篇")

    # 整理資料
    rows = [format_post(p) for p in posts]

    # 存檔
    today = datetime.now(TPE).strftime("%Y-%m-%d")
    out_dir = SCRIPT_DIR / "output"
    out_dir.mkdir(exist_ok=True)
    csv_path = out_dir / f"ig_posts_{today}.csv"
    json_path = out_dir / f"ig_posts_{today}.json"

    save_csv(rows, csv_path)
    save_json(rows, json_path)

    print(f"\n💾 已存：")
    print(f"   {csv_path}")
    print(f"   {json_path}")

    # 印最近 5 篇摘要
    print(f"\n📋 最近 5 篇摘要：\n")
    for i, r in enumerate(rows[:5], 1):
        preview = r["文案"][:40] + "..." if len(r["文案"]) > 40 else r["文案"]
        print(f"  [{i}] {r['發佈時間（台北）']} · {r['類型']} · ❤️{r['讚數']} 💬{r['留言數']}")
        print(f"      {preview}")
        print(f"      {r['貼文連結']}\n")


if __name__ == "__main__":
    main()
