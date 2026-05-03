import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Activity } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
  Cell,
} from "recharts";

const adoptionData = [
  { name: "科技", value: 90, fill: "#FF8A50" },
  { name: "金融", value: 85, fill: "#FFB347" },
  { name: "醫療", value: 78, fill: "#FF6B6B" },
  { name: "製造", value: 72, fill: "#A78BFA" },
  { name: "行銷", value: 65, fill: "#6EE7B7" },
  { name: "教育", value: 58, fill: "#60A5FA" },
  { name: "零售", value: 55, fill: "#FF8A50" },
  { name: "政府", value: 42, fill: "#FFB347" },
];

const userGrowthData = [
  { name: "ChatGPT", users: 800, color: "#FF8A50" },
  { name: "Gemini", users: 350, color: "#A78BFA" },
  { name: "Canva AI", users: 200, color: "#6EE7B7" },
  { name: "Claude", users: 120, color: "#FFB347" },
  { name: "Midjourney", users: 40, color: "#FF6B6B" },
  { name: "Cursor", users: 20, color: "#60A5FA" },
];

const marketTrendData = [
  { year: "2022", market: 136, adoption: 35 },
  { year: "2023", market: 241, adoption: 50 },
  { year: "2024", market: 621, adoption: 65 },
  { year: "2025", market: 757, adoption: 78 },
  { year: "2026", market: 900, adoption: 88 },
];

const radarData = [
  { subject: "聊天機器人", A: 92, fullMark: 100 },
  { subject: "圖片生成", A: 78, fullMark: 100 },
  { subject: "程式輔助", A: 85, fullMark: 100 },
  { subject: "影片生成", A: 65, fullMark: 100 },
  { subject: "語音合成", A: 70, fullMark: 100 },
  { subject: "數據分析", A: 82, fullMark: 100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[oklch(0.18_0.02_270/95%)] backdrop-blur-xl border border-[oklch(1_0_0/10%)] rounded-lg px-4 py-3 shadow-xl">
        <p className="text-sm font-semibold text-foreground mb-1">{label}</p>
        {payload.map((entry: any, i: number) => (
          <p key={i} className="text-xs text-foreground/60">
            {entry.name}: <span className="font-bold text-[oklch(0.82_0.14_75)]">{entry.value}{typeof entry.value === 'number' && entry.value < 100 ? '%' : ''}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TrendsSection() {
  return (
    <section id="trends" className="relative py-24 sm:py-32 overflow-hidden section-glow">
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.82_0.14_75)] to-[oklch(0.75_0.18_55)] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[oklch(0.82_0.14_75)] uppercase tracking-widest">AI Trends</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            AI <span className="glow-text">趨勢數據</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl">
            用數據看懂 AI 發展，各領域採用率、工具下載量與市場聲量一目了然
          </p>
        </motion.div>

        {/* Key Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: "$900B", label: "全球 AI 市場規模", sub: "2026 年預估" },
            { value: "88%", label: "企業採用 AI", sub: "至少一個業務功能" },
            { value: "800M+", label: "ChatGPT 週活躍用戶", sub: "全球最大 AI 平台" },
            { value: "40%", label: "生產力提升", sub: "AI 使用者平均" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-5 text-center">
              <div className="text-2xl sm:text-3xl font-bold glow-text font-[DM_Sans] mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground/70 mb-0.5">{stat.label}</div>
              <div className="text-[10px] text-foreground/40">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Chart 1: Industry Adoption Rate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-[oklch(0.75_0.18_55)]" />
              <h3 className="text-lg font-bold">各領域 AI 採用率</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={adoptionData} layout="vertical" margin={{ left: 10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 5%)" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: "oklch(0.6 0.02 270)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fill: "oklch(0.8 0.01 80)", fontSize: 12 }} axisLine={false} tickLine={false} width={40} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="採用率" radius={[0, 6, 6, 0]} barSize={20}>
                  {adoptionData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-foreground/35 mt-3">資料來源：McKinsey, Backlinko, Forbes 2026</p>
          </motion.div>

          {/* Chart 2: AI Tool User Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-[oklch(0.7_0.15_290)]" />
              <h3 className="text-lg font-bold">AI 工具用戶數（百萬）</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowthData} margin={{ left: -10, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 5%)" />
                <XAxis dataKey="name" tick={{ fill: "oklch(0.8 0.01 80)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "oklch(0.6 0.02 270)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="users" name="用戶數(M)" radius={[6, 6, 0, 0]} barSize={36}>
                  {userGrowthData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-foreground/35 mt-3">資料來源：TechCrunch, eMarketer, Statista 2026</p>
          </motion.div>

          {/* Chart 3: Market Growth Trend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-[oklch(0.82_0.12_165)]" />
              <h3 className="text-lg font-bold">AI 市場規模成長（十億美元）</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={marketTrendData} margin={{ left: -10, right: 10 }}>
                <defs>
                  <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF8A50" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#FF8A50" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorAdoption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 5%)" />
                <XAxis dataKey="year" tick={{ fill: "oklch(0.8 0.01 80)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "oklch(0.6 0.02 270)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="market" name="市場規模(B)" stroke="#FF8A50" fill="url(#colorMarket)" strokeWidth={2} />
                <Area type="monotone" dataKey="adoption" name="採用率(%)" stroke="#A78BFA" fill="url(#colorAdoption)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-xs text-foreground/35 mt-3">資料來源：Precedence Research, McKinsey 2026</p>
          </motion.div>

          {/* Chart 4: AI Tool Category Popularity Radar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-[oklch(0.82_0.14_75)]" />
              <h3 className="text-lg font-bold">AI 工具類別聲量指數</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="oklch(1 0 0 / 8%)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "oklch(0.8 0.01 80)", fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="聲量" dataKey="A" stroke="#FFB347" fill="#FFB347" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
            <p className="text-xs text-foreground/35 mt-3">資料來源：Google Trends, Exploding Topics 2026</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
