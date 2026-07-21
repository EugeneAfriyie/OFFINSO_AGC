"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Landmark, ArrowRight } from "lucide-react";

export function GivingCTASection() {
  return (
    <section className="py-24 bg-canvas border-t border-borderline">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>STEWARDSHIP & GENEROSITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-body tracking-tight">
            Partner With <span className="text-primary-600">What God Is Doing</span>
          </h2>
          <p className="mt-4 text-base text-subtext leading-relaxed">
            Your faithful generosity transforms lives, feeds hungry families in our city, equips our children and youth, and spreads the hope of Jesus Christ locally and globally.
          </p>
        </div>

        {/* 3 Impact Fund Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="bg-white border border-borderline rounded-xl px-4 py-2.5 shadow-subtle flex items-center gap-2 text-xs font-bold text-body">
            <Landmark className="w-4 h-4 text-primary-600" />
            <span>General Ministry & Worship</span>
          </div>
          <div className="bg-white border border-borderline rounded-xl px-4 py-2.5 shadow-subtle flex items-center gap-2 text-xs font-bold text-body">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Community Food Pantry & Outreach</span>
          </div>
          <div className="bg-white border border-borderline rounded-xl px-4 py-2.5 shadow-subtle flex items-center gap-2 text-xs font-bold text-body">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Global Missions & Church Planting</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="/give"
            className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-base px-9 py-4 rounded-xl shadow-md transition-all hover:scale-105"
          >
            <span>Give Online Safely</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-3 text-xs text-subtext flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Encrypted 256-bit SSL secure transaction</span>
          </div>
        </div>

      </div>
    </section>
  );
}
