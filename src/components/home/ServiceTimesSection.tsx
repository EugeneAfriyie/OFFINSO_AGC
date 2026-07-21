"use client";

import React from "react";
import Link from "next/link";
import { Clock, MapPin, Calendar, Sparkles, Navigation, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export function ServiceTimesSection() {
  const { openModal } = useModal();

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Top Decorative Brand Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 via-primary-500 to-amber-400" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider mb-2 border border-primary-100">
                <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                <span>SUNDAY & MIDWEEK WORSHIP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Service Times & Location
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openModal("plan-visit")}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Visit Us This Sunday</span>
              </button>
            </div>
          </div>

          {/* 3-Column Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-slate-100">
            
            {/* Card 1: 1st Sunday Service */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-primary-300 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Clock className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">
                1st Sunday Worship
              </h3>
              <p className="text-sm font-bold text-primary-700">
                9:00 AM – 10:30 AM
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Vibrant praise, prayer, and foundational gospel teaching for the family.
              </p>
            </div>

            {/* Card 2: 2nd Sunday Service */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-primary-300 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Clock className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">
                2nd Sunday Service
              </h3>
              <p className="text-sm font-bold text-primary-700">
                11:00 AM – 12:30 PM
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Dynamic celebration service with spirit-filled worship and life application preaching.
              </p>
            </div>

            {/* Card 3: Wednesday Midweek Study */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-primary-300 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-sm">
                <Clock className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">
                Wednesday Bible Study
              </h3>
              <p className="text-sm font-bold text-primary-700">
                6:30 PM – 8:00 PM
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                In-depth scripture breakdown, intercessory prayer, and spiritual growth.
              </p>
            </div>

          </div>

          {/* Location & Directions Footer Bar */}
          <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-xs">Campus Location:</span>
                <span className="text-slate-600 font-medium">{siteConfig.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-extrabold text-primary-600 hover:text-primary-700 text-xs hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions & Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
