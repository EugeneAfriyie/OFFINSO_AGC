"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Quote, Star, Sparkles, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

type TestimonyCategory = "all" | "growth" | "youth" | "welfare";

interface TestimonyItem {
  id: string;
  category: "growth" | "youth" | "welfare";
  categoryLabel: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  avatarGradient: string;
  quote: string;
  highlightStat: string;
  verifiedBadge: string;
  accentColor: "blue" | "amber" | "emerald";
}

const TESTIMONIES: TestimonyItem[] = [
  {
    id: "testimony-1",
    category: "growth",
    categoryLabel: "Spiritual Growth",
    name: "Sister Abena Osei",
    role: "Church Member",
    location: "Offinso, Kumasi",
    initials: "AO",
    avatarGradient: "from-primary-600 to-primary-800 text-white",
    quote: "Finding The King's Temple A/G was a turning point for my family. Senior Pastor Collins Ababio's biblical teachings and the warm fellowship restored our hope and strengthened our faith in God.",
    highlightStat: "Faith Restored",
    verifiedBadge: "Sanctuary Member Since 2020",
    accentColor: "blue",
  },
  {
    id: "testimony-2",
    category: "youth",
    categoryLabel: "Youth & Next Gen",
    name: "Brother Kwame Mensah",
    role: "Youth Parent",
    location: "Offinso Toll Booth",
    initials: "KM",
    avatarGradient: "from-amber-500 to-amber-700 text-white",
    quote: "The Kingdom Youth ministry empowered my teenagers with godly direction, strong moral values, and purpose. I am deeply grateful for a church family that genuinely invests in the next generation.",
    highlightStat: "2 Youths Mentored",
    verifiedBadge: "Active Youth Family",
    accentColor: "amber",
  },
  {
    id: "testimony-3",
    category: "welfare",
    categoryLabel: "Healing & Welfare",
    name: "Deaconess Grace Appiah",
    role: "Welfare Leader",
    location: "Offinso Central",
    initials: "GA",
    avatarGradient: "from-emerald-600 to-emerald-800 text-white",
    quote: "Through the church's community health outreach and intercessory prayer ministry, God healed my body and gave me a passion to serve less privileged families across Offinso.",
    highlightStat: "Divine Healing",
    verifiedBadge: "Welfare Team Leader",
    accentColor: "emerald",
  },
  {
    id: "testimony-4",
    category: "growth",
    categoryLabel: "Spiritual Growth",
    name: "Elder Samuel Boateng",
    role: "Bible Study Member",
    location: "Offinso South",
    initials: "SB",
    avatarGradient: "from-primary-700 to-slate-900 text-white",
    quote: "Wednesday Midweek Bible Study opened the scriptures to me in ways I had never experienced. My prayer life and marriage have experienced profound renewal.",
    highlightStat: "Discipleship Growth",
    verifiedBadge: "Midweek Study Regular",
    accentColor: "blue",
  },
  {
    id: "testimony-5",
    category: "youth",
    categoryLabel: "Youth & Next Gen",
    name: "Sister Priscilla Darko",
    role: "King's Praise Choir",
    location: "Offinso Highway",
    initials: "PD",
    avatarGradient: "from-amber-600 to-rose-600 text-white",
    quote: "Serving in the worship and choir ministry helped me discover my God-given gifts. The spiritual mentorship here is practical, loving, and transformative.",
    highlightStat: "Praise Leader",
    verifiedBadge: "Choir Team Member",
    accentColor: "amber",
  },
  {
    id: "testimony-6",
    category: "welfare",
    categoryLabel: "Healing & Welfare",
    name: "Brother Kofi Asare",
    role: "Outreach Volunteer",
    location: "Kumasi North",
    initials: "KA",
    avatarGradient: "from-emerald-700 to-teal-900 text-white",
    quote: "When I moved to Offinso, the welcoming hospitality team embraced me from my very first Sunday. This is truly a spiritual sanctuary where nobody walks alone.",
    highlightStat: "Warm Community",
    verifiedBadge: "Community Volunteer",
    accentColor: "emerald",
  },
];

export function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<TestimonyCategory>("all");

  const filteredTestimonies =
    activeFilter === "all"
      ? TESTIMONIES
      : TESTIMONIES.filter((item) => item.category === activeFilter);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient radial highlight */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[300px] bg-gradient-to-r from-blue-50/40 via-amber-50/30 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>STORIES OF FAITH &amp; TRANSFORMATION</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold">{siteConfig.shortName}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Lives Touched by God&apos;s Grace
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Real stories from members and families whose lives have been touched by God&apos;s love and biblical truth in Offinso.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Testimonies" },
            { id: "growth", label: "Spiritual Growth" },
            { id: "youth", label: "Youth & Next Gen" },
            { id: "welfare", label: "Healing & Outreach" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as TestimonyCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? "bg-slate-950 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Testimonies Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredTestimonies.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: CUBIC_EASE }}
                className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_-6px_rgba(10,77,156,0.08)] hover:border-slate-300 transition-all flex flex-col justify-between group space-y-5"
              >
                <div className="space-y-3.5">
                  {/* Top Rating & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-100">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Highlight Stat Pill */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/80">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{item.highlightStat}</span>
                  </div>
                </div>

                {/* Author Profile Lockup */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.avatarGradient} flex items-center justify-center font-extrabold text-xs shadow-xs border border-white/40 flex-shrink-0`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900">{item.name}</div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {item.role} &bull; {item.location}
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200"
                    title={item.verifiedBadge}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
