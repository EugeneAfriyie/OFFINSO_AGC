"use client";

import React from "react";
import { Sparkles, Crown, Clock, MapPin, Heart, ShieldCheck, Flame } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function SanctuaryTickerBar() {
  const tickerItems = [
    { label: "SUNDAY 1ST WORSHIP", value: "9:00 AM – 10:30 AM", icon: Clock },
    { label: "SUNDAY 2ND CELEBRATION", value: "11:00 AM – 12:30 PM", icon: Flame },
    { label: "WEDNESDAY BIBLE STUDY", value: "6:30 PM – 8:00 PM", icon: Sparkles },
    { label: "CAMPUS LOCATION", value: "Offinso Toll Booth Highway, Kumasi", icon: MapPin },
    { label: "SENIOR PASTOR", value: siteConfig.seniorPastor, icon: Crown },
    { label: "CONFIDENTIAL PRAYER", value: "24/7 Pastoral Intercession", icon: Heart },
    { label: "SAFE KING'S KIDS", value: "Nursery to Teens Ministry", icon: ShieldCheck },
    { label: "AFFILIATION", value: "Assemblies of God Ghana", icon: Crown },
  ];

  return (
    <div className="relative border-y border-slate-200/80 bg-white/90 backdrop-blur-md py-3 overflow-hidden marquee-container select-none">
      {/* Subtle brand side gradient fades for seamless edge bleeding */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex">
        {/* Track 1 */}
        <div className="animate-marquee-left flex items-center gap-8 pr-8">
          {tickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`t1-${idx}`} className="flex items-center gap-2.5 text-xs whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
                <span className="font-mono text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  {item.label}:
                </span>
                <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-amber-500" />
                  {item.value}
                </span>
                <span className="text-slate-300 ml-3">/</span>
              </div>
            );
          })}
        </div>

        {/* Duplicate Track 2 for seamless infinite loop */}
        <div className="animate-marquee-left flex items-center gap-8 pr-8" aria-hidden="true">
          {tickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`t2-${idx}`} className="flex items-center gap-2.5 text-xs whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
                <span className="font-mono text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  {item.label}:
                </span>
                <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-amber-500" />
                  {item.value}
                </span>
                <span className="text-slate-300 ml-3">/</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
