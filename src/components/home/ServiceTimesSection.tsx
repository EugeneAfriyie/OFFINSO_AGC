"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Calendar, Sparkles, Flame, BookOpen, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    id: "service-1",
    tabLabel: "1st Sunday Service",
    title: "1st Sunday Worship Service",
    time: "9:00 AM – 10:30 AM",
    type: "MORNING GLORY",
    badgeColor: "bg-blue-50 text-primary-600 border-blue-200",
    description: "An intimate, early morning encounter with God focused on vibrant praise, deep prayer, and foundational scripture teaching for individuals and families.",
    highlights: [
      "Vibrant Pentecostal praise & adoration",
      "Full King's Kids Nursery & Sunday School available",
      "Foundational, life-applicable biblical preaching",
      "Reserved front guest parking with welcoming ushers",
    ],
    icon: Flame,
  },
  {
    id: "service-2",
    tabLabel: "2nd Sunday Service",
    title: "2nd Sunday Celebration Service",
    time: "11:00 AM – 12:30 PM",
    type: "CELEBRATION GATHERING",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    description: "A high-energy, dynamic celebration service filled with uplifting music from the King's Praise choir, spirit-filled intercession, and empowering gospel ministry.",
    highlights: [
      "Full choir worship and energetic praise",
      "Empowering sermon by Senior Pastor Collins Ababio",
      "Personal altar ministry and healing prayer",
      "Post-service fellowship with refreshments for new visitors",
    ],
    icon: Sparkles,
  },
  {
    id: "service-3",
    tabLabel: "Wednesday Midweek",
    title: "Wednesday Midweek Bible Study",
    time: "6:30 PM – 8:00 PM",
    type: "DEEP DISCIPLESHIP",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    description: "Our in-depth mid-week sanctuary study designed to help believers unpack theology, grow in prayer discipline, and build strong doctrinal resilience.",
    highlights: [
      "Interactive chapter-by-chapter scripture breakdown",
      "Fervent corporate intercession and warfare prayer",
      "Open Q&A on faith and practical Christian living",
      "Midweek spiritual recharge after work and school",
    ],
    icon: BookOpen,
  },
];

export function ServiceTimesSection() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState(0);

  const currentService = SERVICES[activeTab];
  const IconComponent = currentService.icon;

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient radial highlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-b from-blue-50/60 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 pb-6 border-b border-slate-200/80">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
              <span>SUNDAY &amp; MIDWEEK WORSHIP</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700 font-semibold">CATHEDRAL SCHEDULE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Gather with Us in His Presence
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Join us weekly at the Offinso Toll Booth sanctuary or connect via our live broadcast. Every service is crafted to encounter God&apos;s transformative love.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal("plan-visit")}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Visit Us This Sunday</span>
            </motion.button>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-2xl max-w-md mx-auto mb-8 shadow-inner">
          {SERVICES.map((srv, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-colors text-center ${
                  isActive ? "text-slate-950" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{srv.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Service Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: CUBIC_EASE }}
            className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.04)] mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Service Details (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${currentService.badgeColor}`}
                  >
                    {currentService.type}
                  </span>

                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary-700 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">
                    <Clock className="w-3.5 h-3.5 text-primary-600" />
                    <span>{currentService.time}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                  {currentService.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {currentService.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    SERVICE HIGHLIGHTS &amp; EXPECTATIONS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentService.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Feature Box (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200/80 p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase">
                      DOORS OPEN
                    </div>
                    <div className="text-sm font-extrabold text-slate-900">
                      30 Mins Before Service
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>Main Sanctuary Location</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Offinso Toll Booth, Main Cathedral Highway, Offinso, Kumasi, Ghana.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-primary-600" />
                  <span>Free reserved guest parking with parking stewards.</span>
                </div>

                <button
                  onClick={() => openModal("plan-visit")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-xs"
                >
                  <span>Reserve Your Seat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom 3-Card Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-white border-primary-500 shadow-sm"
                  : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-extrabold text-slate-900">{srv.tabLabel}</span>
                <span className="text-[10px] font-mono text-primary-600 font-bold">
                  {srv.time}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {srv.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
