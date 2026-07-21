"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Target, Sparkles, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function MissionVisionSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Impact Church Community Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/4.5] group">
              <Image
                src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559521/2403b6cd-b758-47cd-870e-ee8c9b72b19c.png"
                alt="The King's Temple Assemblies of God Community"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl">
                <div className="text-xs font-extrabold text-primary-600 uppercase tracking-wider">OFFINSO, KUMASI, GHANA</div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">A Vibrant, Spirit-Empowered Family</div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Vision Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Target className="w-3.5 h-3.5 text-primary-600" />
              <span>OUR PURPOSE & SACRED CALLING</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              To Know Christ & Make Him Known in Offinso & Beyond
            </h2>

            {/* Mission & Vision Text */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
              <p className="text-lg font-bold text-slate-800 leading-snug">
                {siteConfig.name} exists to lead people into an authentic relationship with Jesus Christ, disciple believers in biblical truth, and serve our community through gospel love.
              </p>
              <p>
                Founded on April 9, 2019 under the leadership of Senior Pastor Collins Ababio, our vision is to build a thriving, multigenerational church family where every person encounters God's presence, discovers their purpose, and impacts their world.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center font-bold mb-2">
                  <Sparkles className="w-4 h-4 text-primary-600" />
                </div>
                <strong className="text-sm font-extrabold text-slate-900 block">Spirit-Filled Worship</strong>
                <span className="text-xs text-slate-500 block leading-snug">Vibrant praise and prayer</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold mb-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-current" />
                </div>
                <strong className="text-sm font-extrabold text-slate-900 block">Warm Community</strong>
                <span className="text-xs text-slate-500 block leading-snug">Love for all generations</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                </div>
                <strong className="text-sm font-extrabold text-slate-900 block">Biblical Truth</strong>
                <span className="text-xs text-slate-500 block leading-snug">Uncompromised God's word</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02] group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about/beliefs"
                className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-extrabold text-xs uppercase tracking-wider px-4 py-3.5 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <span>Statement of Faith (16 Truths)</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
