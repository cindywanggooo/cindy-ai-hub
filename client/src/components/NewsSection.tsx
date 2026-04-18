import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, ExternalLink, Clock, Flame, MessageSquare, ChevronDown } from "lucide-react";
import DisqusComments from "./DisqusComments";

const NEWS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043704618/LppiSDGoS4RFe8cLqTLE63/news-section-bg-PCAmAT9VQv3dJpPSuRBduS.webp";

const newsItems = [
  {
    id: "news-1",
    tag: "突破",
    title: "AI 突破性技術：能源消耗降低 100 倍",
    summary: "Tufts 大學研究團隊開發出邏輯驅動的 AI 系統，能將能源消耗降低 100 倍，同時性能超越當今最強大的系統。",
    insight: "💡 Cindy 觀點：這是 AI 永續發展的重要里程碑！過去大家擔心 AI 耗電問題，這個突破如果能量產，未來 AI 普及化的門檻將大幅降低。值得持續關注。",
    source: "Science Daily",
    date: "2026/04/05",
    url: "https://www.sciencedaily.com/releases/2026/04/260405003952.htm",
    hot: true,
  },
  {
    id: "news-2",
    tag: "工具",
    title: "Anthropic 推出全新 AI 工具，解鎖前所未見的能力",
    summary: "Anthropic 發布新的 AI 工具，網路安全專家表示該工具解鎖了前所未有的功能，引發華爾街對 AI 風險的討論。",
    insight: "💡 Cindy 觀點：AI 能力邊界持續擴展，這次引發的安全討論值得重視。建議大家在享受 AI 便利的同時，也要了解相關風險，才能更聰明地使用這些工具。",
    source: "CNBC",
    date: "2026/04/10",
    url: "https://www.cnbc.com/video/2026/04/10/new-anthropic-ai-tool-unlocks-capabilities-no-one-has-found-before-says-cyber-expert-john-carlin.html",
    hot: true,
  },
  {
    id: "news-3",
    tag: "量子",
    title: "AI 協助量子運算突破，加密技術面臨挑戰",
    summary: "Google 與 Oratomic 最新研究顯示，能破解網路加密的量子電腦可能比預期更早到來，AI 正在加速這一進程。",
    insight: "💡 Cindy 觀點：量子運算 + AI 的組合是未來十年最值得關注的科技趨勢，對資安產業影響深遠。",
    source: "TIME",
    date: "2026/04/07",
    url: "https://time.com/article/2026/04/07/ai-quantum-computing-advance/",
    hot: false,
  },
  {
    id: "news-4",
    tag: "晶片",
    title: "台積電法說會登場，AI 動能續航、2 奈米成焦點",
    summary: "台積電 2026 年第一季法說會即將登場，首季營收達 1.13 兆元、年增逾 35%，AI 晶片需求持續強勁。",
    insight: "💡 Cindy 觀點：台灣在 AI 供應鏈的關鍵地位持續鞏固，對台灣科技業是重大利多！",
    source: "Yahoo 股市",
    date: "2026/04/12",
    url: "https://tw.stock.yahoo.com/news/",
    hot: false,
  },
  {
    id: "news-5",
    tag: "峰會",
    title: "2026 巴黎生成式 AI 峰會：中歐創新論壇舉行",
    summary: "2026 生成式人工智慧巴黎峰會——AIC 中歐創新論壇在法國巴黎舉行，聚焦全球 AI 產業合作與創新。",
    insight: "💡 Cindy 觀點：AI 治理和國際合作越來越重要，各國開始重視規範制定，這對長期健康發展是好事。",
    source: "中時新聞",
    date: "2026/04/11",
    url: "https://www.chinatimes.com/realtimenews/20260411001023-260409",
    hot: false,
  },
];

const tagColors: Record<string, string> = {
  "突破": "from-[oklch(0.75_0.18_55)] to-[oklch(0.65_0.2_30)]",
  "工具": "from-[oklch(0.7_0.15_290)] to-[oklch(0.6_0.2_310)]",
  "量子": "from-[oklch(0.82_0.12_165)] to-[oklch(0.65_0.15_180)]",
  "晶片": "from-[oklch(0.82_0.14_75)] to-[oklch(0.7_0.18_55)]",
  "峰會": "from-[oklch(0.65_0.15_250)] to-[oklch(0.55_0.2_270)]",
};

function NewsCard({ news, featured = false }: { news: typeof newsItems[0]; featured?: boolean }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className={`glass-card group ${featured ? "p-6 sm:p-8" : "p-5"}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${tagColors[news.tag]} text-white`}>
            {news.tag}
          </span>
          {news.hot && (
            <span className="inline-flex items-center gap-1 text-xs text-[oklch(0.75_0.18_55)]">
              <Flame className="w-3 h-3" /> 熱門
            </span>
          )}
        </div>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-4 h-4 text-foreground/30 hover:text-[oklch(0.75_0.18_55)] transition-colors" />
        </a>
      </div>

      {/* Title */}
      <h3 className={`font-bold mb-3 group-hover:text-[oklch(0.82_0.14_75)] transition-colors leading-snug ${featured ? "text-xl sm:text-2xl" : "text-base"}`}>
        {news.title}
      </h3>

      {/* Summary */}
      <p className="text-foreground/50 text-sm leading-relaxed mb-3">{news.summary}</p>

      {/* Cindy's Insight */}
      <div className="bg-[oklch(0.75_0.18_55/8%)] border border-[oklch(0.75_0.18_55/15%)] rounded-xl p-3 mb-4">
        <p className="text-sm text-foreground/70 leading-relaxed">{news.insight}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-foreground/40">
          <span className="font-medium">{news.source}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {news.date}
          </span>
        </div>

        {/* Comment Toggle Button */}
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5 text-xs text-foreground/40 hover:text-[oklch(0.75_0.18_55)] transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>留言討論</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${showComments ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Disqus Comments */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <DisqusComments
              identifier={news.id}
              title={news.title}
              url={`https://cindyaihub.vercel.app/news/${news.id}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="news" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <img src={NEWS_BG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.18_55)] to-[oklch(0.82_0.14_75)] flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[oklch(0.75_0.18_55)] uppercase tracking-widest">Daily Update</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            每日 <span className="glow-text">AI 新聞</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl">
            精選全球最值得關注的 AI 動態，附上 Cindy 的觀點解析，讓你不只看新聞，更能理解趨勢
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured News (first 2) */}
          <div className="lg:col-span-3 space-y-6">
            {newsItems.slice(0, 2).map((news, i) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <NewsCard news={news} featured />
              </motion.div>
            ))}
          </div>

          {/* Side News List (last 3) */}
          <div className="lg:col-span-2 space-y-4">
            {newsItems.slice(2).map((news, i) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <NewsCard news={news} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
