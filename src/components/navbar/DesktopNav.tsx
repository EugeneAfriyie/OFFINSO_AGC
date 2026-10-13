"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { desktopNavLinks } from "./NavLinks";
import { NavItem } from "./NavItem";
import { MegaMenu } from "./MegaMenu";
import { Menu, X, Heart, Calendar } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

interface DesktopNavProps {
  isMobileOpen: boolean;
  onToggleMobile: () => void;
}

export function DesktopNav({ isMobileOpen, onToggleMobile }: DesktopNavProps) {
  const { openModal } = useModal();
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
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
      {/* 1. Official Church Branding & Compact Elevated Logo Lockup */}
      <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
        <motion.div
          whileHover={{ rotate: 4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-amber-400 to-primary-500 p-[1.5px] shadow-sm shadow-primary-600/20 group-hover:shadow-md transition-all duration-200"
        >
          <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-0.5 overflow-hidden">
            <Image
              src="https://www.agghana.org/_nuxt/logo.TuZ7AZUr.png"
              alt="Assemblies of God Ghana Emblem"
              fill
              sizes="40px"
              className="object-contain p-1"
              priority
            />
          </div>
        </motion.div>

        <div className="flex flex-col text-left">
          <div className="flex items-center">
            <span className="font-display font-black text-base sm:text-lg tracking-tight text-slate-950 group-hover:text-primary-700 transition-colors whitespace-nowrap">
              The King&apos;s Temple
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1.5 inline-block animate-pulse" />
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-700 tracking-wider uppercase hidden xl:block">
            Assemblies of God &bull; Offinso
          </span>
        </div>
      </Link>

      {/* 2. Streamlined Desktop Navigation Track in Airy Pill Container */}
      <nav
        className="hidden lg:flex items-center gap-0.5 bg-slate-100/70 p-1 rounded-full border border-slate-200/60 shadow-inner shrink-0"
        aria-label="Main Navigation"
      >
        {desktopNavLinks.map((item, idx) => (
          <NavItem
            key={idx}
            item={item}
            isActiveDropdown={activeDropdown === item.dropdownType}
            onMouseEnter={() => handleMouseEnter(item.dropdownType)}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              setActiveDropdown(
                activeDropdown === item.dropdownType ? null : (item.dropdownType || null)
              )
            }
          />
        ))}
      </nav>

      {/* 3. Right Action Buttons: Spacious & High-Converting */}
      <div className="hidden lg:flex items-center gap-2.5 shrink-0">
        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/give"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100/80 border border-rose-200/70 text-rose-800 text-xs font-bold transition-all shadow-2xs"
            title="Online Tithe & Offering"
          >
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Give</span>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
          <button
            onClick={() => openModal("plan-visit")}
            className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-sm shadow-primary-600/20 hover:shadow-md transition-all border border-primary-500/50"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden xl:inline">Plan Your Visit</span>
            <span className="inline xl:hidden">Visit Us</span>
          </button>
        </motion.div>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onToggleMobile}
        className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
      >
        {isMobileOpen ? (
          <X className="w-5.5 h-5.5 text-slate-900" />
        ) : (
          <Menu className="w-5.5 h-5.5 text-slate-900" />
        )}
      </motion.button>

      {/* Active Mega Menu Floating Component */}
      {activeDropdown && (
        <MegaMenu
          type={activeDropdown}
          items={desktopNavLinks.find((l) => l.dropdownType === activeDropdown)?.megaItems || []}
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
          onClose={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
}
