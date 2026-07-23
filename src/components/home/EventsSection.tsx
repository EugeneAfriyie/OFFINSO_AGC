"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function EventsSection() {
  const events = [
    {
      id: "event-1",
      title: "Annual Holy Spirit & Power Revival",
      category: "Special Revival",
      day: "16",
      month: "AUG",
      time: "9:00 AM – 1:00 PM",
      location: "Main Sanctuary • Offinso Toll Booth",
      description: "Join Senior Pastor Collins Ababio for a powerful 3-day spiritual awakening filled with praise, healing, and prophetic worship.",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810555/941727b3-fc8e-4ae3-84b5-90d7d01d2607.png",
      featured: true,
    },
    {
      id: "event-2",
      title: "Kingdom Youth Worship & Encounter Night",
      category: "Youth Ministry",
      day: "28",
      month: "AUG",
      time: "6:00 PM – 8:30 PM",
      location: "Youth Center • Offinso Toll Booth",
      description: "An energetic evening of worship, drama, word, and fellowship for teenagers, students, and young adults across Offinso, Kumasi.",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810596/2680fa0f-de4a-4e2a-b35c-e137a3a94196.png",
      featured: false,
    },
    {
      id: "event-3",
      title: "Community Outreach & Health Screening Fair",
      category: "Community Outreach",
      day: "12",
      month: "SEP",
      time: "8:00 AM – 2:00 PM",
      location: "Offinso Community Park",
      description: "Demonstrating Christ's love through free medical screenings, food distribution, and gospel outreach to families in Offinso.",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810626/4e872129-04b8-42d1-8588-8b2f5c7830e1.png",
      featured: false,
    },
  ];

  return (
    <section className="py-12 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Calendar className="w-3.5 h-3.5 text-primary-600" />
              <span>CHURCH CALENDAR & GATHERINGS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Upcoming Events & Special Services
            </h2>
          </div>

          <Link
            href="/events"
            className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-extrabold text-xs uppercase tracking-wider transition-colors"
          >
            <span>View Full Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* --- MOBILE COMPACT LIST WITH IMAGES (Visible on Mobile < md) --- */}
        <div className="md:hidden space-y-3 mb-8">
          {events.map((item) => (
            <Link
              key={item.id}
              href={`/events/${item.id}`}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3.5 hover:bg-primary-50/50 hover:border-primary-300 transition-colors group"
            >
              {/* Left: Thumbnail Image + Date Badge Overlay */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40" />
                
                {/* Date Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-extrabold">
                  <span className="text-sm leading-none drop-shadow">{item.day}</span>
                  <span className="text-[8px] uppercase font-black tracking-wider text-amber-300 drop-shadow mt-0.5">{item.month}</span>
                </div>
              </div>

              {/* Center: Event Info */}
              <div className="flex-grow min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors truncate">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium truncate">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary-600" />
                    <span>{item.time}</span>
                  </span>
                </div>
              </div>

              {/* Right: Arrow Button */}
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 flex items-center justify-center flex-shrink-0 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* --- DESKTOP 3-COLUMN CARD GRID (Visible on Desktop >= md) --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Event Image Banner */}
              <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Date Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="w-12 h-14 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 flex flex-col items-center justify-center font-extrabold shadow-md border border-white/40">
                    <span className="text-lg leading-none">{item.day}</span>
                    <span className="text-[9px] uppercase font-black tracking-wider text-primary-600 mt-0.5">{item.month}</span>
                  </div>
                </div>

                {/* Category Tag Overlay */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 text-amber-300 font-extrabold text-[10px] uppercase tracking-wider backdrop-blur-md border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Metadata */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    href={`/events/${item.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-primary-600 text-slate-900 hover:text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl border border-slate-200 transition-all shadow-sm group-hover:shadow-md"
                  >
                    <span>Event Details & RSVP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Footer Callout */}
        <div className="text-center pt-4 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-xs text-slate-500 font-medium">Looking for full monthly schedule or ministry meetings?</span>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary-600 hover:text-primary-700 hover:underline"
          >
            <span>View Full Church Calendar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
