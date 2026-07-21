"use client";

import React from "react";
import Link from "next/link";
import { Heart, Quote, Star, Sparkles, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "testimony-1",
      name: "Sister Abena Osei",
      role: "Church Member • Offinso, Kumasi",
      quote: "Finding The King's Temple A/G was a turning point for my family. Senior Pastor Collins Ababio's biblical teachings and the warm fellowship restored our hope and strengthened our faith in God.",
      category: "Faith & Spiritual Growth",
      initials: "AO",
    },
    {
      id: "testimony-2",
      name: "Brother Kwame Mensah",
      role: "Youth Parent • Offinso Toll Booth",
      quote: "The Kingdom Youth ministry empowered my children with godly direction, strong moral values, and purpose. I am deeply grateful for a church family that truly cares for the next generation.",
      category: "Youth Discipleship",
      initials: "KM",
    },
    {
      id: "testimony-3",
      name: "Deaconess Grace Appiah",
      role: "Welfare Team • Offinso Central",
      quote: "Through the church's community health outreach and intercessory prayer ministry, God healed my body and gave me a passion to serve less privileged families across Offinso.",
      category: "Healing & Community Outreach",
      initials: "GA",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>STORIES OF FAITH & TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Lives Transformed by God's Grace
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Hear authentic testimonies from members of our church family in Offinso, Kumasi whose lives have been touched by God's love and truth.
          </p>
        </div>

        {/* 3-Column Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary-200 group-hover:text-primary-400 transition-colors" />
                </div>

                {/* Category Tag */}
                <span className="text-[10px] font-black text-primary-700 uppercase tracking-wider bg-primary-100 px-2.5 py-0.5 rounded-full inline-block">
                  {item.category}
                </span>

                {/* Testimony Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-extrabold text-xs shadow-md border-2 border-amber-300 flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{item.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{item.role}</div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Community Impact Metrics Banner */}
        <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-primary-500/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/15">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-amber-300">2.4K+</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Online Community</div>
              <div className="text-[11px] text-slate-400">Followers & Partners</div>
            </div>

            <div className="space-y-1 pt-6 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-300">7+ Years</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Faithful Ministry</div>
              <div className="text-[11px] text-slate-400">Serving Offinso Since 2019</div>
            </div>

            <div className="space-y-1 pt-6 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-300">1,500+</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Outreach Reached</div>
              <div className="text-[11px] text-slate-400">Medical Aid & Food Relief</div>
            </div>

            <div className="space-y-1 pt-6 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-300">6 Teams</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Ministry Departments</div>
              <div className="text-[11px] text-slate-400">Active Serve Groups</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
