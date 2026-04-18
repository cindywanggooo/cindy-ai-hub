import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Mail, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const GIFT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043704618/LppiSDGoS4RFe8cLqTLE63/gift-pack-bg-KSq6JXzwtbRZp6GV9fNAyi.webp";

const giftItems = [
  "50+ 精選 AI 工具清單（含教學連結）",
  "AI 入門完整指南 PDF",
  "Prompt 撰寫技巧大全",
  "每週 AI 新聞精選電子報",
  "獨家 AI 工作流程模板",
];

export default function GiftPackSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("請輸入有效的信箱地址");
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
    toast.success("大禮包已送出！請查看你的信箱");
  };

  return (
    <section id="gift" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={GIFT_BG} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_55)] to-[oklch(0.82_0.14_75)] shadow-xl shadow-[oklch(0.75_0.18_55/25%)] mb-8">
            <Gift className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            免費領取 <span className="glow-text">AI 新手大禮包</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto mb-10">
            輸入你的信箱，立即獲得 Cindy 精心準備的 AI 入門資源包，
            開啟你的 AI 高效生活之旅
          </p>

          {/* Gift Items */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-10 text-left">
            {giftItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-[oklch(0.82_0.14_75)] mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/70">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            >
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="輸入你的 Email"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[oklch(0.18_0.02_270/80%)] backdrop-blur-xl border border-[oklch(1_0_0/10%)] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[oklch(0.75_0.18_55/50%)] focus:shadow-[0_0_20px_oklch(0.75_0.18_55/15%)] transition-all text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-2xl bg-gradient-to-r from-[oklch(0.75_0.18_55)] to-[oklch(0.82_0.14_75)] text-white shadow-xl shadow-[oklch(0.75_0.18_55/25%)] hover:shadow-[oklch(0.75_0.18_55/40%)] transition-all hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    免費領取
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 max-w-md mx-auto text-center"
            >
              <CheckCircle className="w-12 h-12 text-[oklch(0.82_0.12_165)] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">大禮包已送出！</h3>
              <p className="text-sm text-foreground/50">
                請查看 <span className="text-[oklch(0.82_0.14_75)] font-medium">{email}</span> 的收件匣，
                AI 新手大禮包正在飛往你的信箱
              </p>
            </motion.div>
          )}

          <p className="text-xs text-foreground/30 mt-6">
            我們尊重你的隱私，不會發送垃圾郵件。隨時可以取消訂閱。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
