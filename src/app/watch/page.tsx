"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flame,
  ExternalLink,
  Play,
  Facebook,
  Clock,
  MapPin,
  Calendar,
  Heart,
  BookOpen,
  Star,
  Tv,
  Youtube,
  Wifi,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

type SourceType = "facebook" | "youtube";

const UPCOMING_SERVICES = [
  { label: "1st Sunday Service", time: "9:00 AM – 10:30 AM", day: "Every Sunday" },
  { label: "2nd Sunday Service", time: "11:00 AM – 12:30 PM", day: "Every Sunday" },
  { label: "Midweek Bible Study", time: "6:30 PM – 8:00 PM", day: "Every Wednesday" },
];

const PAST_SERMONS = [
  {
    title: "Walking in Your God-Given Authority",
    pastor: "Pastor Collins Ababio",
    date: "July 20, 2025",
    duration: "52 min",
  },
  {
    title: "The Power of Prophetic Praise",
    pastor: "Pastor Collins Ababio",
    date: "July 13, 2025",
    duration: "48 min",
  },
  {
    title: "Faith That Moves Mountains",
    pastor: "Pastor Collins Ababio",
    date: "July 6, 2025",
    duration: "55 min",
  },
];

export default function WatchPage() {
  const [source, setSource] = useState<SourceType>("facebook");
  const fbPageUrl = siteConfig.socials.facebook;
  const encodedFbUrl = encodeURIComponent(fbPageUrl);

  return (
    <div className="min-h-screen bg-[#050B14] text-white">

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-10 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/8 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                Live & On-Demand
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                Watch <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">Live</span>
              </h1>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Stream Sunday services live and watch past sermons from{" "}
                <span className="text-amber-300 font-semibold">The King's Temple A/G</span> — right here on our site.
              </p>
            </div>
            <a
              href={fbPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors flex-shrink-0 self-start sm:self-auto"
            >
              <Facebook className="w-4 h-4" /> Follow on Facebook <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT GRID ─────────────────────────────── */}
      <section className="px-4 max-w-6xl mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-6 items-start">

          {/* LEFT: Video Player Column */}
          <div className="space-y-4">

            {/* Source selector */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSource("facebook")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  source === "facebook"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Facebook className="w-3.5 h-3.5" /> Facebook Videos
              </button>
              <button
                onClick={() => setSource("youtube")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  source === "youtube"
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Youtube className="w-3.5 h-3.5" /> YouTube
              </button>
            </div>

            {/* ── Facebook Videos Tab Player ── */}
            {source === "facebook" && (
              <div className="space-y-3">
                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                  {/* Facebook Page Plugin — videos tab plays inline */}
                  <iframe
                    src={`https://www.facebook.com/plugins/page.php?href=${encodedFbUrl}&tabs=videos&width=740&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
                    width="100%"
                    height="500"
                    style={{ border: "none", overflow: "hidden", display: "block" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-slate-500">
                    Videos from <span className="text-blue-400">facebook.com/TheKingsTempleAG</span> · Click any video to play inline
                  </p>
                  <a
                    href={`${fbPageUrl}/videos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors"
                  >
                    All videos <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* ── YouTube Fallback ── */}
            {source === "youtube" && (
              <div className="space-y-3">
                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                  {/* 16:9 YouTube channel embed */}
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed?listType=user_uploads&list=TheKingsTempleAG"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      title="The King's Temple A/G YouTube Channel"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-slate-500">Powered by YouTube · Plays directly on this page</p>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-bold transition-colors"
                  >
                    YouTube Channel <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* Past Sermons list */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-300" /> Recent Sermons
                </h2>
                <Link
                  href="/media/sermons"
                  className="text-xs text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 transition-colors"
                >
                  All sermons <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="space-y-1">
                {PAST_SERMONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSource("facebook")}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600 group-hover:to-blue-800 transition-all">
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white truncate">{s.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{s.pastor} · {s.date}</div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold flex-shrink-0">{s.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Info Sidebar */}
          <div className="space-y-4 lg:sticky lg:top-24">

            {/* Live status */}
            <div className="bg-gradient-to-br from-rose-900/30 to-slate-900/50 border border-rose-500/20 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="text-xs font-black text-rose-300 uppercase tracking-wider">Live Status</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We stream live every <strong className="text-white">Sunday</strong> at 9:00 AM & 11:00 AM.
                When we go live on Facebook, the player above will switch to the live broadcast automatically.
              </p>
              <a
                href={fbPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors justify-center"
              >
                <Wifi className="w-3.5 h-3.5" /> Check Live Now
              </a>
            </div>

            {/* Service schedule */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Broadcast Schedule
              </h3>
              <div className="space-y-2.5">
                {UPCOMING_SERVICES.map((s, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-xs font-bold text-white">{s.label}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">{s.day}</span>
                      <span className="text-[11px] text-amber-300 font-bold">{s.time}</span>
                    </div>
                    {i < UPCOMING_SERVICES.length - 1 && <div className="border-b border-white/5 pt-1.5" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
              <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Join In Person
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{siteConfig.address}</p>
              <Link
                href="/plan-your-visit"
                className="flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-blue-200 transition-colors mt-1"
              >
                Plan your visit <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-2">
              <Link href="/prayer"
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 hover:bg-rose-500/20 transition-colors text-center">
                <Heart className="w-4 h-4" />
                <span className="text-[11px] font-bold">Prayer</span>
              </Link>
              <Link href="/give"
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors text-center">
                <Star className="w-4 h-4" />
                <span className="text-[11px] font-bold">Give</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NO-COOKIE NOTICE ──────────────────────────────── */}
      <section className="px-4 pb-12 max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Tv className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-white">Video not loading?</strong> Facebook videos require you to accept cookies in your browser.
            Alternatively, click{" "}
            <a href={`${fbPageUrl}/videos`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">
              Watch on Facebook
            </a>{" "}
            or switch to the YouTube tab above to watch without cookies.
          </div>
        </div>
      </section>
    </div>
  );
}
