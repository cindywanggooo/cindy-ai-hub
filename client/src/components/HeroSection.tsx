import { motion } from "framer-motion";
import { ArrowDown, Zap, Users, Newspaper } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043704618/LppiSDGoS4RFe8cLqTLE63/hero-bg-Nz4RBPw6fFhk9XJHNoc6zG.webp";

const stats = [
  { icon: Users, value: "70K+", label: "Instagram 粉絲" },
  { icon: Newspaper, value: "87+", label: "分享貼文" },
  { icon: Zap, value: "每日", label: "AI 工具更新" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.02_270/40%)] via-[oklch(0.13_0.02_270/20%)] to-[oklch(0.13_0.02_270)]" />
      </div>

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[oklch(0.75_0.18_55/15%)] blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[oklch(0.7_0.15_290/12%)] blur-[80px] animate-[float_10s_ease-in-out_infinite_1s]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.18_55/10%)] border border-[oklch(0.75_0.18_55/20%)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.75_0.18_55)] animate-pulse" />
            <span className="text-sm font-medium text-[oklch(0.82_0.14_75)]">Work Smart, Have Fun</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="text-foreground">Hi, 我是</span>{" "}
          <span className="glow-text">Cindy</span>
          <br />
          <span className="text-foreground/80 text-3xl sm:text-4xl lg:text-5xl font-semibold">
            你的 AI 好玩高效生活夥伴
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          分享最新 AI 工具、產業趨勢與實用技巧，
          <br className="hidden sm:block" />
          讓你用最聰明的方式工作，用最有趣的方式生活
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#news"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl bg-gradient-to-r from-[oklch(0.75_0.18_55)] to-[oklch(0.82_0.14_75)] text-white shadow-xl shadow-[oklch(0.75_0.18_55/25%)] hover:shadow-[oklch(0.75_0.18_55/40%)] transition-all hover:scale-105"
          >
            探索 AI 世界
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
          <a
            href="#gift"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border border-[oklch(1_0_0/15%)] text-foreground/80 hover:bg-[oklch(1_0_0/5%)] transition-all"
          >
            領取 AI 新手大禮包
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8 sm:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-5 h-5 text-[oklch(0.75_0.18_55)] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold glow-text font-[DM_Sans]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
