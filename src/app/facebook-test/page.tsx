"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  ExternalLink,
  ThumbsUp,
  MessageSquare,
  Share2,
  Flame,
  Play,
  Globe,
  CheckCircle2,
  LayoutGrid,
  Rss,
  Video,
  Wifi,
  ArrowRight,
  Star,
  Zap,
  Users,
  Clock,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Heart,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

type TabType = "page" | "post" | "video";

const TABS: { id: TabType; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: "page", label: "Page Feed", icon: <LayoutGrid className="w-4 h-4" />, desc: "Full timeline embed" },
  { id: "post", label: "Post Cards", icon: <Rss className="w-4 h-4" />, desc: "Custom styled posts" },
  { id: "video", label: "Live Video", icon: <Video className="w-4 h-4" />, desc: "Facebook video player" },
];

const PROS_CONS = [
  {
    approach: "Facebook Page Embed",
    icon: <Facebook className="w-5 h-5" />,
    color: "blue",
    pros: ["Always up to date — zero maintenance", "Shows all posts, photos & events", "Native FB interactions"],
    cons: ["No control over design", "Depends on Facebook uptime", "Loads 3rd-party JS (slower)"],
    verdict: "Great for 'Connect with us' sidebars",
  },
  {
    approach: "Custom Cards (Our Design)",
    icon: <Star className="w-5 h-5" />,
    color: "amber",
    pros: ["100% brand control", "Blazing fast — no 3rd-party JS", "Works when Facebook is down"],
    cons: ["Must manually update content", "Needs a CMS or data file", "More development effort"],
    verdict: "Best for News, Sermons & Events pages",
  },
  {
    approach: "Hybrid Approach",
    icon: <Zap className="w-5 h-5" />,
    color: "emerald",
    pros: ["Custom design + Facebook fallback", "Best of both worlds", "Progressive enhancement"],
    cons: ["More complex to implement", "Two systems to maintain"],
    verdict: "Recommended for Media & Watch pages",
  },
];

// Sample posts for the custom post card tab
const SAMPLE_POSTS = [
  {
    id: 1,
    type: "service",
    time: "2 hours ago",
    content: "🔥 SUNDAY PROPHETIC DECLARATION & REVIVAL SERVICE 🔥\n\n\"For I know the plans I have for you,\" declares the LORD — Jeremiah 29:11\n\nJoin Senior Pastor Collins Ababio this Sunday at 9:00 AM & 11:00 AM.",
    tags: ["#TheKingsTempleAG", "#OffinsoRevival", "#AssembliesOfGod"],
    likes: 428,
    comments: 94,
    shares: 56,
    hasMedia: true,
  },
  {
    id: 2,
    type: "prayer",
    time: "Yesterday",
    content: "🙏 MIDWEEK PRAYER & BIBLE STUDY\n\nEvery Wednesday at 6:30 PM. Come expectant, come prepared. The Word of God is alive and active!\n\nBring a friend. Experience breakthrough.",
    tags: ["#PrayerWorks", "#BibleStudy", "#KingsTemple"],
    likes: 213,
    comments: 47,
    shares: 31,
    hasMedia: false,
  },
  {
    id: 3,
    type: "announcement",
    time: "3 days ago",
    content: "📢 UPCOMING SPECIAL EVENT\n\nThe King's Temple A/G invites you to our Annual Harvest Thanksgiving Service. A night of praise, worship, and generosity.\n\nDate: First Sunday of November · Time: 10:00 AM",
    tags: ["#HarvestThanksgiving", "#OffinsoGhana"],
    likes: 341,
    comments: 72,
    shares: 88,
    hasMedia: false,
  },
];

