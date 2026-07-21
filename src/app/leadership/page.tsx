"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Heart, 
  Phone, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  Lock, 
  Send,
  Flame,
  Award,
  ArrowRight,
  Music,
  UserCheck,
  Baby,
  Globe,
  Quote,
  HeartHandshake,
  Crown
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export default function LeadershipPage() {
  const { openModal } = useModal();

  const pastoralPillars = [
    {
      icon: BookOpen,
      title: "Expository Biblical Teaching",
      description: "Preaching the unadulterated Word of God with clarity, conviction, and practical wisdom for daily Christian victory.",
      badge: "Scriptural Authority",
    },
    {
      icon: Flame,
      title: "Pentecostal Anointing & Prayer",
      description: "Leading the sanctuary in Spirit-filled worship, intercessory prayer, and cultivating spiritual gifts for revival.",
      badge: "Spirit-Empowered",
    },
    {
      icon: Heart,
      title: "Servant Leadership & Love",
      description: "Shepherding our church family in Offinso with humility, integrity, and genuine pastoral care for all generations.",
      badge: "Christ-Like Care",
    },
  ];

  const leaders = [
    {
      id: "leader-1",
      name: "Pastor Collins Ababio",
      title: "Senior Pastor & Founder",
      bio: "Senior Pastor Collins Ababio is an anointed Pentecostal preacher, teacher, and spiritual father. He founded The King's Temple A/G on April 9, 2019 with a vision to build a Spirit-filled cathedral family in Offinso, Kumasi.",
      image: siteConfig.pastorImage,
      featured: true,
      phone: siteConfig.phone,
      email: siteConfig.email,
    },
    {
      id: "leader-2",
      name: "Pastor Emmanuel Osei",
      title: "Associate Pastor & Youth Director",
      department: "Kingdom Youth & Campus Discipleship",
      bio: "Empowering teenagers and university students across Offinso with Pentecostal fire, godly character, and clear direction for their future.",
      quote: "Raising a fearless youth generation rooted in Christ.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      icon: Flame,
      badge: "Next-Gen Fire",
    },
    {
      id: "leader-3",
      name: "Deaconess Grace Appiah",
      title: "Women's Ministry & Welfare Director",
      department: "Virtuous Women & Community Aid",
      bio: "Mentoring women, coordinating intercessory prayer circles, and leading health fairs and food distribution for families in Offinso.",
      quote: "Serving less privileged families with Christ-like love.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      icon: UserCheck,
      badge: "Welfare & Care",
    },
    {
      id: "leader-4",
      name: "Deacon Kwadwo Mensah",
      title: "Men's Ministry & Administration Lead",
      department: "Men of Valor & Ushering Logistics",
      bio: "Equipping brothers to be spiritual leaders in their homes, while ensuring seamless sanctuary logistics and campus ushering operations.",
      quote: "Building godly men of integrity and honor.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      icon: ShieldCheck,
      badge: "Men of Valor",
    },
    {
      id: "leader-5",
      name: "Minister Michael Baah",
      title: "Worship & Creative Arts Director",
      department: "Sanctuary Choir & Music Ministry",
      bio: "Directing sanctuary vocalists, musicians, and audio production, creating a vibrant, Spirit-filled praise atmosphere during every service.",
      quote: "Exalting Christ through anointed, passionate worship.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      icon: Music,
      badge: "Worship & Arts",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* 1. LEADERSHIP HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative py-12 lg:py-16 bg-[#050B14] text-white overflow-hidden border-b border-slate-800">
        
        {/* Background Sanctuary Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784559187/326fa0fb-f0b5-4856-aaf8-82bff6ea5e05.png"
            alt="The King's Temple A/G Sanctuary"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/95 via-[#050B14]/85 to-[#050B14]/95" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Vision & Calling (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/90 text-sky-300 text-[11px] font-black uppercase tracking-wider border border-primary-500/30 backdrop-blur-xl">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>PASTORAL COVERING & LEADERSHIP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Shepherding God's Flock with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-400 to-amber-300">
                  Wisdom, Integrity & Grace
                </span>
              </h1>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Under the spiritual oversight of Senior Pastor Collins Ababio, our pastoral team is dedicated to prayer, discipling believers, and leading {siteConfig.name} family in Offinso, Kumasi.
              </p>

              {/* Leadership Core Values Pill Badges */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Biblical Integrity</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 backdrop-blur-md">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pentecostal Anointing</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 backdrop-blur-md">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Compassionate Care</span>
                </div>
              </div>

            </div>

            {/* Right Column: Pastoral Scripture Seal Card (5 cols) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-white/5 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl space-y-4 text-left">
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold shadow-md flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-amber-300" />
                  </div>
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider">SCRIPTURE COVERING</span>
                </div>

                <blockquote className="text-xs sm:text-sm font-extrabold text-white leading-relaxed italic">
                  "Be shepherds of God's flock that is under your care, watching over them—not because you must, but because you are willing, as God wants you to be."
                </blockquote>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px]">
                  <span className="font-extrabold text-amber-300 uppercase tracking-wider">— 1 PETER 5:2</span>
                  <span className="text-slate-300 font-medium">Assemblies of God Ghana</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Senior Pastor Spotlight Card (Featured) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="bg-[#050B14] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800 relative overflow-hidden space-y-12">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left: Official Senior Pastor Portrait (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl bg-slate-900">
                  <Image
                    src={siteConfig.pastorImage}
                    alt={siteConfig.seniorPastor}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right: Senior Pastor Bio & Contact (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950 text-sky-300 text-xs font-extrabold uppercase tracking-wider border border-primary-500/30">
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  <span>SENIOR PASTOR & FOUNDER</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {siteConfig.seniorPastor}
                </h2>

                <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                  Senior Pastor & Founder of {siteConfig.name} (Est. April 9, 2019). Pastor Collins Ababio is an anointed Pentecostal preacher, teacher, and spiritual leader dedicated to discipling believers, strengthening families, and transforming society through the unadulterated gospel of Jesus Christ.
                </p>

                {/* Direct Pastoral Contact Box */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Pastoral Helpline:</span>
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-sm font-extrabold text-amber-300 hover:text-white transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Email Contact:</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-extrabold text-amber-300 hover:text-white transition-colors truncate block">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Pastoral Action Buttons (ROYAL BLUE PRIMARY) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => openModal("prayer-request")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                  >
                    <Lock className="w-4 h-4 text-amber-300" />
                    <span>Request Pastoral Counseling</span>
                  </button>

                  <button
                    onClick={() => openModal("plan-visit")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-xl border border-white/20 transition-all"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Meet Pastor This Sunday</span>
                  </button>
                </div>

              </div>

            </div>

            {/* SENIOR PASTOR'S WELCOME LETTER & SIGNATURE CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl relative space-y-3 text-left">
              <Quote className="w-8 h-8 text-amber-400/40 absolute top-4 right-4" />
              <div className="text-xs font-black text-amber-300 uppercase tracking-wider">A PERSONAL NOTE FROM PASTOR COLLINS</div>
              <p className="text-xs sm:text-base text-slate-200 leading-relaxed italic font-medium max-w-4xl">
                "Welcome to The King's Temple Assemblies of God. Whether you are seeking spiritual refuge, a vibrant church family, or a place to discover and deploy your God-given destiny, our sanctuary doors and pastoral hearts are wide open to you in Offinso."
              </p>
              <div className="pt-2 text-xs font-extrabold text-amber-300">
                — Senior Pastor Collins Ababio • Founder, The King's Temple A/G
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.5 PASTORAL CORE PILLARS & SPIRITUAL MANDATE */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
              <span>SPIRITUAL MANDATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Pastoral Core Pillars
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
              Three sacred pillars that guide our spiritual oversight, preaching, and care for God's people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastoralPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl transition-all space-y-4 group text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. REDESIGNED MINISTRY TEAM LEADERS GRID */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Award className="w-3.5 h-3.5 text-primary-600" />
              <span>MINISTRY TEAM LEADERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Dedicated Ministry Directors
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
              Serving with faith, integrity, and devotion across our various church departments in Offinso.
            </p>
          </div>

          {/* High-Impact Visual Directors Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.filter(l => !l.featured).map((leader) => {
              const Icon = leader.icon || Users;
              return (
                <div
                  key={leader.id}
                  className="bg-slate-50 hover:bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all flex flex-col justify-between group space-y-5 text-left"
                >
                  <div className="space-y-4">
                    
                    {/* Director Photo Frame with Hover Zoom */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-black text-slate-950 uppercase tracking-wider bg-amber-400 px-2.5 py-0.5 rounded-full shadow-sm">
                          {leader.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md text-amber-300 flex items-center justify-center font-bold">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[11px] font-extrabold text-slate-100 truncate">
                          {leader.department}
                        </span>
                      </div>
                    </div>

                    {/* Leader Meta */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary-700 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-primary-600 font-extrabold uppercase tracking-wider">
                        {leader.title}
                      </p>
                      
                      {/* Quote Pill */}
                      <p className="text-xs text-slate-700 italic font-semibold pt-1">
                        "{leader.quote}"
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2">
                        {leader.bio}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/serve"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs transition-colors text-center shadow-sm uppercase tracking-wider"
                  >
                    <span>Connect & Serve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SERVE TEAM CTA SECTION */}
      <section className="py-16 sm:py-20 bg-[#050B14] text-white border-t border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-950 text-sky-300 text-xs font-extrabold uppercase tracking-wider border border-primary-500/30">
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>BE PART OF GOD'S WORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Serve Alongside Anointed Ministry Leaders in Offinso
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Discover your spiritual gifts, connect with our dedicated ministry directors, and make an eternal impact in our church and community.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/serve"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
            >
              <span>Join A Serve Team Today</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <button
              onClick={() => openModal("prayer-request")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl backdrop-blur-md border border-white/20 transition-all"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Request Pastoral Prayer</span>
            </button>
          </div>

        </div>
      </section>

      {/* 5. Pastoral Support & Counseling Callout Bar */}
      <section className="py-12 bg-slate-950 text-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Need Personal Pastoral Counseling or Prayer?</h3>
            <p className="text-xs text-slate-300">Senior Pastor Collins Ababio and our pastoral care team are here for you.</p>
          </div>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Call Pastoral Helpline: {siteConfig.phone}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
