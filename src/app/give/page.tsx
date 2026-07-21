"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  Building2, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Lock,
  BookOpen,
  X,
  Zap,
  Crown,
  Info,
  Quote,
  Star,
  PhoneCall,
  MapPin
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";
import { GivingModal } from "@/components/modals/GivingModal";

export default function GivePage() {
  const { openModal } = useModal();
  const [isGivingModalOpen, setIsGivingModalOpen] = useState<boolean>(false);
  const [giveType, setGiveType] = useState<string>("Tithe");
  const [selectedPreset, setSelectedPreset] = useState<string>("100");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copiedMoMo, setCopiedMoMo] = useState<boolean>(false);
  const [copiedBank, setCopiedBank] = useState<boolean>(false);
  const [activeInfoCard, setActiveInfoCard] = useState<string | null>(null);

  const presets = ["20", "50", "100", "250", "500"];

  const designations = [
    { 
      id: "Tithe", 
      label: "Tithe (10%)", 
      icon: "🌾", 
      scripture: "Malachi 3:10",
      desc: "10% Covenant blessing for church storehouse & operations." 
    },
    { 
      id: "Offering", 
      label: "Free-will Offering", 
      icon: "🪙", 
      scripture: "2 Cor 9:7",
      desc: "Cheerful worship offering to honor God's goodness." 
    },
    { 
      id: "Building Seed", 
      label: "Building Fund", 
      icon: "🏛️", 
      scripture: "Exodus 25:8",
      desc: "Funding the Offinso Cathedral sanctuary expansion." 
    },
    { 
      id: "Missions", 
      label: "Missions & Fire", 
      icon: "🔥", 
      scripture: "Mark 16:15",
      desc: "Sponsoring gospel crusades & rural church planting." 
    },
  ];

  const testimonials = [
    {
      name: "Deacon Emmanuel Mensah",
      role: "Offinso Central Market Business Owner",
      quote: "When I started faithful tithing at The King's Temple A/G in 2021, God turned my struggling retail shop into a thriving wholesale distributor in Offinso. Malachi 3:10 is real!",
      tag: "🌾 Tithe & Business Harvest",
      initials: "EM"
    },
    {
      name: "Sister Abigail Appiah",
      role: "Kumasi Healthcare Professional",
      quote: "I sowed a free-will seed towards the Cathedral Building Fund during the August revival. Within 3 weeks, God blessed me with an unexpected international scholarship opportunity!",
      tag: "🏛️ Building Fund Breakthrough",
      initials: "AA"
    },
    {
      name: "Brother Kwadwo Baah",
      role: "Offinso Outreach Partner",
      quote: "Supporting the Community Welfare Aid fund for widows and orphans brought an unexplainable peace and supernatural promotion in my career. Giving to God truly pays!",
      tag: "🍞 Community Welfare Aid",
      initials: "KB"
    }
  ];

  const scrollToConsole = () => {
    const el = document.getElementById("giving-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

  const displayedAmount = customAmount || selectedPreset || "100";

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-8 sm:py-10 bg-[#050B14] text-white overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-primary-600/25 via-primary-500/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/90 text-sky-300 text-[11px] font-black uppercase tracking-wider border border-primary-500/30 backdrop-blur-xl">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>COVENANT STEWARDSHIP & KINGDOM IMPACT</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                Honoring God With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-400 to-amber-300">
                  Firstfruits & Kingdom Giving
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                Every seed sown into {siteConfig.name} fuels gospel crusades, community welfare, and cathedral expansion across Offinso & Ghana.
              </p>

              <div className="pt-1 max-w-xl">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="text-[10px] font-black text-amber-300 uppercase tracking-wider px-1">
                    Quick Seed:
                  </span>
                  {["50", "100", "250", "500"].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedPreset(amt);
                        setCustomAmount("");
                        scrollToConsole();
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                        !customAmount && selectedPreset === amt
                          ? "bg-primary-600 text-white shadow-md scale-105"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      GH₵ {amt}
                    </button>
                  ))}
                  <button
                    onClick={scrollToConsole}
                    className="px-4 py-1.5 rounded-lg text-xs font-black bg-primary-600 hover:bg-primary-500 text-white uppercase tracking-wider shadow-md transition-all ml-auto inline-flex items-center gap-1.5"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Give Now →</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[380px] flex-shrink-0">
              <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-xl space-y-3 text-left relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] font-black text-white uppercase tracking-wider">
                      KINGDOM GIVING HUB
                    </span>
                  </div>
                  <span className="text-[9px] font-black text-white bg-primary-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    OFFINSO TOLL BOOTH
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 space-y-1">
                  <div className="text-[9px] font-black uppercase text-sky-300 tracking-wider">
                    ⚡ Instant MoMo Transfer Number
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-white tracking-wide">
                      {siteConfig.phone}
                    </span>
                    <button
                      onClick={handleCopyMoMo}
                      className="px-2.5 py-0.5 rounded bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-black uppercase transition-all shadow-sm"
                    >
                      {copiedMoMo ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="space-y-0.5 pt-0.5 border-t border-white/10">
                  <p className="text-[10px] text-slate-200 leading-normal font-normal italic">
                    "When you sow bountifully into God's kingdom, He opens heaven's windows over your harvest."
                  </p>
                  <div className="text-[9px] font-extrabold text-amber-300">
                    — Pastor Collins Ababio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE ONLINE PAYMENT PORTAL (IDENTICAL TO HOME SECTION DESIGN) */}
      <section id="giving-form" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Vision & Manual Copy Buttons */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>ONLINE GIVING & TITHE PORTAL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Partner With Us in Kingdom Ministry
              </h2>

              <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                Your faithful tithes, offerings, and seeds empower us to transform lives, support families, and spread the gospel across Offinso, Kumasi, and Ghana.
              </p>

              {/* Manual MoMo & Bank Copy Bar */}
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Prefer Manual MoMo or Bank Transfer?
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleCopyMoMo}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-xs shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-amber-600" />
                    <span>{copiedMoMo ? "MoMo Copied!" : `Copy MoMo (${siteConfig.phone})`}</span>
                  </button>

                  <button
                    onClick={handleCopyBank}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-xs shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-primary-600" />
                    <span>{copiedBank ? "Bank Copied!" : "Copy Ecobank Details"}</span>
                  </button>
                </div>
              </div>

              {/* Scripture Promise */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                <p className="text-xs font-bold text-slate-700 italic">
                  "Give, and it will be given to you. A good measure, pressed down, shaken together..."
                </p>
                <div className="text-[10px] font-black text-primary-600 uppercase tracking-wider">— LUKE 6:38</div>
              </div>

            </div>

            {/* Right Column: Clean White Interactive Giving Portal Card (Identical to Home) */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-5 text-left">
              
              {/* Header Pill */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                  <Sparkles className="w-3.5 h-3.5 text-primary-600" />
                  <span>INSTANT ONLINE PAYMENT</span>
                </span>
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>256-Bit Encrypted</span>
                </span>
              </div>

              {/* Category Purpose Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-900 block">Select Purpose:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {designations.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGiveType(item.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-extrabold border transition-all ${
                        giveType === item.id
                          ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {item.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-900 block">Select Amount (GH₵):</label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {["20", "50", "100", "250"].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedPreset(amt);
                        setCustomAmount("");
                      }}
                      className={`py-2.5 rounded-xl text-xs font-black border transition-all ${
                        selectedPreset === amt && !customAmount
                          ? "bg-amber-400 text-slate-950 border-amber-400 shadow-sm"
                          : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      GH₵ {amt}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Or Enter Custom Amount (GH₵)..."
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Primary Action Button - Opens Giving Modal */}
              <button
                onClick={() => setIsGivingModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all hover:scale-[1.01]"
              >
                <Lock className="w-4 h-4 text-amber-300" />
                <span>Give GH₵ {displayedAmount} Online Now</span>
              </button>

              {/* Supported Payment Channels */}
              <div className="text-center text-[11px] text-slate-400 font-medium">
                Supports Visa • Mastercard • MTN MoMo • Telecel Cash • AT Money
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-20 bg-[#071120] text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            <div className="w-full lg:w-96 space-y-4 text-center lg:text-left flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-black uppercase tracking-wider border border-white/15 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>COVENANT HARVEST STORIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Real Stories of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300">
                  Open Heavens & Overflow
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Discover how faithful kingdom giving at {siteConfig.shortName} empowers lives, turns businesses around, and unlocks God's promises across Offinso and Ghana.
              </p>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-300">100+ Verified Testimony Records</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
              {testimonials.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 space-y-4 shadow-2xl hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 text-left flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-amber-300 uppercase tracking-wider bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                        {item.tag}
                      </span>
                      <Quote className="w-5 h-5 text-amber-400/40 group-hover:text-amber-400 transition-colors" />
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed italic font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center flex-shrink-0 shadow-md">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL LIGHT CTA CARD WITH SMOOTH SCROLL */}
      <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="bg-white rounded-3xl border-t-4 border-amber-400 border-x border-b border-slate-200 p-8 sm:p-12 lg:p-14 shadow-xl max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <Heart className="w-4 h-4 text-primary-600 fill-primary-600" />
                <span>PARTNER WITH PASTOR COLLINS ABABIO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Experience the Blessing of Kingdom Partnership Today
              </h2>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Whether you are giving your monthly tithe, sowing a special revival seed, or supporting Offinso community aid, God honors every cheerful giver.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={scrollToConsole}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Sow Your Kingdom Seed Now</span>
                </button>

                <button
                  onClick={() => openModal("prayer-request")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl border border-slate-200 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Request Pastoral Prayer</span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-80 bg-slate-50 rounded-2xl p-6 space-y-3.5 border border-slate-200 text-left flex-shrink-0">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-primary-600" />
                <span>GIVING ASSISTANCE DESK</span>
              </h4>

              <div className="space-y-1.5 text-xs text-slate-700">
                <p className="font-bold text-slate-900">Senior Pastor Collins Ababio</p>
                <p className="text-primary-700 font-extrabold text-sm">{siteConfig.phone}</p>
                <p className="text-slate-500 pt-1">Offinso Toll Booth, Main Cathedral Highway</p>
                <p className="text-slate-500">Ghana MoMo & International Wire Support</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ONLINE GIVING MODAL */}
      <GivingModal
        isOpen={isGivingModalOpen}
        onClose={() => setIsGivingModalOpen(false)}
      />

    </div>
  );
}
