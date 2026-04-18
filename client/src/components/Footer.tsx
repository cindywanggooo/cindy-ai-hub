import { Sparkles, Instagram, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-[oklch(1_0_0/5%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.75_0.18_55)] to-[oklch(0.82_0.14_75)] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold">
                <span className="glow-text">Cindy</span> AI Hub
              </span>
            </div>
            <p className="text-sm text-foreground/40 leading-relaxed mb-4">
              Work Smart, Have Fun<br />
              分享 AI 工具、網站與高效生活的一切
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/cindywanggo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[oklch(1_0_0/5%)] flex items-center justify-center hover:bg-[oklch(0.75_0.18_55/20%)] transition-colors"
              >
                <Instagram className="w-4 h-4 text-foreground/50 hover:text-[oklch(0.75_0.18_55)]" />
              </a>
              <a
                href="mailto:cindywanggooo@gmail.com"
                className="w-9 h-9 rounded-lg bg-[oklch(1_0_0/5%)] flex items-center justify-center hover:bg-[oklch(0.75_0.18_55/20%)] transition-colors"
              >
                <Mail className="w-4 h-4 text-foreground/50 hover:text-[oklch(0.75_0.18_55)]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground/70">快速導覽</h4>
            <div className="space-y-2.5">
              {[
                { label: "AI 新聞", href: "#news" },
                { label: "產業應用", href: "#industry" },
                { label: "推薦工具", href: "#tools" },
                { label: "趨勢數據", href: "#trends" },
                { label: "新手大禮包", href: "#gift" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-foreground/40 hover:text-[oklch(0.82_0.14_75)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground/70">推薦資源</h4>
            <div className="space-y-2.5">
              {[
                { label: "ChatGPT", url: "https://chat.openai.com" },
                { label: "Claude", url: "https://claude.ai" },
                { label: "NotebookLM", url: "https://notebooklm.google.com" },
                { label: "Cursor", url: "https://cursor.sh" },
                { label: "Canva AI", url: "https://www.canva.com" },
              ].map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-foreground/40 hover:text-[oklch(0.82_0.14_75)] transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground/70">聯絡合作</h4>
            <p className="text-sm text-foreground/40 leading-relaxed mb-3">
              商業合作、品牌聯名、活動邀約歡迎來信
            </p>
            <a
              href="mailto:cindywanggooo@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[oklch(0.75_0.18_55)] hover:text-[oklch(0.82_0.14_75)] transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              cindywanggooo@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[oklch(1_0_0/5%)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/30">
            &copy; 2026 Cindy Wang AI Hub. All rights reserved.
          </p>
          <p className="text-xs text-foreground/25">
            Made with love by Cindy Wang
          </p>
        </div>
      </div>
    </footer>
  );
}
