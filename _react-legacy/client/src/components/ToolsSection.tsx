import { motion } from "framer-motion";
import { Wrench, MessageSquare, Image, Zap, Video, Code, Star, ExternalLink } from "lucide-react";

const AI_TOOLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043704618/LppiSDGoS4RFe8cLqTLE63/ai-tools-card-7wiufkYCgAjeD59pd6GyhP.webp";

type Tool = {
  name: string;
  desc: string;
  tag: string;
  rating: number;
  url: string;
};

const categories = [
  {
    icon: MessageSquare,
    label: "聊天與寫作",
    color: "oklch(0.75_0.18_55)",
    tools: [
      { name: "ChatGPT", desc: "GPT-5.4 寫作與創意的黃金標準", tag: "最熱門", rating: 4.9, url: "https://chat.openai.com" },
      { name: "Claude", desc: "Opus 4.6 長文寫作與文件分析首選", tag: "隱私佳", rating: 4.8, url: "https://claude.ai" },
      { name: "Google Gemini", desc: "與 Google 生態系完美整合", tag: "免費強大", rating: 4.7, url: "https://gemini.google.com" },
    ] as Tool[],
  },
  {
    icon: Image,
    label: "圖片與設計",
    color: "oklch(0.7_0.15_290)",
    tools: [
      { name: "Nano Banana", desc: "Google 最強圖片編輯 AI", tag: "編輯神器", rating: 4.8, url: "https://gemini.google.com" },
      { name: "Canva AI", desc: "零經驗也能做出專業設計", tag: "新手友善", rating: 4.7, url: "https://www.canva.com" },
      { name: "Ideogram 3.0", desc: "AI 圖片中的文字終於正確了", tag: "文字準確", rating: 4.6, url: "https://ideogram.ai" },
    ] as Tool[],
  },
  {
    icon: Zap,
    label: "生產力工具",
    color: "oklch(0.82_0.12_165)",
    tools: [
      { name: "NotebookLM", desc: "上傳文件即可問答的研究神器", tag: "研究必備", rating: 4.9, url: "https://notebooklm.google.com" },
      { name: "Gamma", desc: "AI 簡報真正能拿出去用的品質", tag: "簡報首選", rating: 4.6, url: "https://gamma.app" },
      { name: "Zapier", desc: "無程式碼自動化工作流程", tag: "自動化", rating: 4.5, url: "https://zapier.com" },
    ] as Tool[],
  },
  {
    icon: Video,
    label: "影音創作",
    color: "oklch(0.82_0.14_75)",
    tools: [
      { name: "ElevenLabs", desc: "AI 語音生成標準，Podcast 必備", tag: "語音王者", rating: 4.8, url: "https://elevenlabs.io" },
      { name: "Kling AI 3.0", desc: "最擬真的 AI 影片生成器", tag: "影片首選", rating: 4.7, url: "https://klingai.com" },
      { name: "Vidu", desc: "故事型影片與廣告影片首選", tag: "故事感", rating: 4.5, url: "https://www.vidu.com" },
    ] as Tool[],
  },
  {
    icon: Code,
    label: "程式開發",
    color: "oklch(0.65_0.15_250)",
    tools: [
      { name: "Cursor", desc: "最強 AI 程式碼編輯器", tag: "開發者愛", rating: 4.9, url: "https://cursor.sh" },
      { name: "Lovable", desc: "用描述就能建立完整 App", tag: "零程式碼", rating: 4.6, url: "https://lovable.dev" },
      { name: "GitHub Copilot", desc: "開發者必備 AI 程式助手", tag: "經典", rating: 4.7, url: "https://github.com/features/copilot" },
    ] as Tool[],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${s <= Math.floor(rating) ? "text-[oklch(0.82_0.14_75)] fill-[oklch(0.82_0.14_75)]" : "text-foreground/20"}`}
        />
      ))}
      <span className="ml-1 text-xs text-foreground/50 font-[DM_Sans]">{rating}</span>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section id="tools" className="relative py-24 sm:py-32 overflow-hidden section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.82_0.12_165)] to-[oklch(0.65_0.15_180)] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[oklch(0.82_0.12_165)] uppercase tracking-widest">Cindy's Picks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              推薦 <span className="glow-text">AI 工具</span>
            </h2>
            <p className="text-foreground/50 text-lg max-w-xl">
              精選 15 款 Cindy 親測好用的 AI 工具，涵蓋五大類別
            </p>
          </div>
          <div className="hidden lg:block w-32 h-32 rounded-2xl overflow-hidden glow-border shrink-0">
            <img src={AI_TOOLS_IMG} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Tools Grid by Category */}
        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                <h3 className="text-lg font-bold">{cat.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[oklch(1_0_0/10%)] to-transparent" />
              </div>

              {/* Tool Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tools.map((tool, ti) => (
                  <motion.a
                    key={ti}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="glass-card p-5 group block"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="inline-flex px-2.5 py-0.5 text-[10px] font-bold rounded-full text-white"
                        style={{ background: `linear-gradient(135deg, ${cat.color}, ${cat.color}80)` }}
                      >
                        {tool.tag}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-foreground/20 group-hover:text-[oklch(0.75_0.18_55)] transition-colors" />
                    </div>
                    <h4 className="text-base font-bold mb-1 group-hover:text-[oklch(0.82_0.14_75)] transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-foreground/45 mb-3 leading-relaxed">{tool.desc}</p>
                    <StarRating rating={tool.rating} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
