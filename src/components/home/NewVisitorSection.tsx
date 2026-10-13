"use client";

import React from "react";
import Link from "next/link";
import { Flame, Clock, Calendar, ShieldCheck, Heart, MapPin, Smile, ArrowRight, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export function NewVisitorSection() {
  const { openModal } = useModal();

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
            <Heart className="w-3.5 h-3.5 text-primary-600" />
            <span>FIRST TIME VISITING US?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What to Expect on Your First Visit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            We know visiting a new church can feel intimidating. At {siteConfig.shortName}, we want you to feel completely at home from the moment you arrive in Offinso, Kumasi.
          </p>
        </div>

        {/* 4-Step Guest Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1: Arriving & Parking */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                  STEP 01
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">
                Reserved Parking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                As our honored guest, reserved parking spaces are waiting for you near the main entrance at Offinso Toll Booth.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-primary-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Easy Campus Navigation</span>
            </div>
          </div>

          {/* Step 2: Warm Hospitality */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Smile className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                  STEP 02
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">
                A Warm Welcome
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our hospitality host team will greet you with a smile, answer your questions, and show you where to go.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-rose-600 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Host Pairing Available</span>
            </div>
          </div>

          {/* Step 3: Safe Kids Check-In */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                  STEP 03
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">
                Safe Kids Check-In
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Your children will enjoy secure, fun, age-appropriate environments led by background-checked leaders.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-amber-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Background-Checked Team</span>
            </div>
          </div>

          {/* Step 4: Inspiring Worship */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                  STEP 04
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">
                Inspiring Service
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Enjoy 90 minutes of Spirit-filled worship praise, uplifting fellowship, and life-changing biblical teaching.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-amber-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>90-Minute Worship Experience</span>
            </div>
          </div>

        </div>

        {/* Guest Concierge Callout Card */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-extrabold text-slate-900">
              Want us to save you a seat this Sunday?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Pre-register your visit and a host will meet you at the front doors with reserved parking and a gift!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <button
              onClick={() => openModal("plan-visit")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Plan Your Visit Now</span>
            </button>
            <Link
              href="/faq"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-slate-700 hover:text-primary-600 font-bold text-xs px-4 py-3.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>Read Guest FAQs</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
