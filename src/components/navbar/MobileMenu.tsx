"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Phone, MapPin, Calendar, Heart, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { navLinks } from "./NavLinks";
import { MobileNavSection } from "./MobileNavSection";
import { CTAButton } from "./CTAButton";
import { useModal } from "@/contexts/ModalContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white animate-fadeIn">
      
      {/* Mobile Drawer Top Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white flex-shrink-0">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="https://www.agghana.org/_nuxt/logo.TuZ7AZUr.png"
              alt="Assemblies of God Ghana Emblem"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-slate-900 leading-tight">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] font-bold text-primary-600 uppercase tracking-wider">
              Offinso, Kumasi
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          aria-label="Close mobile menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Body Scroll Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-6">
        
        {/* Featured Guest Welcome Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-primary-900 via-primary-800 to-navy-950 text-white shadow-xl space-y-3 relative overflow-hidden">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-slate-950" />
            <span>WELCOME GUEST</span>
          </div>
          <h3 className="text-lg font-extrabold text-white leading-tight">
            Welcome to The King's Temple
          </h3>
          <p className="text-xs text-slate-200 leading-relaxed font-normal">
            Join our church family this Sunday at Offinso Toll Booth, Kumasi for inspiring worship and biblical truth.
          </p>

          <CTAButton fullWidth className="mt-2" />
        </div>

        {/* Explore Navigation Section */}
        <div className="space-y-2">
          <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider px-1">
            EXPLORE CHURCH
          </div>
          <div className="space-y-2">
            {navLinks.map((item, idx) => (
              <MobileNavSection key={idx} item={item} onCloseMobile={onClose} />
            ))}
          </div>
        </div>

        {/* Connect & Ministry Quick Links */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider px-1">
            CONNECT WITH US
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
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-sm"
        >
          <Phone className="w-4 h-4 text-amber-600" />
          <span>Call Us</span>
        </a>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-sm"
        >
          <MapPin className="w-4 h-4 text-primary-600" />
          <span>Location</span>
        </a>

        <button
          onClick={() => {
            onClose();
            openModal("plan-visit");
          }}
          className="p-2.5 rounded-xl bg-primary-600 text-white font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-sm"
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span>Visit Sunday</span>
        </button>
      </div>

    </div>
  );
}
