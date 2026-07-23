"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Radio, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Users, 
  Clock,
  ArrowRight,
  MapPin,
  Flame,
  Crown,
  Play,
  HeartHandshake,
  Lock
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export function HeroSection() {
  const { openModal } = useModal();

  const fullText = "Welcome to The King's Temple Assemblies of God";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsTypingComplete(false);

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 95);

    return () => clearInterval(timer);
  }, []);

  // Split displayed text to highlight "The King's Temple Assemblies of God" in Gold
  const prefix = "Welcome to ";
  const hasPrefix = displayedText.startsWith(prefix);
  const typedPrefix = hasPrefix ? prefix : displayedText;
  const typedName = hasPrefix ? displayedText.substring(prefix.length) : "";

  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center bg-[#030712] text-white overflow-hidden py-10 sm:py-14 lg:py-20 border-b border-slate-800/80">
      
      {/* 1. ATMOSPHERIC HIGH-DEFINITION LOOPING VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png"
          className="w-full h-full object-cover object-center opacity-35 scale-105 pointer-events-none"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-raised-at-a-music-concert-40150-large.mp4" type="video/mp4" />
          {/* Fallback image if video cannot play */}
          <Image
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png"
            alt="The King's Temple Assemblies of God Worship Experience"
            fill
            className="object-cover object-center opacity-65"
          />
        </video>

        {/* High-Contrast Gradient Mask Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/50 to-[#030712]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/75" />
      </div>

      {/* Radiant Background Aura Glows */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-primary-600/20 via-amber-500/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-primary-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* 2. MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: HERO HEADLINES, TYPEWRITER & CTAS (7 COLS) */}
        <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
          
          {/* Top Cathedral Badge Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-2xl shadow-xl">
            <span className="flex items-center gap-1.5 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>THE KING'S TEMPLE A/G • OFFINSO</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="text-sky-300 text-xs font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Spirit-Filled Worship</span>
            </span>
          </div>

          {/* Main Title with Smooth Typewriter Effect */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] min-h-[3.8em] sm:min-h-[2.8em] lg:min-h-[2.4em] drop-shadow-2xl flex flex-wrap items-center justify-center lg:justify-start">
              <span className="text-white">{typedPrefix}</span>
              {typedName && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 ml-2">
                  {typedName}
                </span>
              )}
              {/* Blinking Typewriter Cursor Bar */}
              <span className={`inline-block w-1.5 sm:w-2 h-6 sm:h-10 bg-amber-400 ml-1.5 align-middle ${isTypingComplete ? 'animate-ping opacity-75' : 'animate-pulse'}`} />
            </h1>

            <p className="text-xs sm:text-base lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Where faith takes flight, God's Word transforms lives, and authentic community flourishes under Senior Pastor Collins Ababio in Offinso, Kumasi.
            </p>
          </div>

          {/* Sunday Service Schedule Pill Bar */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-2 text-amber-300 font-extrabold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SUNDAY SERVICES:</span>
            </div>
            <div className="flex items-center gap-1.5 text-white font-bold">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>1st Service: 9:00 AM &bull; 2nd Service: 11:00 AM GMT</span>
            </div>
          </div>

          {/* Dual Primary & Secondary CTAs (ROYAL BLUE PRIMARY) */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <button
              onClick={() => openModal("plan-visit")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-xl shadow-primary-600/30 hover:scale-[1.02] active:scale-[1] transition-all border border-primary-400/50"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Plan Your Visit This Sunday</span>
            </button>

            <Link
              href="/media/sermons"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl backdrop-blur-xl border border-white/20 transition-all hover:border-white/40"
            >
              <Play className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span>Watch Sermons & Media</span>
            </Link>
          </div>

          {/* Quick Pillar Badges */}
          <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <div className="text-xs">
                <strong className="text-white block font-extrabold text-[10px]">Safe King's Kids</strong>
                <span className="text-slate-400 text-[9px]">Nursery to Teens</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
              </div>
              <div className="text-xs">
                <strong className="text-white block font-extrabold text-[10px]">Warm Family</strong>
                <span className="text-slate-400 text-[9px]">All Generations</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              </div>
              <div className="text-xs">
                <strong className="text-white block font-extrabold text-[10px]">Guest Parking</strong>
                <span className="text-slate-400 text-[9px]">Reserved Slots</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Users className="w-3.5 h-3.5 text-emerald-300" />
              </div>
              <div className="text-xs">
                <strong className="text-white block font-extrabold text-[10px]">2.4K+ Online</strong>
                <span className="text-slate-400 text-[9px]">Active Family</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE 3D GLASS CATHEDRAL CONSOLE & PASTOR CARD */}
        <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/20 p-5 sm:p-7 rounded-3xl shadow-2xl space-y-5 text-left group max-w-lg mx-auto lg:max-w-none">
            
            {/* Top Spotlight Badge */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-950 text-sky-300 text-[10px] font-black uppercase tracking-wider border border-primary-500/30">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>PASTORAL WELCOME</span>
              </div>

              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                EST. APRIL 9, 2019
              </span>
            </div>

            <blockquote className="text-sm sm:text-base font-extrabold text-white leading-snug italic">
              "We cannot wait to welcome you home to the sanctuary in Offinso."
            </blockquote>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Whether you are searching for answers, seeking Pentecostal prayer, or looking for a church family in Offinso, Kumasi — our sanctuary doors are open to you.
            </p>

            {/* Senior Pastor Profile Card with Official Photo */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-slate-900 flex-shrink-0">
                  <Image
                    src={siteConfig.pastorImage}
                    alt={siteConfig.seniorPastor}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-extrabold text-white">{siteConfig.seniorPastor}</div>
                  <div className="text-[10px] text-amber-300 font-bold">Senior Pastor & Founder</div>
                  <div className="text-[9px] text-slate-400">The King's Temple A/G</div>
                </div>
              </div>

              <Link
                href="/leadership"
                className="w-8 h-8 rounded-xl bg-primary-600 hover:bg-primary-500 text-white flex items-center justify-center shadow-md transition-all group-hover:scale-110 flex-shrink-0"
                title="View Pastoral Team"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>

            {/* Quick Interactive Actions */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={() => openModal("prayer-request")}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-left space-y-1 transition-all"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <div className="text-xs font-black text-white">Prayer Request</div>
                <div className="text-[10px] text-slate-400">100% Confidential</div>
              </button>

              <Link
                href="/contact"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-left space-y-1 transition-all"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <div className="text-xs font-black text-white">Campus Map</div>
                <div className="text-[10px] text-slate-400">Offinso Highway</div>
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
