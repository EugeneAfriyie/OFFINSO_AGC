"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Youtube, 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Heart, 
  Clock, 
  Check, 
  Crown, 
  Code, 
  ExternalLink,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const [prayerRequest, setPrayerRequest] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedMoMo, setCopiedMoMo] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerRequest) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setPrayerRequest("");
    }, 4000);
  };

  const handleCopyMoMo = () => {
    navigator.clipboard.writeText(siteConfig.phone);
    setCopiedMoMo(true);
    setTimeout(() => setCopiedMoMo(false), 2000);
  };

  const handleCopyBank = () => {
    navigator.clipboard.writeText("1441000284910");
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <footer className="relative bg-[#070B14] text-slate-300 border-t border-slate-800/80 pt-16 sm:pt-20 pb-20 sm:pb-16 overflow-hidden">
      {/* Top subtle ambient highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[140px] bg-gradient-to-r from-primary-600/20 via-amber-500/15 to-transparent blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* 1. TOP PRAYER REQUEST BANNER */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950 text-sky-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-primary-500/30">
              <Heart className="w-3.5 h-3.5 text-amber-400" />
              <span>CONFIDENTIAL PASTORAL CARE</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Submit a Prayer Request
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              No matter what you are facing, we want to stand with you in faith. Send your prayer request directly to our intercessory team.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
            {isSubmitted ? (
              <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-black text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>God bless you! Your request has been sent to our prayer team.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitRequest} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  placeholder="How can we stand with you today?..."
                  value={prayerRequest}
                  onChange={(e) => setPrayerRequest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-amber-400 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>Send</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 2. MAIN FOOTER SITEMAP & BRAND COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-slate-800/80">
          {/* BRAND COLUMN (5 Columns) */}
          <div className="md:col-span-5 space-y-5 text-left">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-600 via-amber-400 to-primary-500 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-0.5">
                  <Image
                    src={siteConfig.logo}
                    alt="Assemblies of God Ghana Emblem"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white leading-none">
                  The King's Temple
                </span>
                <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase mt-1">
                  Assemblies of God &bull; Offinso
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              A Spirit-filled cathedral family in Offinso under the leadership of Senior Pastor Collins Ababio. Rooted in biblical doctrine, vibrant worship, and compassionate outreach.
            </p>

            {/* Pastoral Quote Badge */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 italic leading-relaxed max-w-sm">
              &ldquo;When Pentecostal power meets a surrendered heart, divine purpose is awakened in your life.&rdquo;
              <span className="block not-italic font-mono text-[10px] font-bold text-amber-400 mt-1.5 uppercase">
                &mdash; Pastor Collins Ababio
              </span>
            </div>

            {/* Contact Coordinates */}
            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors font-bold"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors font-bold truncate max-w-[240px]"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-primary-600 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-primary-600 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.31V8.16a6.33 6.33 0 1 0 6.34 6.34V9.4a8.16 8.16 0 0 0 4.77 1.54V7.5a4.85 4.85 0 0 1-1-.81z" />
                </svg>
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-600 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/233${siteConfig.phone.replace(/[^0-9]/g, "").slice(-9)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-600 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Official Assemblies of God Ghana Partner Card */}
            <div className="pt-2">
              <a
                href="https://www.agghana.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/60 transition-all flex items-center justify-between gap-3 group shadow-sm block max-w-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 p-1">
                    <Image
                      src={siteConfig.logo}
                      alt="Assemblies of God National Emblem"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      OFFICIAL NATIONAL AFFILIATION
                    </span>
                    <div className="font-bold text-xs text-white group-hover:text-amber-300 transition-colors">
                      Assemblies of God Ghana 🇬🇭
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* SITEMAP COLUMNS (7 Columns) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            {/* Column 1: Ecosystem */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Cathedral
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/leadership" className="text-slate-400 hover:text-white transition-colors">
                    Pastor Collins Ababio
                  </Link>
                </li>
                <li>
                  <Link href="/about/beliefs" className="text-slate-400 hover:text-white transition-colors">
                    Statement of Faith
                  </Link>
                </li>
                <li>
                  <Link href="/media/sermons" className="text-slate-400 hover:text-white transition-colors">
                    Sermons Archive
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Campus Map
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Ministries */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Ministries
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/ministries" className="text-slate-400 hover:text-white transition-colors">
                    King's Kids (Nursery)
                  </Link>
                </li>
                <li>
                  <Link href="/ministries" className="text-slate-400 hover:text-white transition-colors">
                    Kingdom Youth
                  </Link>
                </li>
                <li>
                  <Link href="/ministries" className="text-slate-400 hover:text-white transition-colors">
                    Women of Faith
                  </Link>
                </li>
                <li>
                  <Link href="/ministries" className="text-slate-400 hover:text-white transition-colors">
                    Men of Integrity
                  </Link>
                </li>
                <li>
                  <Link href="/ministries" className="text-slate-400 hover:text-white transition-colors">
                    Worship &amp; Arts
                  </Link>
                </li>
                <li>
                  <Link href="/give" className="text-slate-400 hover:text-white transition-colors">
                    Online Giving &amp; Tithes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Giving Lines */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Giving Channels
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[9px] font-mono uppercase text-amber-400 font-bold block">
                    MoMo Line
                  </span>
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="truncate">{siteConfig.phone}</span>
                    <button
                      onClick={handleCopyMoMo}
                      className="text-[9px] font-mono bg-primary-600 hover:bg-primary-500 text-white px-2 py-0.5 rounded font-extrabold ml-1 transition-colors"
                    >
                      {copiedMoMo ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[9px] font-mono uppercase text-amber-400 font-bold block">
                    Ecobank Ghana
                  </span>
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="truncate">1441000284910</span>
                    <button
                      onClick={handleCopyBank}
                      className="text-[9px] font-mono bg-primary-600 hover:bg-primary-500 text-white px-2 py-0.5 rounded font-extrabold ml-1 transition-colors"
                    >
                      {copiedBank ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>256-Bit SSL Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SLEEK DEVELOPER CREDIT BADGE & BOTTOM LEGAL BAR */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. Established April 9, 2019.</span>
            <span className="hidden sm:inline text-slate-700">&bull;</span>

            <a
              href="https://gene-afriyie-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-primary-600 text-amber-300 hover:text-white text-[11px] font-bold px-3 py-0.5 rounded-full border border-amber-400/50 transition-all duration-200 shadow-sm"
              title="Visit Eugene Afriyie's Developer Portfolio"
            >
              <Code className="w-3 h-3 text-amber-400" />
              <span>
                Designed &amp; Built by <strong className="text-white font-black">Eugene Afriyie</strong>
              </span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white transition-all shadow-md hover:scale-105 inline-flex items-center gap-1 font-bold text-xs"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-amber-300" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
