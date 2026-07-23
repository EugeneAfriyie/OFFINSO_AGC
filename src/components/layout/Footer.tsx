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
  Building2, 
  Smartphone,
  Copy,
  Check,
  Crown,
  Code,
  ExternalLink,
  Zap
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
    <footer className="bg-[#030712] text-slate-300 border-t border-slate-800/80 pt-12 sm:pt-16 pb-24 sm:pb-16 relative overflow-hidden">
      
      {/* Background Radial Glow Mesh */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary-600/15 via-primary-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 space-y-12">
        
        {/* 1. TOP PRAYER REQUEST BANNER */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950 text-sky-300 text-[10px] font-black uppercase tracking-wider border border-primary-500/30">
              <Heart className="w-3.5 h-3.5 text-amber-400" />
              <span>WE ARE HERE FOR YOU</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Submit a Prayer Request
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              No matter what you're facing, we want to stand with you in faith. Send your prayer request directly to our intercessory team.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
            {isSubmitted ? (
              <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-black text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>God bless you! Your request has been sent to our prayer team.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitRequest} className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="What can we pray for today?..."
                  value={prayerRequest}
                  onChange={(e) => setPrayerRequest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-amber-400 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto self-end px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-xs font-black uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>Send Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 2. MAIN 4-COLUMN FOOTER ECOSYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 flex items-center justify-center p-1 rounded-2xl bg-white shadow-xl border-2 border-amber-400/80 group-hover:scale-105 transition-transform">
                <Image 
                  src={siteConfig.logo} 
                  alt="The King's Temple Assemblies of God Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white leading-none group-hover:text-sky-300 transition-colors">
                  THE KING'S TEMPLE
                </span>
                <span className="text-[11px] font-black tracking-wider text-amber-400 uppercase mt-1">
                  Assemblies of God • Offinso, Kumasi
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              A Spirit-filled cathedral family in Offinso under the leadership of Senior Pastor Collins Ababio. Established April 9, 2019.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-bold">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors font-bold truncate max-w-[240px]">{siteConfig.email}</a>
              </div>
            </div>

            {/* Social Media Channels (Facebook, TikTok, YouTube) */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={siteConfig.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary-600 text-slate-300 hover:text-white border border-white/10 hover:border-primary-500 flex items-center justify-center transition-all shadow-md hover:scale-110" 
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a 
                href={siteConfig.socials.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary-600 text-slate-300 hover:text-white border border-white/10 hover:border-primary-500 flex items-center justify-center transition-all shadow-md hover:scale-110" 
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.31V8.16a6.33 6.33 0 1 0 6.34 6.34V9.4a8.16 8.16 0 0 0 4.77 1.54V7.5a4.85 4.85 0 0 1-1-.81z"/>
                </svg>
              </a>

              <a 
                href={siteConfig.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary-600 text-slate-300 hover:text-white border border-white/10 hover:border-primary-500 flex items-center justify-center transition-all shadow-md hover:scale-110" 
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">Main Navigation</h4>
            <ul className="space-y-2 text-xs font-extrabold text-slate-300">
              <li><Link href="/" className="hover:text-sky-300 transition-colors">Cathedral Home</Link></li>
              <li><Link href="/about" className="hover:text-sky-300 transition-colors">About Us & History</Link></li>
              <li><Link href="/leadership" className="hover:text-sky-300 transition-colors">Senior Pastor Collins Ababio</Link></li>
              <li><Link href="/ministries" className="hover:text-sky-300 transition-colors">Ministries Directory</Link></li>
              <li><Link href="/media/sermons" className="hover:text-sky-300 transition-colors">Prophetic Sermons Archive</Link></li>
              <li><Link href="/events" className="hover:text-sky-300 transition-colors">Events & Revivals Calendar</Link></li>
              <li><Link href="/give" className="hover:text-sky-300 transition-colors">Online Tithes & Giving</Link></li>
              <li><Link href="/contact" className="hover:text-sky-300 transition-colors">Contact Us & Campus Map</Link></li>
            </ul>
          </div>

          {/* Column 3: Worship Schedule (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">Sanctuary Schedule</h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-white font-extrabold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>1st Sunday Service</span>
                </div>
                <div className="text-slate-400 text-[11px]">9:00 AM – 10:30 AM GMT</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-white font-extrabold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>2nd Sunday Service</span>
                </div>
                <div className="text-slate-400 text-[11px]">11:00 AM – 12:30 PM GMT</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-white font-extrabold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Midweek Prayer Study</span>
                </div>
                <div className="text-slate-400 text-[11px]">Tuesday 5:30 PM – 7:00 PM GMT</div>
              </div>
            </div>
          </div>

          {/* Column 4: Quick MoMo & Wire Copy (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">Giving Lines</h4>
            
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[9px] font-black uppercase text-amber-400">MoMo Line:</span>
                <div className="flex items-center justify-between text-xs font-black text-white">
                  <span className="truncate">{siteConfig.phone}</span>
                  <button
                    onClick={handleCopyMoMo}
                    className="text-[9px] bg-primary-600 hover:bg-primary-500 text-white px-2 py-0.5 rounded font-extrabold ml-1"
                  >
                    {copiedMoMo ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[9px] font-black uppercase text-amber-400">Ecobank Account:</span>
                <div className="flex items-center justify-between text-xs font-black text-white">
                  <span className="truncate">1441000284910</span>
                  <button
                    onClick={handleCopyBank}
                    className="text-[9px] bg-primary-600 hover:bg-primary-500 text-white px-2 py-0.5 rounded font-extrabold ml-1"
                  >
                    {copiedBank ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. SLEEK & COMPACT DEVELOPER CREDIT BADGE & BOTTOM LEGAL BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© 2026 {siteConfig.name}. Established April 9, 2019.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            
            {/* SLEEK & COMPACT DEVELOPER BADGE */}
            <a
              href="https://gene-afriyie-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-primary-600 text-amber-300 hover:text-white text-[11px] font-bold px-3 py-0.5 rounded-full border border-amber-400/50 hover:border-amber-300 transition-all duration-200 shadow-sm"
              title="Visit Eugene Afriyie's Developer Portfolio"
            >
              <Code className="w-3 h-3 text-amber-400" />
              <span>Designed & Built by <strong className="text-white font-black">Eugene Afriyie</strong></span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white transition-all shadow-lg hover:scale-110 ml-2 inline-flex items-center gap-1 font-bold text-xs"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-amber-300" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
