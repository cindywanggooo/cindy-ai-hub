/**
 * Cindy Wang AI Hub - Home Page
 * Design: Warm Tech Glow (暖光科技感)
 * Deep navy background + warm orange glow + glassmorphism cards
 * Font: Sora (display) + Noto Sans TC (body) + DM Sans (data)
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import IndustrySection from "@/components/IndustrySection";
import ToolsSection from "@/components/ToolsSection";
import TrendsSection from "@/components/TrendsSection";
import GiftPackSection from "@/components/GiftPackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <IndustrySection />
      <ToolsSection />
      <TrendsSection />
      <GiftPackSection />
      <Footer />
    </div>
  );
}
