"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  HeartHandshake,
  Share2,
  Flame,
  Users,
  Globe,
  Bell,
  Ticket,
  Crown,
  ChevronRight,
  Loader2,
  ChevronDown
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export default function EventsPage() {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const events = [
    {
      id: "event-1",
      title: "Annual 7-Day Breakthrough & Deliverance Revival",
      category: "revival",
      date: "August 10 – 16, 2026",
      time: "6:00 PM GMT Daily",
      venue: "Main Cathedral Sanctuary, Offinso Toll Booth",
      speaker: siteConfig.seniorPastor + " & Guest Evangelist",
      featured: true,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810626/4e872129-04b8-42d1-8588-8b2f5c7830e1.png",
      description: "Join us for 7 powerful nights of Pentecostal worship, prophetic deliverance, healing, and spiritual empowerment. Experience the unadulterated Word of God and supernatural breakthrough.",
    },
    {
      id: "event-2",
      title: "2026 Pentecostal Power & Holy Ghost Night",
      category: "revival",
      date: "Friday, August 21, 2026",
      time: "7:00 PM – Midnight GMT",
      venue: "Main Sanctuary",
      speaker: siteConfig.seniorPastor,
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810596/2680fa0f-de4a-4e2a-b35c-e137a3a94196.png",
      description: "An all-night prayer vigil saturated in fervent worship, intercession for Offinso and Ghana, and baptism of the Holy Spirit.",
    },
    {
      id: "event-3",
      title: "Kingdom Youth Fire & Campus Leadership Summit",
      category: "youth",
      date: "Saturday, August 29, 2026",
      time: "10:00 AM – 3:00 PM GMT",
      venue: "Youth Chapel",
      speaker: "Pastor Emmanuel Osei",
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810596/2680fa0f-de4a-4e2a-b35c-e137a3a94196.png",
      description: "Equipping teenagers, high school graduates, and university students in Offinso for campus evangelism and godly leadership.",
    },
    {
      id: "event-4",
      title: "Virtuous Women's Prayer & Marriage Workshop",
      category: "family",
      date: "Tuesday, September 08, 2026",
      time: "5:30 PM – 8:00 PM GMT",
      venue: "Main Sanctuary",
      speaker: "Deaconess Grace Appiah",
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784812116/b1492e5c-f580-4e74-a529-dd5751aa8cc8.png",
      description: "Special empowerment workshop for women and mothers on nurturing Christian homes, business growth, and spiritual strength.",
    },
    {
      id: "event-5",
      title: "Men of Valor Leadership Breakfast & Prayer",
      category: "family",
      date: "Saturday, September 19, 2026",
      time: "7:00 AM – 9:30 AM GMT",
      venue: "Sanctuary Annex",
      speaker: "Deacon Kwadwo Mensah",
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784812272/44b8e9e6-91d4-4fec-bb73-af0c5c45e3fb.png",
      description: "Brotherhood breakfast fellowship for men and fathers focusing on integrity, financial stewardship, and spiritual accountability.",
    },
    {
      id: "event-6",
      title: "Free Community Health Screening & Aid Fair",
      category: "outreach",
      date: "Saturday, October 03, 2026",
      time: "8:00 AM – 2:00 PM GMT",
      venue: "Offinso Cathedral Grounds",
      speaker: "Medical Outreach Team",
      featured: false,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
      description: "Free medical health checks, blood pressure screenings, eye care, and emergency food distribution for families across Offinso.",
    },
    {
      id: "event-7",
      title: "Children's Biblical Discovery & Fun Fair",
      category: "family",
      date: "Saturday, October 17, 2026",
      time: "9:00 AM – 1:00 PM GMT",
      venue: "Children Chapel Grounds",
      speaker: "Children Ministry Directors",
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784811349/ab5fef61-bf19-4026-a773-a365dd1e3a81.png",
      description: "A fun-filled morning of Bible games, sword drills, puppet shows, and gospel learning for children aged 3 to 12.",
    },
    {
      id: "event-8",
      title: "Ashanti Gospel Crusade & Healing Night",
      category: "revival",
      date: "Friday, November 06, 2026",
      time: "6:00 PM GMT",
      venue: "Offinso Town Park",
      speaker: siteConfig.seniorPastor,
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810978/3602393e-0485-4a7c-bddd-627e59827887.png",
      description: "Open-air evangelistic revival crusade bringing salvation, deliverance from bondage, and divine healing to Offinso.",
    },
    {
      id: "event-9",
      title: "Couples Covenant Dinner & Renewal",
      category: "family",
      date: "Saturday, November 21, 2026",
      time: "5:00 PM GMT",
      venue: "Cathedral Banquet Hall",
      speaker: siteConfig.seniorPastor + " & Wife",
      featured: false,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      description: "An elegant evening of marriage renewal, romantic dinner, and biblical wisdom on building lasting marital harmony.",
    },
    {
      id: "event-10",
      title: "Young Professionals Career & Business Summit",
      category: "youth",
      date: "Saturday, December 05, 2026",
      time: "10:00 AM GMT",
      venue: "Main Sanctuary",
      speaker: "Guest Business Executives",
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784811455/13c63027-214d-4d56-80f4-95bdb654736c.png",
      description: "Empowering young professionals with marketplace strategies, career mentorship, and biblical principles of wealth creation.",
    },
    {
      id: "event-11",
      title: "End of Year Thanksgiving & Praise Festival",
      category: "revival",
      date: "Friday, December 18, 2026",
      time: "7:00 PM GMT",
      venue: "Main Sanctuary",
      speaker: "Sanctuary Choir & Guests",
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png",
      description: "A night of exuberant praise, choir ministrations, and corporate thanksgiving celebrating God's faithfulness throughout 2026.",
    },
    {
      id: "event-12",
      title: "Watchnight Crossover Service 2026/2027",
      category: "revival",
      date: "Thursday, December 31, 2026",
      time: "9:00 PM – 1:00 AM GMT",
      venue: "Cathedral Main Sanctuary",
      speaker: siteConfig.seniorPastor,
      featured: false,
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1784810596/2680fa0f-de4a-4e2a-b35c-e137a3a94196.png",
      description: "Cross over into the New Year under open heavens with prophetic declarations, midnight communion, and anointed worship.",
    }
  ];

  const featuredEvent = events.find(e => e.featured) || events[0];

  const filteredEvents = events.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5);
      setIsLoadingMore(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* 1. DISTINCTIVE "BILLBOARD COUNTDOWN & REEL" HERO DESIGN */}
      <section className="relative py-12 sm:py-16 lg:py-18 bg-[#050B14] text-white overflow-hidden border-b border-slate-800">
        
        {/* Radial Beams & Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 space-y-8 text-center">
          
          {/* Top Live Event Billboard Pill Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/90 border border-primary-500/30 backdrop-blur-xl shadow-xl text-xs font-extrabold text-slate-200">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
              <strong className="uppercase text-amber-300">NEXT MAJOR REVIVAL:</strong>
            </span>
            <span className="text-white font-black">{featuredEvent.title}</span>
            <span className="text-slate-500">|</span>
            <span className="text-sky-300 font-bold flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              {featuredEvent.date}
            </span>
          </div>

          {/* Centered Main Display Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Gathering In Power, Purpose & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-400 to-amber-300">
                Pentecostal Worship
              </span>
            </h1>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              Explore upcoming revivals, youth summits, virtuous women's prayer workshops, and community health fairs at {siteConfig.name} in Offinso.
            </p>
          </div>

          {/* Unique Horizontal Event Spotlight Reel (3 Quick Cards in Hero) */}
          <div className="pt-2 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {events.slice(0, 3).map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl p-4 transition-all duration-300 space-y-2 backdrop-blur-md group cursor-pointer"
                  onClick={() => openModal("plan-visit")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black text-amber-300 uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-300" />
                      <span>{evt.date.split(",")[0]}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-400 transition-colors" />
                  </div>

                  <h3 className="text-xs font-extrabold text-white line-clamp-1 group-hover:text-sky-300 transition-colors">
                    {evt.title}
                  </h3>

                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary-400" />
                    <span>{evt.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEARCH & CATEGORY FILTER BAR */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search events by title, venue, or speaker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-primary-500 transition-colors shadow-sm"
              />
            </div>

            {/* Category Filter Pills Track */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => { setActiveCategory("all"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "all"
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                All Events ({events.length})
              </button>

              <button
                onClick={() => { setActiveCategory("revival"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "revival"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Conferences & Revivals
              </button>

              <button
                onClick={() => { setActiveCategory("youth"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "youth"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Youth & Campus
              </button>

              <button
                onClick={() => { setActiveCategory("family"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "family"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Adults & Family
              </button>

              <button
                onClick={() => { setActiveCategory("outreach"); setVisibleCount(10); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                  activeCategory === "outreach"
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Community Outreach
              </button>
            </div>

          </div>

          {/* 2 COLUMNS ON MOBILE EVENTS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {displayedEvents.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 hover:bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-primary-300 p-2.5 sm:p-5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group space-y-3 text-left"
              >
                <div className="space-y-3">
                  
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

                    <div className="absolute top-2 left-2">
                      <span className="text-[8px] sm:text-[10px] font-black text-slate-950 uppercase tracking-wider bg-amber-400 px-2 py-0.5 rounded-full shadow-md truncate inline-block max-w-[120px] sm:max-w-none">
                        {item.date.split(",")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-base font-extrabold text-slate-900 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed font-normal line-clamp-2 hidden sm:block">
                      {item.description}
                    </p>
                  </div>

                  {/* Meta Details Box */}
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 space-y-1.5 text-[10px] sm:text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-1.5 truncate">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-600 flex-shrink-0" />
                      <span className="truncate">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{item.venue}</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Action Footer (ROYAL BLUE PRIMARY) */}
                <button
                  onClick={() => openModal("plan-visit")}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-[9px] sm:text-xs uppercase tracking-wider transition-colors shadow-md text-center"
                >
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
                  <span>Attend / Reserve</span>
                </button>

              </div>
            ))}
          </div>

          {/* LOAD MORE EVENTS BUTTON WITH ANIMATED SPINNER */}
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
                    <span>Loading 5 More Events...</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 text-amber-400" />
                    <span>Load 5 More Events ({filteredEvents.length - visibleCount} Remaining)</span>
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. EDITORIAL LIGHT CTA CARD */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="bg-white rounded-3xl border-t-4 border-amber-400 border-x border-b border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xl max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="space-y-5 flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <Bell className="w-4 h-4 text-primary-600" />
                <span>NEVER MISS A SPECIAL GATHERING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Experience God's Power Live at Offinso Toll Booth
              </h2>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Join Senior Pastor Collins Ababio and the church family for our upcoming revival services, Sunday worship, and community outreaches.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => openModal("plan-visit")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Plan Your Visit This Sunday</span>
                </button>

                <button
                  onClick={() => openModal("prayer-request")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl border border-slate-200 transition-all"
                >
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Submit Prayer Request</span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-80 bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-200 text-left flex-shrink-0">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>CATHEDRAL LOCATION</span>
              </h4>

              <div className="space-y-2 text-xs text-slate-700">
                <p className="font-bold text-slate-900">Main Cathedral Highway</p>
                <p>Offinso Toll Booth, Kumasi, Ghana</p>
                <p className="text-slate-500 pt-1">Sunday Services: 9:00 AM & 11:00 AM GMT</p>
                <p className="text-slate-500">Midweek Prayer: Tuesday 5:30 PM GMT</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
