"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { navLinks } from "./NavLinks";
import { NavItem } from "./NavItem";
import { MegaMenu } from "./MegaMenu";
import { CTAButton } from "./CTAButton";
import { Menu, X, Heart } from "lucide-react";

interface DesktopNavProps {
  isMobileOpen: boolean;
  onToggleMobile: () => void;
}

export function DesktopNav({ isMobileOpen, onToggleMobile }: DesktopNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<"about" | "ministries" | "media" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (type?: "about" | "ministries" | "media") => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (type) setActiveDropdown(type);
    else setActiveDropdown(null);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between">
      
      {/* Official Church Branding & Sleek Logo Lockup */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 flex-shrink-0 p-0.5 bg-white rounded-xl border border-amber-400/80 shadow-sm group-hover:scale-105 transition-transform">
          <Image
            src="https://www.agghana.org/_nuxt/logo.TuZ7AZUr.png"
            alt="Assemblies of God Ghana Emblem"
            fill
            sizes="40px"
            className="object-contain p-0.5"
            priority
          />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-base font-black tracking-tight text-slate-900 leading-none group-hover:text-primary-700 transition-colors">
            {siteConfig.shortName}
          </span>
          <span className="text-[10px] font-black text-amber-600 tracking-wider uppercase mt-1">
            Assemblies of God • Offinso
          </span>
        </div>
      </Link>

      {/* Main Desktop Navigation Items Track */}
      <nav className="hidden lg:flex items-center gap-5" aria-label="Main Navigation">
        {navLinks.map((item, idx) => (
          <NavItem
            key={idx}
            item={item}
            isActiveDropdown={activeDropdown === item.dropdownType}
            onMouseEnter={() => handleMouseEnter(item.dropdownType)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveDropdown(activeDropdown === item.dropdownType ? null : (item.dropdownType || null))}
          />
        ))}
      </nav>

      {/* Right Action: Clean Focused Primary & Giving CTAs */}
      <div className="hidden lg:flex items-center gap-3">
        <Link
          href="/give"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider transition-colors"
        >
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Give</span>
        </Link>

        <CTAButton />
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={onToggleMobile}
        className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
      >
        {isMobileOpen ? <X className="w-5.5 h-5.5 text-slate-900" /> : <Menu className="w-5.5 h-5.5 text-slate-900" />}
      </button>

      {/* Active Mega Menu Floating Component */}
      {activeDropdown && (
        <MegaMenu
          type={activeDropdown}
          items={navLinks.find((l) => l.dropdownType === activeDropdown)?.megaItems || []}
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
          onClose={() => setActiveDropdown(null)}
        />
      )}

    </div>
  );
}
