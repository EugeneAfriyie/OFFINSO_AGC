"use client";

import React from "react";
import { Clock, Phone, MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function TopBar() {
  return (
    <div className="bg-[#030712] text-slate-300 text-[11px] font-semibold py-2 px-4 border-b border-slate-800 hidden sm:block">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* Sunday Service Schedule Announcement Pill */}
        <div className="flex items-center gap-2.5 text-slate-300">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-primary-600/30 text-amber-300 px-3 py-0.5 rounded-full font-black uppercase tracking-wider text-[10px] border border-amber-400/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SUNDAY WORSHIP SCHEDULE</span>
          </span>
          <span className="hidden md:inline font-bold text-white">1st Service: 9:00 AM &bull; 2nd Service: 11:00 AM GMT</span>
        </div>

        {/* Quick Contact & Location Info */}
        <div className="flex items-center gap-6 text-slate-300">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold">Offinso Toll Booth, Kumasi</span>
          </div>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-black"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
