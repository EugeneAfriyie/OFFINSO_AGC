"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Radio, Volume2, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function SermonSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100 shadow-subtle">
            <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span>FEATURED SERMON MESSAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Watch & Listen to God's Word
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            An empowering message from Senior Pastor Collins Ababio
          </p>
        </div>

        {/* Single Featured Video Card Showcase */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Left Side: Cloudinary Video Player (Unmuted HTML5 Video) */}
            <div className="lg:col-span-7 relative aspect-video bg-slate-950 overflow-hidden">
              <video
                controls
                playsInline
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dzqdfaghg/video/upload/v1784562561/Download_7_qhjjbk.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Side: Message Details & Actions (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 flex flex-col justify-between h-full">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-extrabold text-primary-600 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kingdom Authority Series</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Walking in Divine Purpose & Pentecostal Power
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Senior Pastor Collins Ababio delivers a Spirit-filled message on discovering your God-given assignment and walking in kingdom authority.
                </p>

                {/* Pastor Profile */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-600 shadow-sm bg-slate-100 flex-shrink-0">
                    <Image
                      src={siteConfig.pastorImage}
                      alt={siteConfig.seniorPastor}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">{siteConfig.seniorPastor}</div>
                    <div className="text-[11px] text-slate-500 font-medium">Senior Pastor • {siteConfig.shortName}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  <Link
                    href="/watch"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
                  >
                    <Radio className="w-4 h-4 text-rose-400 animate-pulse" />
                    <span>Watch Live Broadcast</span>
                  </Link>

                  <Link
                    href="/watch"
                    className="p-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="Listen to Audio Podcast"
                  >
                    <Volume2 className="w-4 h-4 text-primary-600" />
                  </Link>
                </div>

                <div className="text-center">
                  <Link
                    href="/media/sermons"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    <span>Browse All Messages Archive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
