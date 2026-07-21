"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Download, BookOpen, Video, Mic, ArrowRight } from "lucide-react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

export function SermonFeaturedSection() {
  const { playTrack } = useAudioPlayer();

  const featuredSermon = {
    id: "sermon-1",
    title: "Overcoming Anxiety Through Persistent Prayer",
    speaker: "Pastor John Davis",
    series: "Walking in Unshakable Faith",
    scripture: "Philippians 4:6-7",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1000",
  };

  return (
    <section className="py-24 bg-canvas border-t border-borderline">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>SUNDAY MESSAGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-body tracking-tight">
              Featured Message & <span className="text-primary-600">Latest Series</span>
            </h2>
          </div>
          <Link
            href="/sermons"
            className="inline-flex items-center gap-2 font-bold text-sm text-primary-600 hover:text-primary-700 hover:underline"
          >
            <span>Browse Full Sermon Library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Media Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 border border-borderline shadow-card">
          
          {/* Left: Video Player Thumbnail Container */}
          <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden shadow-md group">
            <Image
              src={featuredSermon.thumbnail}
              alt={featuredSermon.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />

            {/* Series Tag */}
            <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20">
              Series: {featuredSermon.series}
            </div>

            {/* Play Button Overlay */}
            <button
              onClick={() => playTrack(featuredSermon)}
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-glow group-hover:scale-110 active:scale-95 transition-all"
              aria-label="Play Sermon Audio"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
            </button>
          </div>

          {/* Right: Sermon Metadata & Downloads */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              <span className="text-xs font-extrabold text-primary-600 uppercase tracking-wider block mb-1">
                {featuredSermon.scripture}
              </span>
              <h3 className="text-2xl font-extrabold text-body leading-snug mb-3">
                {featuredSermon.title}
              </h3>
              <p className="text-sm font-semibold text-subtext mb-4">
                Speaker: <span className="text-body">{featuredSermon.speaker}</span>
              </p>
              <p className="text-sm text-subtext leading-relaxed mb-6">
                Discover how Philippians 4 guides us to trade anxiety for God's supernatural peace through focused prayer and thanksgiving.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-borderline">
              <button
                onClick={() => playTrack(featuredSermon)}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Mic className="w-4 h-4" />
                <span>Listen to Sermon Audio</span>
              </button>

              <a
                href="/sermons"
                className="w-full bg-canvas hover:bg-primary-50 text-body font-bold text-sm py-3 rounded-xl border border-borderline flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-primary-600" />
                <span>Download Discussion Notes (PDF)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
