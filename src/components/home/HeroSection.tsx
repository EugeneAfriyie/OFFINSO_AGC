"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Calendar,
  Car,
  ShieldCheck,
  Heart,
  Users,
  Clock,
  ArrowRight,
  MapPin,
  Flame,
  Crown,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

// 5 Authentic High-Definition Worship & Community Moments
const HERO_SLIDES = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png",
    alt: "The King's Temple Assemblies of God Worship Sanctuary",
    title: "Spirit-Filled Worship Experience",
    step: "PART 01 / WORSHIP",
    tag: "Pentecostal Praise",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559521/2403b6cd-b758-47cd-870e-ee8c9b72b19c.png",
    alt: "The King's Temple Assemblies of God Church Community in Offinso",
    title: "A Thriving Church Family",
    step: "PART 02 / COMMUNITY",
    tag: "Multigenerational",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810555/941727b3-fc8e-4ae3-84b5-90d7d01d2607.png",
    alt: "King's Praise Choir & Vibrant Music Ministry",
    title: "Choir & Anointed Praise",
    step: "PART 03 / SOUND",
    tag: "Anointed Music",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810626/4e872129-04b8-42d1-8588-8b2f5c7830e1.png",
    alt: "King's Kids Children's Ministry at Offinso AGC",
    title: "Safe King's Kids Sanctuary",
    step: "PART 04 / CHILDREN",
    tag: "Nursery to Teens",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810596/2680fa0f-de4a-4e2a-b35c-e137a3a94196.png",
    alt: "Pastor Collins Ababio Preaching Biblical Truth",
    title: "Uncompromised Gospel Preaching",
    step: "PART 05 / TRUTH",
    tag: "Biblical Foundation",
  },
];

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

// Top container orchestration
const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

// Masked text reveal for each headline line
const maskedLineVariants: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: CUBIC_EASE,
    },
  },
};

// Fade up for subtitle & eyebrow
const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: CUBIC_EASE,
    },
  },
};

// Showcase Frame Reveal
const showcaseFrameVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: CUBIC_EASE,
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

