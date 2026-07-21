"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function QuotesSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const quotes = [
    {
      id: "quote-1",
      text: "Your present condition is not your final destination. When Pentecostal power meets a surrendered heart, divine purpose is awakened in your life.",
      author: siteConfig.seniorPastor,
      role: "Senior Pastor • The King's Temple A/G",
      theme: "Divine Purpose & Revival",
      image: siteConfig.pastorImage,
    },
    {
      id: "quote-2",
      text: "Faith does not make things easy; it makes them possible. Stand firm in prayer, trust God's promises, and watch Him turn your greatest trials into powerful testimonies.",
      author: siteConfig.seniorPastor,
      role: "Senior Pastor • The King's Temple A/G",
      theme: "Faith & Breakthrough",
      image: siteConfig.pastorImage,
    },
    {
      id: "quote-3",
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      author: "Scripture Promise",
      role: "Jeremiah 29:11 (Holy Bible)",
      theme: "Covenant Promise",
      image: "https://images.unsplash.com/photo-1509021436468-d5103974712f?auto=format&fit=crop&w=300&q=80",
    },
  ];

  // Auto-swipe every 6 seconds (pauses silently on hover)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovered, quotes.length]);

  const handleNext = () => {
    setActiveQuote((prev) => (prev + 1) % quotes.length);
  };

  const handlePrev = () => {
    setActiveQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const current = quotes[activeQuote];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
            <Quote className="w-3.5 h-3.5 text-primary-600" />
            <span>PASTORAL WISDOM & INSPIRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Words of Faith, Hope & Purpose
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Spiritual insights and biblically grounded encouragement from Senior Pastor Collins Ababio.
          </p>
        </div>

        {/* Featured Quote Showcase Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl relative overflow-hidden transition-all"
        >
          {/* Top Decorative Brand Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 via-amber-400 to-secondary-500" />

          {/* Large Background Quote Watermark */}
          <Quote className="absolute -bottom-6 -right-6 w-40 h-40 text-slate-200/50 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            
            {/* Theme Tag */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{current.theme}</span>
              </div>
            </div>

            {/* Main Quote Text */}
            <blockquote className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight italic min-h-[90px]">
              "{current.text}"
            </blockquote>

            {/* Author Profile Lockup & Navigation Controls */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              
              {/* Author Details */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300 shadow-md bg-slate-200 flex-shrink-0">
                  <Image
                    src={current.image}
                    alt={current.author}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900">{current.author}</div>
                  <div className="text-xs text-primary-600 font-bold">{current.role}</div>
                </div>
              </div>

              {/* Slider Navigation & Pagination Dots */}
              <div className="flex items-center gap-4">
                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {quotes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQuote(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeQuote === idx
                          ? "bg-primary-600 w-6"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-white hover:bg-primary-50 text-slate-800 border border-slate-200 shadow-sm transition-colors focus:outline-none"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-white hover:bg-primary-50 text-slate-800 border border-slate-200 shadow-sm transition-colors focus:outline-none"
                    aria-label="Next quote"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
