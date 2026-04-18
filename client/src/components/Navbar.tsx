import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "AI 新聞", href: "#news" },
  { label: "產業應用", href: "#industry" },
  { label: "推薦工具", href: "#tools" },
  { label: "趨勢數據", href: "#trends" },
  { label: "新手大禮包", href: "#gift" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.13_0.02_270/85%)] backdrop-blur-xl border-b border-[oklch(1_0_0/8%)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.18_55)] to-[oklch(0.82_0.14_75)] flex items-center justify-center shadow-lg shadow-[oklch(0.75_0.18_55/20%)] group-hover:shadow-[oklch(0.75_0.18_55/40%)] transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="glow-text">Cindy</span>
              <span className="text-foreground/90"> AI Hub</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors rounded-lg hover:bg-[oklch(1_0_0/5%)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/cindywanggo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-[oklch(0.75_0.18_55)] to-[oklch(0.82_0.14_75)] text-white shadow-lg shadow-[oklch(0.75_0.18_55/25%)] hover:shadow-[oklch(0.75_0.18_55/40%)] transition-all hover:scale-105"
            >
              追蹤 IG
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[oklch(1_0_0/5%)] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[oklch(0.13_0.02_270/95%)] backdrop-blur-xl border-b border-[oklch(1_0_0/8%)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-[oklch(1_0_0/5%)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
