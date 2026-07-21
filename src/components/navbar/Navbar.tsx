"use client";

import React, { useState, useEffect } from "react";
import { TopBar } from "./TopBar";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <TopBar />

      {/* Main Navigation Track with Clean Ultra-Sleek Glassmorphism (No Side Shadow Cutoffs) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-2xl border-b border-slate-200 py-0.5 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)]"
            : "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 py-1"
        }`}
      >
        <DesktopNav
          isMobileOpen={isMobileOpen}
          onToggleMobile={() => setIsMobileOpen(!isMobileOpen)}
        />
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  );
}
