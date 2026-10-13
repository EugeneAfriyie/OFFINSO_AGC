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
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <TopBar />

      {/* Floating Luxury Pill Track */}
      <div className={`transition-all duration-300 ${isScrolled ? "pt-1" : "pt-2"}`}>
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(10,77,156,0.08),0_2px_8px_rgba(0,0,0,0.03)] py-1"
              : "bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] py-1.5"
          }`}
        >
          <DesktopNav
            isMobileOpen={isMobileOpen}
            onToggleMobile={() => setIsMobileOpen(!isMobileOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  );
}
