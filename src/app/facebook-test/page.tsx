"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Facebook, 
  ExternalLink, 
  Sparkles, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Flame, 
  Play, 
  Globe, 
  ShieldCheck,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function FacebookTestPage() {
  const [activeTab, setActiveTab] = useState<"page" | "post" | "video">("page");

  const fbPageUrl = siteConfig.socials.facebook;
  const encodedFbUrl = encodeURIComponent(fbPageUrl);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* 1. TEST PAGE HERO HEADER */}
      <section className="bg-[#050B14] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 text-blue-300 text-xs font-black uppercase tracking-wider border border-blue-500/30">
            <Facebook className="w-4 h-4 text-blue-400" />
            <span>OFFICIAL FACEBOOK EMBED LAB</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {siteConfig.shortName} Facebook Live Feed
          </h1>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Streaming live content directly from <strong className="text-amber-300">facebook.com/TheKingsTempleAG</strong> into our cathedral portal.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("page")}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === "page"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-slate-300"
              }`}
            >
              Cathedral Facebook Feed
            </button>

            <button
              onClick={() => setActiveTab("post")}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === "post"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-slate-300"
              }`}
            >
              Prophetic Post Preview
            </button>

            <button
              onClick={() => setActiveTab("video")}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === "video"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-slate-300"
              }`}
            >
              Live Video Player
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN EMBED DEMO CONTAINER */}
      <section className="py-12 lg:py-20 max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* DEMO 1: OFFICIAL FACEBOOK PAGE EMBED IFRAME FOR @TheKingsTempleAG */}
        {activeTab === "page" && (
          <div className="space-y-8 max-w-4xl mx-auto text-left">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">The King's Temple A/G Facebook Page</h3>
                    <p className="text-xs text-slate-500">Official Page: facebook.com/TheKingsTempleAG</p>
                  </div>
                </div>

                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-extrabold text-xs hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <span>Visit Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Official Facebook iFrame Page Plugin for TheKingsTempleAG */}
              <div className="w-full flex justify-center bg-slate-950 rounded-2xl p-4 overflow-hidden border border-slate-800">
                <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=${encodedFbUrl}&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  width="500"
                  height="650"
                  style={{ border: "none", overflow: "hidden", maxWidth: "100%", borderRadius: "16px" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* DEMO 2: CUSTOM HIGH-FASHION FACEBOOK POST CARD EMBED */}
        {activeTab === "post" && (
          <div className="space-y-8 max-w-2xl mx-auto text-left">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Facebook Post Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500 bg-slate-100 flex-shrink-0">
                    <Image
                      src={siteConfig.logo}
                      alt={siteConfig.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-extrabold text-slate-900">{siteConfig.name}</h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500 text-white" />
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                      <span>Official Post @TheKingsTempleAG</span>
                      <span>•</span>
                      <Globe className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>
                </div>

                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              {/* Post Caption Body */}
              <div className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                <p>
                  🔥 <strong>SUNDAY PROPHETIC DECLARATION & REVIVAL SERVICE</strong> 🔥
                </p>
                <p>
                  "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future." — <strong>Jeremiah 29:11</strong>
                </p>
                <p className="text-slate-600">
                  Join Senior Pastor Collins Ababio this Sunday at 9:00 AM & 11:00 AM at Offinso Toll Booth Main Cathedral Highway.
                </p>
                <div className="text-blue-600 font-bold flex flex-wrap gap-2">
                  <span>#TheKingsTempleAG</span>
                  <span>#OffinsoRevival</span>
                  <span>#AssembliesOfGod</span>
                </div>
              </div>

              {/* Embedded Post Image Banner */}
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png"
                  alt="Facebook Live Service Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Reactions Bar */}
              <div className="p-3 px-5 bg-slate-50 border-t border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">
                    👍
                  </div>
                  <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px]">
                    ❤️
                  </div>
                  <span>428 Likes & Amen Declarations</span>
                </div>
                <span>94 Comments &bull; 56 Shares</span>
              </div>

              {/* Interactive Engagement Action Buttons */}
              <div className="grid grid-cols-3 p-1 text-xs font-bold text-slate-600 text-center border-t border-slate-100">
                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 hover:bg-slate-100 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4 text-slate-500" />
                  <span>Like</span>
                </a>
                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 hover:bg-slate-100 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-slate-500" />
                  <span>Comment</span>
                </a>
                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 hover:bg-slate-100 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Share2 className="w-4 h-4 text-slate-500" />
                  <span>Share</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* DEMO 3: FACEBOOK LIVE VIDEO PLAYER EMBED */}
        {activeTab === "video" && (
          <div className="space-y-8 max-w-4xl mx-auto text-left">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">Facebook Live Video Embed</h3>
                    <p className="text-xs text-slate-500">Embedded Stream Player for @TheKingsTempleAG</p>
                  </div>
                </div>

                <a
                  href={fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-xs font-black uppercase transition-colors shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Watch on Facebook</span>
                </a>
              </div>

              {/* Official Facebook Video iFrame Embed */}
              <div className="w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center relative">
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?height=314&href=${encodedFbUrl}&show_text=false&width=560&t=0`}
                  width="100%"
                  height="100%"
                  style={{ border: "none", overflow: "hidden", width: "100%", height: "100%" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
