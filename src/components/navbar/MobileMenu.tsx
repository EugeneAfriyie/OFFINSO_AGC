"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Calendar, Heart, MessageCircle, Crown } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { mobileNavLinks } from "./NavLinks";
import { MobileNavSection } from "./MobileNavSection";
import { useModal } from "@/contexts/ModalContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openModal } = useModal();

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Backdrop Overlay with Smooth Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* 2. Sliding Drawer Panel from the Right Edge */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-sm bg-white shadow-2xl flex flex-col overflow-hidden lg:hidden border-l border-slate-200/80"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Drawer Top Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white flex-shrink-0">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 via-amber-400 to-primary-500 p-[1.5px] shadow-sm flex-shrink-0">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-0.5">
                    <Image
                      src="https://www.agghana.org/_nuxt/logo.TuZ7AZUr.png"
                      alt="Assemblies of God Ghana Emblem"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-950 leading-tight">
                    The King&apos;s Temple
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                    Assemblies of God &bull; Offinso
                  </span>
                </div>
              </Link>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Drawer Body Scroll Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-5">
              {/* Featured Guest Welcome Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-slate-950 text-white shadow-lg space-y-2.5 relative overflow-hidden">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider">
                  <Crown className="w-3 h-3 text-slate-950" />
                  <span>WELCOME TO WORSHIP</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                  Sunday Services in Offinso
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Join us at 9:00 AM &bull; 11:00 AM for inspiring worship and biblical truth.
                </p>

                <button
                  onClick={() => {
                    onClose();
                    openModal("plan-visit");
                  }}
                  className="w-full mt-1 py-2.5 px-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-colors border border-primary-400/40"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Plan Your Visit This Sunday</span>
                </button>
              </div>

              {/* Explore Navigation Section */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider px-1">
                  EXPLORE CATHEDRAL
                </div>
                <div className="space-y-1.5">
                  {mobileNavLinks.map((item, idx) => (
                    <MobileNavSection key={idx} item={item} onCloseMobile={onClose} />
                  ))}
                </div>
              </div>

              {/* Pastoral Care & Support */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider px-1">
                  PASTORAL CARE &amp; CONNECT
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      openModal("prayer-request");
                    }}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1 hover:bg-slate-100 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-rose-500" />
                    <div className="text-xs font-extrabold text-slate-900">Prayer Request</div>
                    <div className="text-[10px] text-slate-500">100% Confidential</div>
                  </button>

                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1 hover:bg-slate-100 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-primary-600" />
                    <div className="text-xs font-extrabold text-slate-900">Contact Us</div>
                    <div className="text-[10px] text-slate-500">Offinso Office</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fixed Mobile Quick Actions Bar (Bottom) */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 grid grid-cols-3 gap-2 flex-shrink-0 text-center">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-2xs hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Us</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  siteConfig.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-2xs hover:bg-slate-100 transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary-600" />
                <span>Location</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  openModal("plan-visit");
                }}
                className="p-2.5 rounded-xl bg-primary-600 text-white font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-2xs hover:bg-primary-500 transition-colors"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Visit Us</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
