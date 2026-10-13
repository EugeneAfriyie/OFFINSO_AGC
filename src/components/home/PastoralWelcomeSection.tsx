"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flame, Heart, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function PastoralWelcomeSection() {
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Editorial Article Wrapper */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-12 shadow-sm relative">
          
          {/* Header Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100 mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>WELCOME TO OUR CHURCH FAMILY</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            A Personal Welcome from <span className="text-primary-600">{siteConfig.seniorPastor}</span>
          </h2>

          {/* Editorial Article Content with Floated Wrapped Image */}
          <div className="flow-root">
            
            {/* Floated Image (Wraps Text Around Photo on Mobile & Desktop) */}
            <div className="float-left mr-4 sm:mr-6 mb-4 w-36 sm:w-48 lg:w-56 aspect-[3.5/4.5] rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-900 relative group">
              <Image
                src={siteConfig.pastorImage}
                alt={siteConfig.seniorPastor}
                fill
                sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-2 inset-x-2 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-center">
                <div className="text-xs font-extrabold text-slate-900 leading-tight">{siteConfig.seniorPastor}</div>
                <div className="text-[10px] text-primary-600 font-bold">Senior Pastor</div>
              </div>
            </div>

            {/* Wrapped Story Text */}
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              <p className="first-letter:text-4xl first-letter:font-black first-letter:text-primary-600 first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                On behalf of the leadership and church family at <strong>The King's Temple Assemblies of God</strong> in Offinso, Kumasi, I welcome you with open arms.
              </p>
              
              <p>
                Since our founding on <strong>April 9, 2019</strong>, God has been faithfully building a community centered on vibrant worship, biblical truth, and genuine love. Whether you are exploring faith for the first time or seeking a spiritual home, you belong here.
              </p>

              <p>
                Our heart's desire is to see every individual and family encounter the life-transforming power of Jesus Christ. From our children and youth ministries to our adult fellowship groups, we provide a safe, encouraging environment where you can grow spiritually and build authentic relationships.
              </p>

              <p>
                We invite you to join us this Sunday for worship. We have reserved a special seat for you!
              </p>
            </div>

            {/* Formal Signature Lockup */}
            <div className="clear-left pt-6 mt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-extrabold text-sm border border-primary-200">
                  PA
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{siteConfig.seniorPastor}</div>
                  <div className="text-xs text-slate-500 font-medium">Senior Pastor • The King's Temple A/G</div>
                </div>
              </div>

              {/* 3 Editorial Pillars */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-subtle">
                  <Flame className="w-3.5 h-3.5 text-primary-600" />
                  <span>Vibrant Worship</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-subtle">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Warm Family</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-subtle">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Biblical Truth</span>
                </span>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/leadership"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02] group"
              >
                <span>Meet Our Leadership Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-extrabold text-xs uppercase tracking-wider px-4 py-3.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all"
              >
                <span>Read Our Church Story</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
