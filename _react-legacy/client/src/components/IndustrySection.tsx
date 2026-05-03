import { motion } from "framer-motion";
import { Building2, Heart, Factory, Landmark, GraduationCap, Megaphone } from "lucide-react";

const INDUSTRY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043704618/LppiSDGoS4RFe8cLqTLE63/industry-ai-esUvNiVyyMNVJEENRj8mF5.webp";

const industries = [
  {
    icon: Heart,
    title: "醫療健康",
    subtitle: "AI 加速藥物研發與診斷",
    description: "AI 在醫療領域的應用持續擴大，從藥物研發到影像診斷，AI 系統已能在數小時內完成過去需要數月的分析工作，大幅縮短新藥上市時間。",
    stat: "78%",
    statLabel: "醫療機構已採用 AI",
    color: "oklch(0.65_0.2_0)",
  },
  {
    icon: Factory,
    title: "製造業",
    subtitle: "AI 驅動智慧工廠與機器人",
    description: "2026 年製造業加速導入 AI，包括智慧節能減排、人形機器人與無人機應用，以及智慧製造的人才升級，打造韌性競爭力。",
    stat: "72%",
    statLabel: "製造商使用 AI 優化",
    color: "oklch(0.75_0.18_55)",
  },
  {
    icon: Landmark,
    title: "金融科技",
    subtitle: "AI 智能體進入 L3 時代",
    description: "AI 智能體在電商、金融、工業、政務等場景實現落地，全鏈路可信智能體成為企業級服務新標準，風控與交易效率大幅提升。",
    stat: "85%",
    statLabel: "金融機構導入 AI",
    color: "oklch(0.82_0.14_75)",
  },
  {
    icon: GraduationCap,
    title: "教育學習",
    subtitle: "AI 個人化學習助手",
    description: "AI 正在重塑教育模式，從個人化學習路徑到即時語言翻譯，AI 讓每個學生都能獲得量身定制的學習體驗，學習效率提升顯著。",
    stat: "58%",
    statLabel: "教育機構使用 AI",
    color: "oklch(0.82_0.12_165)",
  },
  {
    icon: Megaphone,
    title: "行銷與內容創作",
    subtitle: "AI 自動化行銷流程",
    description: "企業利用 AI 進行內容生成、社群管理、廣告投放優化，行銷效率提升 3-5 倍，中小企業也能享受大企業級的行銷能力。",
    stat: "65%",
    statLabel: "行銷團隊使用 AI",
    color: "oklch(0.7_0.15_290)",
  },
];

export default function IndustrySection() {
  return (
    <section id="industry" className="relative py-24 sm:py-32 overflow-hidden section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.15_290)] to-[oklch(0.6_0.2_310)] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[oklch(0.7_0.15_290)] uppercase tracking-widest">Industry AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            AI <span className="glow-text">產業應用</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl">
            AI 正在重塑各行各業，看看最前沿的產業應用案例
          </p>
        </motion.div>

        {/* Layout: Image + Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Decorative Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="relative rounded-2xl overflow-hidden glow-border">
              <img
                src={INDUSTRY_IMG}
                alt="AI 產業應用"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.02_270)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold text-foreground/80">AI 正在連結各產業</p>
                <p className="text-xs text-foreground/50 mt-1">從醫療到金融，從製造到教育</p>
              </div>
            </div>
          </motion.div>

          {/* Industry Cards */}
          <div className="lg:col-span-7 space-y-4">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-5 sm:p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}80)` }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="text-lg font-bold group-hover:text-[oklch(0.82_0.14_75)] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-right shrink-0">
                        <div className="text-xl font-bold font-[DM_Sans]" style={{ color: item.color }}>{item.stat}</div>
                        <div className="text-[10px] text-foreground/40">{item.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-[oklch(0.75_0.18_55)] mb-2">{item.subtitle}</p>
                    <p className="text-sm text-foreground/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
