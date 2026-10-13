"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Sparkles, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

export function QuotesSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const quotes = [
    {
      id: "quote-1",
      text: "Your present condition is not your final destination. When Pentecostal power meets a surrendered heart, divine purpose is awakened in your life.",
      author: siteConfig.seniorPastor,
      role: "Senior Pastor &bull; The King's Temple A/G",
      theme: "Divine Purpose & Revival",
      image: siteConfig.pastorImage,
      reference: "Sunday Sermon Excerpt",
    },
    {
      id: "quote-2",
      text: "Faith does not make things easy; it makes them possible. Stand firm in prayer, trust God's promises, and watch Him turn your greatest trials into powerful testimonies.",
      author: siteConfig.seniorPastor,
      role: "Senior Pastor &bull; The King's Temple A/G",
      theme: "Faith & Breakthrough",
      image: siteConfig.pastorImage,
      reference: "Midweek Exhortation",
    },
    {
      id: "quote-3",
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      author: "Scripture Promise",
      role: "Jeremiah 29:11 (Holy Bible)",
      theme: "Covenant Promise",
      image: "https://images.unsplash.com/photo-1509021436468-d5103974712f?auto=format&fit=crop&w=300&q=80",
      reference: "The Living Word",
    },
  ];

  // Auto-swipe every 6 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, quotes.length]);

  const handleNext = () => setActiveQuote((prev) => (prev + 1) % quotes.length);
  const handlePrev = () => setActiveQuote((prev) => (prev - 1 + quotes.length) % quotes.length);

  const current = quotes[activeQuote];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-blue-50/50 via-amber-50/40 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Eyebrow & Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>PASTORAL WISDOM &amp; INSPIRATION</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold">{siteConfig.shortName}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Words of Faith, Hope &amp; Purpose
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Spiritual insights and biblically grounded encouragement from Senior Pastor Collins Ababio.
          </p>
        </div>

        {/* Featured Editorial Quote Showcase Frame */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-4xl mx-auto bg-slate-50/80 rounded-3xl border border-slate-200/90 p-6 sm:p-12 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.04)] relative overflow-hidden transition-all select-none"
        >
          {/* Top Animated Progress Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-slate-200/80 overflow-hidden">
            {!isHovered && (
              <motion.div
                key={activeQuote}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-gradient-to-r from-primary-600 via-amber-400 to-primary-500"
              />
            )}
          </div>

          {/* Large Background Watermark Icon */}
          <Quote className="absolute -bottom-6 -right-6 w-36 h-36 text-slate-200/40 pointer-events-none" />

          {/* Animated Quote Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: CUBIC_EASE }}
              className="relative z-10 space-y-6"
            >
              {/* Theme & Reference Tag */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-200/80">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{current.theme}</span>
                </div>

                <span className="text-[11px] font-mono text-slate-400 font-bold">
                  {activeQuote + 1} / {quotes.length}
                </span>
              </div>

              {/* Main Quote Text */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 leading-relaxed font-serif italic">
                &ldquo;{current.text}&rdquo;
              </blockquote>

              {/* Author & Controls Lockup */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-sm bg-slate-900 flex-shrink-0">
                    <Image
                      src={current.image}
                      alt={current.author}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">{current.author}</div>
                    <div
                      className="text-xs text-slate-500 font-medium"
                      dangerouslySetInnerHTML={{ __html: current.role }}
                    />
                  </div>
                </div>

                {/* Arrow Controls & Watch Sermon Pill */}
                <div className="flex items-center gap-2">
                  <Link
                    href="/media/sermons"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-primary-600 text-xs font-bold transition-colors shadow-2xs mr-2"
                  >
                    <Play className="w-3 h-3 text-rose-500 fill-rose-500" />
                    <span>Watch Sermon</span>
                  </Link>

                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-all shadow-2xs active:scale-95"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-all shadow-2xs active:scale-95"
                    aria-label="Next quote"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