function PostCard({ post }: { post: typeof SAMPLE_POSTS[0] }) {
  const fbPageUrl = siteConfig.socials.facebook;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 bg-slate-100 flex-shrink-0">
            <Image src={siteConfig.logo} alt={siteConfig.name} fill className="object-contain p-1" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-extrabold text-slate-900">{siteConfig.shortName}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1">
              <span>{post.time}</span>
              <span>·</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>
        <a href={fbPageUrl} target="_blank" rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
      </div>

      {/* Body */}
      <div className="px-4 pb-3 space-y-2">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i} className="text-xs sm:text-sm text-slate-700 leading-relaxed">{para}</p>
        ))}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.tags.map(tag => (
            <span key={tag} className="text-blue-600 font-bold text-xs">{tag}</span>
          ))}
        </div>
      </div>

      {/* Media placeholder */}
      {post.hasMedia && (
        <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-slate-950 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto">
              <Play className="w-6 h-6 fill-white text-white ml-1" />
            </div>
            <p className="text-white/60 text-xs">Service Highlight</p>
          </div>
        </div>
      )}

      {/* Reactions bar */}
      <div className="px-4 py-2 bg-slate-50 border-t border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
        <span>👍 ❤️ {post.likes} reactions</span>
        <span>{post.comments} Comments · {post.shares} Shares</span>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        {[
          { icon: <ThumbsUp className="w-4 h-4" />, label: "Like" },
          { icon: <MessageSquare className="w-4 h-4" />, label: "Comment" },
          { icon: <Share2 className="w-4 h-4" />, label: "Share" },
        ].map(action => (
          <a key={action.label} href={fbPageUrl} target="_blank" rel="noopener noreferrer"
            className="py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            {action.icon} {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function FacebookTestPage() {
  const [activeTab, setActiveTab] = useState<TabType>("page");
  const [embedLoaded, setEmbedLoaded] = useState(false);

  const fbPageUrl = siteConfig.socials.facebook;
  const encodedFbUrl = encodeURIComponent(fbPageUrl);

  useEffect(() => {
    setEmbedLoaded(false);
    const t = setTimeout(() => setEmbedLoaded(true), 200);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#050B14] text-white">

      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-14 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Wifi className="w-3.5 h-3.5 animate-pulse" /> Facebook Embed Design Lab
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Live Feed <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Embed Preview</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Testing how <span className="text-amber-300 font-semibold">@TheKingsTempleAG</span> content embeds — compare
            approaches before building News, Media & Sermons pages.
          </p>
          <div className="flex items-center justify-center gap-6 pt-1 text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> Syncing live</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-blue-400" /> @TheKingsTempleAG</span>
          </div>
        </div>
      </section>

      {/* ─── TAB SWITCHER ────────────────────────────────── */}
      <div className="px-4 max-w-6xl mx-auto mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-1.5 flex gap-1 sm:gap-2">
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}>
              {tab.icon}
              <span>{tab.label}</span>
              <span className={`hidden sm:block text-[10px] font-normal ${activeTab === tab.id ? "text-blue-200" : "text-slate-500"}`}>
                {tab.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ─── EMBED CONTENT ───────────────────────────────── */}
      <div className="px-4 max-w-6xl mx-auto pb-16">

        {/* ══ TAB 1: PAGE FEED ═══════════════════════════════════ */}
        {activeTab === "page" && (
          <div className={`transition-all duration-500 ${embedLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

            {/* 2-column desktop grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] xl:grid-cols-[520px_1fr] gap-6 items-start">

              {/* LEFT: The Facebook iFrame */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Live Page Feed</div>
                      <div className="text-[11px] text-slate-400">facebook.com/TheKingsTempleAG</div>
                    </div>
                  </div>
                  <a href={fbPageUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors">
                    Open <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                  <iframe
                    src={`https://www.facebook.com/plugins/page.php?href=${encodedFbUrl}&tabs=timeline&width=500&height=680&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                    width="100%"
                    height="680"
                    style={{ border: "none", overflow: "hidden", display: "block" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <p className="text-[11px] text-slate-500 text-center">
                  ↑ Facebook Page Plugin · Max 500px wide (Facebook limit) · Requires cookie consent
                </p>
              </div>

              {/* RIGHT: Church Info + Service Times + Quick Links */}
              <div className="space-y-4">

                {/* Church quick info card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-400/30 bg-slate-900 flex-shrink-0">
                      <Image src={siteConfig.logo} alt={siteConfig.name} fill className="object-contain p-1.5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-extrabold text-white leading-tight">{siteConfig.name}</h2>
                      <p className="text-[11px] text-amber-300 font-semibold">Assemblies of God, Ghana</p>
                    </div>
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{siteConfig.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{siteConfig.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{siteConfig.email}</span>
                    </div>
                  </div>
                </div>

                {/* Service times */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                  <h3 className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Weekly Schedule
                  </h3>
                  <div className="space-y-2">
                    {siteConfig.services.map((s, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <span className="text-xs text-slate-300 font-semibold">{s.name}</span>
                        <span className="text-xs text-amber-300 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick action links */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Plan Your Visit", icon: <MapPin className="w-4 h-4" />, href: "/plan-your-visit", color: "blue" },
                    { label: "Prayer Request", icon: <Heart className="w-4 h-4" />, href: "/prayer", color: "rose" },
                    { label: "Give Online", icon: <Star className="w-4 h-4" />, href: "/give", color: "amber" },
                    { label: "Sermons", icon: <BookOpen className="w-4 h-4" />, href: "/media/sermons", color: "emerald" },
                  ].map(item => (
                    <Link key={item.label} href={item.href}
                      className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-xs font-bold transition-all hover:scale-[1.02] ${
                        item.color === "blue" ? "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20" :
                        item.color === "rose" ? "bg-rose-500/10 border-rose-500/20 text-rose-300 hover:bg-rose-500/20" :
                        item.color === "amber" ? "bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20" :
                        "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20"
                      }`}>
                      {item.icon} {item.label}
                    </Link>
                  ))}
                </div>

                {/* Note card */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-4 space-y-1.5">
                  <div className="text-xs font-black text-blue-300 uppercase tracking-wide">⚠ Facebook Limit</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Facebook's Page Plugin is capped at <strong className="text-white">500px wide</strong> — it always looks
                    "mobile-sized". That's why we use the right column for church info. On our real pages, we'll use custom
                    cards instead for full-width, fully branded layouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══ TAB 2: POST CARDS ══════════════════════════════════ */}
        {activeTab === "post" && (
          <div className={`transition-all duration-500 ${embedLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

              {/* LEFT: 2/3 — Post cards column */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-sm font-extrabold text-white flex items-center gap-2">
                    <Rss className="w-4 h-4 text-blue-400" /> Custom-Designed Post Cards
                  </h2>
                  <span className="text-[11px] text-slate-400 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1">3 sample posts</span>
                </div>
                {SAMPLE_POSTS.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* RIGHT: 1/3 — Verdict panel */}
              <div className="space-y-4 lg:sticky lg:top-24">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center gap-2 text-amber-300 font-black text-sm">
                    <Star className="w-4 h-4 fill-amber-300" /> Why Custom Wins
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Fully matches our brand colors & fonts",
                      "No Facebook script — blazing fast",
                      "Works even when Facebook is down",
                      "Add CTAs: prayer, giving, events",
                      "Full mobile responsiveness in our hands",
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4">
                  <div className="text-amber-300 font-black text-xs uppercase tracking-wide mb-1.5">Trade-off</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Content must be updated manually or via a simple JSON data file — takes ~2 minutes per post.
                  </p>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4">
                  <div className="text-emerald-300 font-black text-xs uppercase tracking-wide mb-1.5">Best For</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {["/news", "/events", "/sermons", "/media"].map(p => (
                      <li key={p} className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-emerald-400" />{p}</li>
                    ))}
                  </ul>
                </div>

                <a href={fbPageUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors">
                  <Facebook className="w-4 h-4" /> View Live on Facebook <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ══ TAB 3: LIVE VIDEO ══════════════════════════════════ */}
        {activeTab === "video" && (
          <div className={`transition-all duration-500 ${embedLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">

              {/* LEFT: Video player */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center flex-shrink-0">
                      <Flame className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Facebook Live Video</div>
                      <div className="text-[11px] text-slate-400">Embedded stream · @TheKingsTempleAG</div>
                    </div>
                  </div>
                  <a href={fbPageUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Watch Live
                  </a>
                </div>

                {/* Facebook Page Plugin — videos tab plays inline on this page */}
                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
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

                <p className="text-[11px] text-slate-500 text-center">
                  ↑ Facebook Video Plugin · Full-screen supported · Requires cookie consent to play
                </p>

                {/* Stats strip */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Live Streaming", sub: "Mirrors active FB Live sessions", color: "rose" },
                    { label: "Cookie Required", sub: "Users must accept FB cookies", color: "amber" },
                    { label: "True 16:9", sub: "Fully responsive video player", color: "blue" },
                  ].map(item => (
                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className={`text-[10px] font-black uppercase tracking-wide mb-1 ${
                        item.color === "rose" ? "text-rose-400" : item.color === "amber" ? "text-amber-400" : "text-blue-400"
                      }`}>{item.label}</div>
                      <div className="text-[10px] text-slate-400">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Info sidebar */}
              <div className="space-y-4 lg:sticky lg:top-24">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wide">Best For</h3>
                  <ul className="space-y-2">
                    {[
                      { page: "/watch", note: "Live Sunday service stream" },
                      { page: "/media/sermons", note: "Past sermon replays" },
                      { page: "/events", note: "Special service highlights" },
                    ].map(item => (
                      <li key={item.page} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">{item.page}</div>
                          <div className="text-[11px] text-slate-400">{item.note}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wide">Alternative</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    If Facebook is down or slow, we can host sermon videos on YouTube and embed those instead —
                    giving users two fallback options.
                  </p>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-rose-300 hover:text-rose-200 transition-colors">
                    Explore YouTube option <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <Link href="/media/sermons"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors">
                  Browse Sermons Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── DECISION HELPER ─────────────────────────────── */}
      <section className="px-4 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5">
              <Zap className="w-3.5 h-3.5" /> Which Approach Should We Use?
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Build Decision Framework</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Compare the three approaches before we start building media pages, news sections, and sermons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROS_CONS.map(item => (
              <div key={item.approach} className={`rounded-2xl border p-5 space-y-4 ${
                item.color === "amber" ? "bg-amber-500/5 border-amber-500/20" :
                item.color === "emerald" ? "bg-emerald-500/5 border-emerald-500/20" : "bg-blue-500/5 border-blue-500/20"
              }`}>
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    item.color === "amber" ? "bg-amber-500/20 text-amber-300" :
                    item.color === "emerald" ? "bg-emerald-500/20 text-emerald-300" : "bg-blue-500/20 text-blue-300"
                  }`}>{item.icon}</div>
                  <h3 className="text-sm font-extrabold text-white leading-tight">{item.approach}</h3>
                </div>
                <div>
                  <div className="text-[10px] font-black text-emerald-400 uppercase tracking-wide mb-1.5">Pros</div>
                  <ul className="space-y-1.5">
                    {item.pros.map((p, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-emerald-400 mt-px">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] font-black text-rose-400 uppercase tracking-wide mb-1.5">Cons</div>
                  <ul className="space-y-1.5">
                    {item.cons.map((c, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                        <span className="text-rose-400 mt-px">✗</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl px-3 py-2 text-xs font-bold ${
                  item.color === "amber" ? "bg-amber-500/10 text-amber-300" :
                  item.color === "emerald" ? "bg-emerald-500/10 text-emerald-300" : "bg-blue-500/10 text-blue-300"
                }`}>💡 {item.verdict}</div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-extrabold text-white">Ready to decide?</h3>
              <p className="text-xs text-slate-400 mt-1">Tell us which approach you prefer and we&apos;ll start building News, Media & Sermons pages.</p>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors flex-shrink-0">
              Back to Main Site <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
