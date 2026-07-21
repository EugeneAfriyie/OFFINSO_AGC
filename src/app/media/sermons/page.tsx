"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Pause,
  Calendar, 
  Clock, 
  User, 
  Search, 
  Sparkles, 
  Radio, 
  Video, 
  Headphones, 
  ArrowRight,
  X,
  Volume2,
  VolumeX,
  Tv,
  Rss,
  Flame,
  Zap,
  Maximize2,
  BookOpen,
  FileText,
  Bookmark,
  Quote,
  Loader2,
  ChevronDown
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export default function SermonsPage() {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  
  // Lightbox Modal State
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    speaker: string;
    series: string;
    youtubeUrl: string;
    description: string;
    badge?: string;
  } | null>(null);
  
  // Audio Player State
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const studyCards = [
    {
      scripture: "Deuteronomy 28:1-14",
      title: "Discerning Divine Acceleration",
      summary: "When you align your heart with God's Word, obedience triggers unmerited favor. You step out of natural effort into supernatural momentum where God accelerates your progress beyond human limitations.",
    },
    {
      scripture: "Ephesians 6:16 & Acts 1:8",
      title: "Shield of Faith in Prayer",
      summary: "Faith is not passive wishing; it is an active stance on God's covenant promises. Fervent, Spirit-led prayer quenches every fiery dart of spiritual opposition and releases Pentecostal power.",
    },
    {
      scripture: "2 Corinthians 9:6-11",
      title: "Covenant Stewardship & Wealth",
      summary: "Kingdom prosperity is designed for gospel extension and community empowerment. Faithful tithing and cheerful giving open heaven's windows, breaking financial stagnation.",
    },
  ];

  const sermons = [
    {
      id: "sermon-1",
      title: "Prophetic Decrees & Kingdom Breakthrough for 2026",
      series: "Prophetic Unction Series",
      speaker: siteConfig.seniorPastor,
      date: "July 19, 2026",
      badge: "Prophetic Message",
      category: "prophetic",
      featured: true,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Senior Pastor Collins Ababio releases prophetic declarations of divine favor, territorial dominion, and supernatural breakthrough over your family and career.",
    },
    {
      id: "sermon-2",
      title: "Spiritual Warfare & Overcoming Territorial Powers",
      series: "Deliverance & Anointing",
      speaker: siteConfig.seniorPastor,
      date: "July 12, 2026",
      badge: "Full Service",
      category: "prophetic",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Anointed prophetic teaching on taking authority over spiritual darkness, pulling down strongholds, and enforcing your covenant rights in Christ.",
    },
    {
      id: "sermon-3",
      title: "The Power of Fervent, Spirit-Led Prayer",
      series: "Upper Room Revival",
      speaker: siteConfig.seniorPastor,
      date: "July 05, 2026",
      badge: "Revival Broadcast",
      category: "prayer",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Anointed teaching on Pentecostal prayer, travail in the Spirit, and how effective prayer opens doors of revival across Offinso and Kumasi.",
    },
    {
      id: "sermon-4",
      title: "Prophetic Alignment & Walking in Divine Timing",
      series: "Prophetic Unction Series",
      speaker: siteConfig.seniorPastor,
      date: "June 28, 2026",
      badge: "Sunday Preaching",
      category: "prophetic",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Discover how to discern spiritual seasons, align with God's prophetic timetable, and step into doors opened by the Holy Ghost.",
    },
    {
      id: "sermon-5",
      title: "Building Godly Families & Marriages",
      series: "Kingdom Family Life",
      speaker: "Deaconess Grace Appiah",
      date: "June 21, 2026",
      badge: "Family Session",
      category: "family",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Practical wisdom for husbands, wives, and parents on raising children in the fear of the Lord and sustaining marital harmony.",
    },
    {
      id: "sermon-6",
      title: "Financial Stewardship & Covenant Tithing",
      series: "Kingdom Prosperity",
      speaker: siteConfig.seniorPastor,
      date: "June 14, 2026",
      badge: "Full Sermon",
      category: "faith",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Discovering biblical principles of kingdom wealth creation, faithful tithing, generous giving, and breaking financial stagnation.",
    },
    {
      id: "sermon-7",
      title: "Unshakable Faith in Times of Adversity",
      series: "Faith & Victory",
      speaker: siteConfig.seniorPastor,
      date: "June 07, 2026",
      badge: "Sunday Service",
      category: "faith",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "How to stand firm in faith when trials come, trusting in God's unyielding promises and eternal faithfulness.",
    },
    {
      id: "sermon-8",
      title: "Anointed Praise & Breaking Heavy Yokes",
      series: "Worship & Glory",
      speaker: "Worship Leader Samuel Mensah",
      date: "May 31, 2026",
      badge: "Worship Session",
      category: "prayer",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Experience the power of high praise and thanksgiving as a weapon of warfare that disarms spiritual oppression.",
    },
    {
      id: "sermon-9",
      title: "Walking in the Gifts of the Holy Spirit",
      series: "Pentecostal Power",
      speaker: siteConfig.seniorPastor,
      date: "May 24, 2026",
      badge: "Holy Ghost Night",
      category: "prophetic",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Understanding and exercising the 9 spiritual gifts for the edification of the church and demonstration of God's power.",
    },
    {
      id: "sermon-10",
      title: "The Heart of a True Kingdom Steward",
      series: "Discipleship Series",
      speaker: siteConfig.seniorPastor,
      date: "May 17, 2026",
      badge: "Discipleship Class",
      category: "faith",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Cultivating humility, integrity, and faithful service in your local church and daily professional life.",
    },
    {
      id: "sermon-11",
      title: "Overcoming Fear Through God's Perfect Love",
      series: "Inner Healing Series",
      speaker: "Deaconess Grace Appiah",
      date: "May 10, 2026",
      badge: "Midweek Teaching",
      category: "family",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Replacing anxiety and fear with divine confidence and peace through the revelatory knowledge of God's love.",
    },
    {
      id: "sermon-12",
      title: "Harvest of Miracles & Healing Service",
      series: "Miracle Crusade 2026",
      speaker: siteConfig.seniorPastor,
      date: "May 03, 2026",
      badge: "Crusade Session",
      category: "prophetic",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Anointed healing service demonstrating Jesus Christ's power to heal sicknesses, restore bodies, and perform miracles.",
    },
    {
      id: "sermon-13",
      title: "Supernatural Provision & Open Heavens",
      series: "Kingdom Prosperity",
      speaker: siteConfig.seniorPastor,
      date: "April 26, 2026",
      badge: "Sunday Message",
      category: "faith",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Stepping into God's supernatural supply where lack is eradicated and abundance flows into your family and ministry.",
    },
    {
      id: "sermon-14",
      title: "Rebuilding the Altar of Family Worship",
      series: "Kingdom Family Life",
      speaker: siteConfig.seniorPastor,
      date: "April 19, 2026",
      badge: "Family Worship",
      category: "family",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "How to establish daily family altars, pray together as a household, and anchor your children in biblical truth.",
    },
    {
      id: "sermon-15",
      title: "Dominion Power Over Satanic Strongholds",
      series: "Deliverance & Anointing",
      speaker: siteConfig.seniorPastor,
      date: "April 12, 2026",
      badge: "Prophetic Night",
      category: "prophetic",
      featured: false,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Enforcing the victory of the cross over ancestral curses, demonic oppression, and recurring family stagnations.",
    }
  ];

  const featuredSermon = sermons.find(s => s.featured) || sermons[0];

  const filteredSermons = sermons.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.series.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedSermons = filteredSermons.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSermons.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5);
      setIsLoadingMore(false);
    }, 700);
  };

  const toggleSpeed = () => {
    if (audioSpeed === 1) setAudioSpeed(1.25);
    else if (audioSpeed === 1.25) setAudioSpeed(1.5);
    else setAudioSpeed(1);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-24">
      
      {/* 1. COMPACT HERO SECTION */}
      <section className="relative py-10 sm:py-12 lg:py-14 bg-[#050B14] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png"
            alt="Sanctuary Media Worship"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/95 via-[#050B14]/85 to-[#050B14]/95" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/90 text-sky-300 text-[11px] font-black uppercase tracking-wider border border-primary-500/30 backdrop-blur-xl">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>PROPHETIC SERMON ARCHIVE & MEDIA HUB</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Anointed Prophetic Media <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-400 to-amber-300">
                  From Offinso Cathedral
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                Watch prophetic declarations, spiritual breakthrough messages, and anointed sermons preached by Senior Pastor Collins Ababio.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#sermons-grid"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-7 py-3 rounded-xl shadow-lg transition-all"
                >
                  <Play className="w-4 h-4 text-white fill-white" />
                  <span>Watch Prophetic Videos</span>
                </a>

                <button
                  onClick={() => openModal("plan-visit")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl backdrop-blur-md border border-white/20 transition-all"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Join Us Live This Sunday</span>
                </button>
              </div>
            </div>

            {/* DIRECT VIDEO PLAYER EMBED */}
            <div className="w-full lg:w-[440px] flex-shrink-0">
              <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 shadow-xl space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-white bg-primary-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    ⚡ DIRECT VIDEO PLAYER
                  </span>
                  <span className="text-[11px] font-bold text-amber-300">
                    {featuredSermon.badge}
                  </span>
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/20 shadow-md">
                  <iframe
                    src={featuredSermon.youtubeUrl}
                    title={featuredSermon.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-0.5 text-left">
                  <div className="text-[11px] font-bold text-amber-300">
                    {featuredSermon.series}
                  </div>
                  <h3 className="text-base font-extrabold text-white leading-snug truncate">
                    {featuredSermon.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedVideo(featuredSermon)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider py-2.5 rounded-xl shadow-md transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                  <span>Watch Fullscreen HD</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORY FILTER BAR */}
      <section id="sermons-grid" className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search prophetic videos, series, or pastor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => { setActiveCategory("all"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "all"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                All Videos
              </button>

              <button
                onClick={() => { setActiveCategory("prophetic"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "prophetic"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-amber-50 text-amber-900 hover:bg-amber-100 border-amber-200"
                }`}
              >
                ⚡ Prophetic & Breakthrough
              </button>

              <button
                onClick={() => { setActiveCategory("prayer"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "prayer"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Prayer & Revival
              </button>

              <button
                onClick={() => { setActiveCategory("faith"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "faith"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Faith & Dominion
              </button>

              <button
                onClick={() => { setActiveCategory("family"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "family"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Family & Wisdom
              </button>
            </div>
          </div>

          {/* 2 COLUMNS ON MOBILE DIRECT YOUTUBE VIDEO PLAYER GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {displayedSermons.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-primary-400 p-2.5 sm:p-5 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group space-y-2.5 text-left"
              >
                <div className="space-y-2">
                  
                  {/* DIRECT YOUTUBE IFRAME EMBED */}
                  <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                    <iframe
                      src={item.youtubeUrl}
                      title={item.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 pointer-events-none">
                      <span className="text-[8px] sm:text-[9px] font-black text-white bg-primary-600 px-1.5 sm:px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider truncate max-w-[110px] sm:max-w-none inline-block">
                        {item.series}
                      </span>
                    </div>
                  </div>

                  {/* Preacher & Date Meta Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[9px] sm:text-[11px] font-bold text-slate-500 gap-0.5">
                    <div className="flex items-center gap-1 text-amber-700 truncate">
                      <User className="w-3 h-3 text-amber-600 flex-shrink-0" />
                      <span className="truncate">{item.speaker}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-base font-extrabold text-slate-900 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed font-normal line-clamp-2 hidden sm:block">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Expand Fullscreen Lightbox Action */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedVideo(item)}
                    className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-primary-600 text-white font-extrabold text-[9px] sm:text-xs uppercase tracking-wider transition-colors shadow-sm text-center"
                  >
                    <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                    <span>Watch HD</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* LOAD MORE BUTTON WITH ANIMATED SPINNER */}
          {hasMore && (
            <div className="pt-6 text-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary-600 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                    <span>Loading 5 More Sermons...</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 text-amber-400" />
                    <span>Load 5 More Sermons ({filteredSermons.length - visibleCount} Remaining)</span>
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. LIGHT EDITORIAL REDESIGN OF WEEKLY DEVOTIONAL & SCRIPTURE INDEX */}
      <section className="py-14 sm:py-18 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl border-t-4 border-amber-400 border-x border-b border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xl max-w-5xl mx-auto space-y-10">
            
            {/* Header Block */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span>WEEKLY DEVOTIONAL & SCRIPTURE INDEX</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sermon Study Notes & Key Takeaways
              </h2>

              <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                Deepen your personal devotionals and small group discussions with scripture references and core teachings from Senior Pastor Collins Ababio.
              </p>
            </div>

            {/* 3 Editorial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studyCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border-l-4 border-primary-600 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all border-y border-r border-slate-200/80 flex flex-col justify-between text-left"
                >
                  <div className="space-y-2">
                    <div className="inline-block text-[11px] font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                      📖 {card.scripture}
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {card.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-extrabold text-slate-500">
                    <Bookmark className="w-3.5 h-3.5 text-primary-600" />
                    <span>Study Guide #0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. FULL VIDEO LIGHTBOX MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 space-y-0 text-left">
            
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-950 border-b border-slate-800">
              <div className="space-y-1 truncate max-w-md sm:max-w-xl">
                <span className="text-[10px] font-black text-white bg-primary-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {selectedVideo.series}
                </span>
                <h4 className="text-sm sm:text-lg font-extrabold text-white truncate">
                  {selectedVideo.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold transition-colors"
                title="Close Lightbox"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* HD Video iFrame */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <iframe
                src={`${selectedVideo.youtubeUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Lightbox Description Footer */}
            <div className="p-4 sm:p-6 bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <User className="w-4 h-4 text-amber-400" />
                <span>Preached by {selectedVideo.speaker}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {selectedVideo.description}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* 5. SPLIT CARD CTA SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl border-t-4 border-amber-400 border-x border-b border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <Radio className="w-4 h-4 text-primary-600" />
                <span>NEVER MISS A SUNDAY SERMON</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Subscribe & Experience Anointed Worship Live
              </h2>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                Join Senior Pastor Collins Ababio and the sanctuary worship team live every Sunday at 9:00 AM & 11:00 AM at Offinso Toll Booth, Kumasi, or stream worldwide on YouTube.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => openModal("plan-visit")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Join Us Live This Sunday</span>
                </button>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-md transition-all"
                >
                  <Video className="w-4 h-4 text-amber-400" />
                  <span>Subscribe on YouTube</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#071120] text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-lg text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-white bg-primary-600 px-3 py-1 rounded-full uppercase tracking-wider">
                  🔴 LIVE STREAM HUB
                </span>
                <span className="text-xs text-slate-400 font-bold">GMT +0:00</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold">
                  <Tv className="w-5 h-5 text-amber-300 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold">YouTube Live Stream</div>
                    <div className="text-[11px] text-slate-300 font-normal">Full HD Worship & Sermon Broadcast</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold">
                  <Volume2 className="w-5 h-5 text-sky-300 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold">Online Audio Radio</div>
                    <div className="text-[11px] text-slate-300 font-normal">Low-data live audio stream for mobile</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold">
                  <Rss className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold">Apple & Spotify Podcasts</div>
                    <div className="text-[11px] text-slate-300 font-normal">Weekly podcast audio episodes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STICKY INTERACTIVE AUDIO PODCAST PLAYER WIDGET BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 text-white shadow-2xl py-3 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md">
              <Headphones className="w-5 h-5 text-amber-300" />
            </div>

            <div className="space-y-0.5 text-left truncate max-w-xs sm:max-w-md">
              <div className="text-xs font-extrabold text-white truncate">
                {featuredSermon.title}
              </div>
              <div className="text-[11px] text-amber-300 font-medium truncate">
                {featuredSermon.speaker} • {featuredSermon.series}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <button
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg hover:scale-105 transition-transform"
            >
              {isAudioPlaying ? (
                <Pause className="w-5 h-5 text-white fill-white" />
              ) : (
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              )}
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400">
              <span>{isAudioPlaying ? "04:12" : "00:00"}</span>
              <div className="w-48 sm:w-64 h-1.5 rounded-full bg-slate-800 overflow-hidden relative">
                <div className={`h-full bg-primary-500 transition-all duration-300 ${isAudioPlaying ? "w-1/3" : "w-0"}`} />
              </div>
              <span>Full Service</span>
            </div>

            <button
              onClick={toggleSpeed}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-black text-amber-300 border border-white/15 transition-colors"
            >
              {audioSpeed}x
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
