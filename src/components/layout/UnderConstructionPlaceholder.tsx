"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, Clock, ShieldCheck, MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/config/site.config";

interface PlaceholderProps {
  pageTitle: string;
  routePath: string;
}

export function UnderConstructionPlaceholder({ pageTitle, routePath }: PlaceholderProps) {
  return (
    <div className="min-h-[75vh] bg-slate-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl text-center relative overflow-hidden">
        
        {/* Top Decorative Blue Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 via-primary-500 to-sky-400" />

        {/* Official Church Logo Emblem */}
        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center mx-auto mb-5 shadow-md">
          <Image 
            src={siteConfig.logo} 
            alt="The King's Temple A/G Logo" 
            width={56} 
            height={56} 
            className="object-contain w-full h-full"
          />
        </div>

        {/* Official Church Name */}
        <div className="text-xs font-extrabold uppercase tracking-wider text-primary-600 mb-1">
          {siteConfig.name}
        </div>
        <div className="text-[11px] text-slate-500 mb-3">
          Senior Pastor: <strong className="text-slate-800 font-semibold">{siteConfig.seniorPastor}</strong>
        </div>

        {/* Route Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-bold font-mono mb-3 border border-primary-100">
          <span>{routePath}</span>
        </div>

        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full mb-4 border border-rose-100">
          <Heart className="w-3 h-3 text-rose-500 fill-current" />
          <span>{siteConfig.tagline}</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
          {pageTitle}
        </h1>
        <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mb-4">
          <MapPin className="w-3.5 h-3.5 text-primary-600" />
          <span>{siteConfig.location}</span>
        </p>

        <p className="text-xs font-semibold text-primary-600 mb-4 flex items-center justify-center gap-1.5">
          <Clock className="w-4 h-4 text-primary-600" />
          <span>Page Under Construction</span>
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          We are carefully designing and crafting this experience step-by-step for The King's Temple Assemblies of God. This page will be published soon.
        </p>

        {/* Back to Home Action */}
        <div className="pt-4 border-t border-slate-100">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-sm transition-all hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span>Back to Homepage</span>
          </Link>
        </div>

        {/* Footnote */}
        <div className="mt-6 text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
          <span>{siteConfig.shortName} — Established April 9, 2019</span>
        </div>

      </div>
    </div>
  );
}
