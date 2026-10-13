"use client";

import React from "react";
import Link from "next/link";
import { Heart, Phone, ShieldCheck, Lock, Send, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export function PrayerSection() {
  const { openModal } = useModal();

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Clean High-Contrast White Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Top Decorative Brand Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 via-primary-500 to-amber-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Prayer Message & Vision (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>CONFIDENTIAL PRAYER SUPPORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                How Can We Pray for You Today?
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                No matter what burden, sickness, or challenge you are facing, God hears prayer. Senior Pastor Collins Ababio and our dedicated intercessory prayer team in Offinso, Kumasi are standing with you in faith.
              </p>

              {/* Reassurance Badges Bar */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>100% Confidential & Private</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Daily Intercessory Covering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>Direct Pastoral Helpline</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Actions (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Primary Action Button: Submit Prayer */}
              <button
                onClick={() => openModal("prayer-request")}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[1]"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Submit Confidential Prayer Request</span>
              </button>

              {/* Pastoral Phone Callout Card */}
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="w-full p-4 rounded-xl bg-slate-50 hover:bg-primary-50/60 border border-slate-200 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pastoral Helpline:</div>
                    <div className="text-sm font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">{siteConfig.phone}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