export function HeroSection() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance every 4.5 seconds
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-white">
      {/* Subtle architectural dot grid texture & soft ambient glow */}
      <div className="absolute inset-0 opacity-[0.022] bg-[radial-gradient(#1E73E8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-gradient-to-b from-blue-50/70 via-amber-50/40 to-transparent blur-[130px] pointer-events-none -z-10" />

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* TOP SECTION: GRAND EDITORIAL HEADLINE & STATEMENT */}
        <div className="space-y-4 max-w-4xl">
          {/* Eyebrow Label with Live Status Dot */}
          <motion.div
            variants={itemFadeUp}
            className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500"
          >
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            />
            <span className="hover:text-slate-900 transition-colors">
              PENTECOSTAL WORSHIP ECOSYSTEM
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold">{siteConfig.shortName}</span>
          </motion.div>

          {/* MASKED LINE-BY-LINE EDITORIAL HEADLINE */}
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-display font-black tracking-tight text-slate-950 leading-[1.08]">
            <div className="overflow-hidden">
              <motion.div variants={maskedLineVariants} className="block">
                Where faith takes flight.
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div variants={maskedLineVariants} className="block">
                And{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  sanctuary
                </span>{" "}
                welcomes you.
              </motion.div>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={itemFadeUp}
            className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed pt-1"
          >
            Experience vibrant Pentecostal worship, biblical depth, and authentic love under Senior
            Pastor Collins Ababio. Offinso Toll Booth Highway, Kumasi, Ghana.
          </motion.p>
        </div>

        {/* BESPOKE EDITORIAL SHOWCASE FRAME */}
        <motion.div
          variants={showcaseFrameVariants}
          className="mt-10 rounded-3xl border border-slate-200/80 bg-slate-50/50 p-3 sm:p-5 shadow-[0_8px_30px_-8px_rgba(10,77,156,0.06)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* 1. LEFT: INTERACTIVE AUTO-PLAYING WORSHIP CAROUSEL */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] shadow-xl group select-none flex flex-col justify-between"
            >
              {/* Top Progress Bar for Current Slide */}
              <div className="absolute top-0 inset-x-0 h-1 bg-white/10 z-30 overflow-hidden">
                {isPlaying && !isHovered && (
                  <motion.div
                    key={currentSlide}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4.5, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-primary-500 via-amber-400 to-primary-400"
                  />
                )}
              </div>

              {/* Slide Images with Smooth Crossfade Animation */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: CUBIC_EASE }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={HERO_SLIDES[currentSlide].src}
                      alt={HERO_SLIDES[currentSlide].alt}
                      fill
                      priority={currentSlide === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle top & bottom dark gradient scrims */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />
              </div>

              {/* TOP HEADER CONTROLS */}
              <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/90 font-bold">
                    OFFINSO SANCTUARY
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/10">
                  <span className="text-[11px] font-mono text-slate-300">
                    {currentSlide + 1} / {HERO_SLIDES.length}
                  </span>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white/80 hover:text-white transition-colors ml-1 p-0.5"
                    aria-label={isPlaying ? "Pause slides" : "Play slides"}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* BOTTOM SLIDE CAPTION & NAVIGATION ARROWS */}
              <div className="relative z-20 p-4 sm:p-6 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-extrabold bg-amber-400/20 border border-amber-400/30 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {HERO_SLIDES[currentSlide].step} • {HERO_SLIDES[currentSlide].tag}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {HERO_SLIDES[currentSlide].title}
                </h3>
              </div>
            </div>

            {/* 2. RIGHT: CATHEDRAL CONSOLE & PASTORAL WELCOME */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              {/* Senior Pastor Welcome Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-[10px] font-mono font-bold uppercase tracking-wider border border-primary-100">
                    <Crown className="w-3.5 h-3.5 text-amber-500" />
                    <span>PASTORAL WELCOME</span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                    EST. APRIL 9, 2019
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base font-bold text-slate-900 leading-snug italic">
                  &ldquo;We cannot wait to welcome you home to the sanctuary in Offinso.&rdquo;
                </blockquote>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Whether you are searching for spiritual answers, seeking Pentecostal prayer, or looking for a loving church family in Offinso, Kumasi — our sanctuary doors are wide open.
                </p>

                {/* Pastor Profile Card */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-amber-400 shadow-sm bg-slate-900 flex-shrink-0">
                      <Image
                        src={siteConfig.pastorImage}
                        alt={siteConfig.seniorPastor}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-950">
                        {siteConfig.seniorPastor}
                      </div>
                      <div className="text-[10px] text-amber-700 font-bold">
                        Senior Pastor &bull; The King's Temple A/G
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/leadership"
                    className="w-8 h-8 rounded-lg bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105"
                    title="View Pastoral Leadership"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Sunday Service Schedule Pill Bar */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    SUNDAY SERVICES:
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Clock className="w-3.5 h-3.5 text-primary-600" />
                  <span>1st: 9:00 AM &bull; 2nd: 11:00 AM &bull; Wed: 6:30 PM</span>
                </div>
              </div>

              {/* Primary & Secondary Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal("plan-visit")}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-primary-600/20 transition-all border border-primary-500/50"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Plan Your Visit This Sunday</span>
                </motion.button>

                <Link
                  href="/media/sermons"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-slate-200/80 transition-all"
                >
                  <Play className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <span>Watch Sermons</span>
                </Link>
              </div>

              {/* Quick Interactive Actions: Prayer & Map */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => openModal("prayer-request")}
                  className="p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/80 text-left space-y-1 transition-all group shadow-2xs"
                >
                  <Lock className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-extrabold text-slate-950">Prayer Request</div>
                  <div className="text-[10px] text-slate-500">100% Confidential</div>
                </button>

                <Link
                  href="/contact"
                  className="p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/80 text-left space-y-1 transition-all group shadow-2xs"
                >
                  <MapPin className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-extrabold text-slate-950">Campus Map</div>
                  <div className="text-[10px] text-slate-500">Offinso Toll Booth</div>
                </Link>
              </div>

              {/* 4 Quick Badges */}
              <div className="pt-2 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold text-[10px]">Safe Kids</strong>
                    <span className="text-slate-500 text-[9px]">Nursery to Teens</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold text-[10px]">Warm Family</strong>
                    <span className="text-slate-500 text-[9px]">All Generations</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <Car className="w-3.5 h-3.5 text-primary-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold text-[10px]">Parking</strong>
                    <span className="text-slate-500 text-[9px]">Reserved Slots</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold text-[10px]">2.4K+ Online</strong>
                    <span className="text-slate-500 text-[9px]">Active Family</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
