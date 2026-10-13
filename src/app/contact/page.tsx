"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Flame, 
  MessageSquare, 
  User, 
  PhoneCall, 
  Heart, 
  Crown, 
  Navigation, 
  Building2, 
  Globe, 
  Calendar,
  X,
  ShieldCheck,
  Zap,
  Check,
  Compass,
  Headphones,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Users
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export default function ContactPage() {
  const { openModal } = useModal();
  const [selectedChannel, setSelectedChannel] = useState<string>("pastor");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const channels = [
    {
      id: "pastor",
      title: "Senior Pastor Desk",
      subtitle: "Direct Counseling & Guidance",
      icon: Crown,
      tag: "PASTOR COLLINS ABABIO",
      desc: "Connect directly with Senior Pastor Collins Ababio for confidential spiritual guidance, marital counseling, or family prayer."
    },
    {
      id: "secretariat",
      title: "Church Secretariat",
      subtitle: "Administrative & Membership",
      icon: Building2,
      tag: "OFFICE SECRETARIAT",
      desc: "Reach our administrative team regarding church membership, water baptism, baby dedication, or official church letters."
    },
    {
      id: "prayer",
      title: "24/7 Prayer Vigil",
      subtitle: "Urgent Intercession Desk",
      icon: Flame,
      tag: "PRAYER NETWORK",
      desc: "Submit urgent prayer requests to our intercessory prayer warriors standing by 24/7 for healing, deliverance, and divine protection."
    },
    {
      id: "giving",
      title: "Giving & Stewardship",
      subtitle: "MoMo & Bank Support",
      icon: Heart,
      tag: "FINANCIAL DESK",
      desc: "Get instant assistance regarding Mobile Money transfers, Ecobank wire deposits, or tithe receipts from our financial desk."
    },
    {
      id: "visitor",
      title: "Visitor Shuttle",
      subtitle: "Sunday Transport & Directions",
      icon: Navigation,
      tag: "WELCOME DESK",
      desc: "Planning your first visit to Offinso Toll Booth sanctuary? Get free Sunday bus shuttle guidance and front-row welcome seating."
    }
  ];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in your name, phone number, and message.");
      return;
    }
    setIsSubmitted(true);
  };

  const activeChannelObj = channels.find(c => c.id === selectedChannel) || channels[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      
      {/* 1. UNIQUE BILLBOARD HERO SECTION */}
      <section className="relative py-10 sm:py-14 bg-[#050B14] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary-600/30 via-primary-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-5xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OFFINSO CATHEDRAL SANCTUARY IS OPEN FOR WORSHIP</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Offinso Toll Booth Highway</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{siteConfig.phone}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex-1 space-y-3.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/90 text-sky-300 text-[11px] font-black uppercase tracking-wider border border-primary-500/30 backdrop-blur-xl">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>KING'S TEMPLE A/G — CAMPUS & PASTORAL PORTAL</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                Where Faith Meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-400 to-amber-300">
                  Fellowship & Open Doors
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                Connect directly with Senior Pastor Collins Ababio and the pastoral secretarial desk. Whether you need prayer, counseling, or directions to our sanctuary, we are here for you.
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="#contact-channels"
                  className="px-5 py-3 rounded-xl text-xs font-black bg-primary-600 hover:bg-primary-500 text-white uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Choose Communication Channel →</span>
                </a>

                <button
                  onClick={() => openModal("prayer-request")}
                  className="px-5 py-3 rounded-xl text-xs font-black bg-white/10 hover:bg-white/20 text-amber-300 uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Request Pastoral Prayer</span>
                </button>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-[11px] font-bold text-slate-200 truncate">Offinso Toll Booth</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span className="text-[11px] font-bold text-slate-200 truncate">Sun 9:00 & 11:00 AM</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-[11px] font-bold text-slate-200 truncate">{siteConfig.phone}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[380px] flex-shrink-0">
              <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 shadow-2xl space-y-3.5 text-left relative overflow-hidden group">
                
                <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-black uppercase text-white">PASTORAL DESK</span>
                  </div>
                  <span className="text-[9px] font-black text-slate-950 bg-amber-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    CONFIDENTIAL
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 space-y-1">
                    <span className="text-[9px] font-black uppercase text-sky-300 tracking-wider">
                      Senior Pastor Direct Line
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-white">{siteConfig.phone}</span>
                      <button
                        onClick={handleCopyPhone}
                        className="px-2 py-0.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-black uppercase transition-all shadow-sm"
                      >
                        {copiedPhone ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 space-y-1">
                    <span className="text-[9px] font-black uppercase text-sky-300 tracking-wider">
                      Cathedral Office Email
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-white truncate max-w-[180px]">{siteConfig.email}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="px-2 py-0.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-black uppercase transition-all shadow-sm"
                      >
                        {copiedEmail ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-0.5">
                  <p className="text-[11px] text-slate-200 italic leading-snug">
                    "No burden is too small for prayer. We welcome you to experience God's presence at Offinso."
                  </p>
                  <div className="text-[9px] font-extrabold text-amber-300">
                    — Pastor Collins Ababio (Senior Pastor)
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. COMPACT & SLEEK INTERACTIVE PASTORAL & MINISTRY HOTLINE MATRIX */}
      <section id="contact-channels" className="py-10 sm:py-14 bg-[#030712] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-primary-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 space-y-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-white/15 backdrop-blur-md">
              <Headphones className="w-3 h-3 text-amber-400" />
              <span>DIRECT CHURCH COMMUNICATION MATRIX</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Reach Out to Church Leadership & Desks
            </h2>

            <p className="text-xs text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
              Select your specific need from the compact channel pills below.
            </p>
          </div>

          {/* COMPACT SINGLE-LINE / LOW-PROFILE CHANNEL PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {channels.map((ch) => {
              const IconComp = ch.icon;
              const isSelected = selectedChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChannel(ch.id)}
                  className={`px-3.5 py-2 rounded-xl border transition-all duration-200 flex items-center gap-2 text-xs font-black ${
                    isSelected
                      ? "bg-primary-600 text-white border-primary-500 shadow-lg scale-105"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isSelected ? "text-amber-300" : "text-amber-400"}`} />
                  <span>{ch.title}</span>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC CHANNEL ACTION STAGE (COMPACT HEIGHT) */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 sm:p-7 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-2xl text-left">
            
            {/* Left Channel Overview (5 Cols) */}
            <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-white/10 pb-5 lg:pb-0 lg:pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 text-[9px] font-black uppercase tracking-wider border border-amber-400/30">
                <Crown className="w-3 h-3 text-amber-400" />
                <span>{activeChannelObj.tag}</span>
              </div>

              <h3 className="text-xl font-extrabold text-white leading-tight">
                {activeChannelObj.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {activeChannelObj.desc}
              </p>

              <div className="pt-1 space-y-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[9px] font-black uppercase text-amber-400 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>Direct Telephone Line</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-black text-white">
                    <span>{siteConfig.phone}</span>
                    <button
                      onClick={handleCopyPhone}
                      className="text-[9px] bg-primary-600 hover:bg-primary-500 text-white px-2 py-0.5 rounded font-extrabold"
                    >
                      {copiedPhone ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <a
                  href={`https://wa.me/233552724685?text=${encodeURIComponent(`Hello Pastor, I am reaching out regarding ${activeChannelObj.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-2.5 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Direct on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Rapid Message Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="space-y-0.5">
                <span className="text-[9px] font-black text-amber-300 uppercase tracking-wider">
                  RAPID MESSAGE TO {activeChannelObj.title.toUpperCase()}
                </span>
                <h4 className="text-sm font-extrabold text-white">Send Direct Message</h4>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kwame Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-white/15 bg-white/10 text-white placeholder-slate-400 text-xs font-extrabold focus:outline-none focus:border-amber-400 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+233 55 272 4685"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-white/15 bg-white/10 text-white placeholder-slate-400 text-xs font-extrabold focus:outline-none focus:border-amber-400 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                    Message for {activeChannelObj.title} *
                  </label>
                  <textarea
                    rows={2.5}
                    placeholder={`Write your request or inquiry for ${activeChannelObj.title}...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-white/15 bg-white/10 text-white placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-amber-400 transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-xl transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message to {activeChannelObj.title}</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE GOOGLE MAPS & DIRECTIONS GUIDE */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Navigation className="w-4 h-4 text-primary-600" />
              <span>LOCATION GUIDE & DIRECTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Find Us at Offinso Toll Booth
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Located directly along the main cathedral highway at Offinso Toll Booth, Kumasi, Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Google Map Embed */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[350px] relative">
              <iframe
                title="The King's Temple Assemblies of God Offinso Location Map"
                src="https://maps.google.com/maps?q=Offinso%20Kumasi%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Travel Directions Guide */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>Travel Directions</span>
                </h3>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="space-y-1">
                    <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-primary-600" />
                      <span>Driving from Kumasi Central:</span>
                    </p>
                    <p className="text-slate-600 pl-5">Take the N6 Highway heading towards Offinso. Turn right at the Offinso Toll Booth. The Cathedral sanctuary is clearly visible on your right.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-primary-600" />
                      <span>By Public Transport (Trotro):</span>
                    </p>
                    <p className="text-slate-600 pl-5">Board any Offinso-bound vehicle from Kejetia or Abrepo Junction. Alight at the Offinso Toll Booth junction. 2 minutes walk to church auditorium.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. URGENT COUNSELING & PRAYER SUPPORT BANNER */}
      <section className="py-14 sm:py-18 bg-[#071120] text-white border-t border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto text-center space-y-5 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-extrabold uppercase tracking-wider border border-amber-400/20">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>PASTORAL COUNSELING & PRAYER LINE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Need Immediate Pastoral Prayer or Counseling?
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Our Senior Pastor Collins Ababio and the pastoral prayer team are standing by to pray with you and provide biblical counseling.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Pastor Direct: {siteConfig.phone}</span>
              </a>

              <button
                onClick={() => openModal("prayer-request")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl border border-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Submit Secret Prayer Request</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUCCESS CONFIRMATION MODAL */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you, <span className="font-extrabold text-slate-900">{formData.name}</span>. Your message for <span className="font-extrabold text-primary-700">{activeChannelObj.title}</span> has been transmitted directly.
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", phone: "", message: "" });
              }}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all"
            >
              Done / Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
