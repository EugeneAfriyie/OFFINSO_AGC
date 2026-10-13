"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Flame, 
  Heart, 
  ShieldCheck, 
  Music, 
  Baby, 
  Globe, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2,
  HeartHandshake,
  Crown
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export default function MinistriesPage() {
  const { openModal } = useModal();
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const weeklySchedule = [
    { 
      day: "Tuesday", 
      time: "5:30 PM GMT", 
      ministry: "Virtuous Women's Fellowship", 
      venue: "Main Sanctuary",
      leader: "Deaconess Grace Appiah",
      description: "Equipping women, mothers, and young ladies in prayer, marriage, family life, and compassionate community outreach.",
      badge: "Women's Prayer",
      icon: Heart,
    },
    { 
      day: "Thursday", 
      time: "6:00 PM GMT", 
      ministry: "Sanctuary Choir & Music Rehearsal", 
      venue: "Choir Loft & Media Room",
      leader: "Minister Michael Baah",
      description: "Vocalists, instrumentalists, and broadcast media operators rehearsing anointed praise for Sunday services.",
      badge: "Worship Practice",
      icon: Music,
    },
    { 
      day: "Friday", 
      time: "6:00 PM GMT", 
      ministry: "Kingdom Youth & Campus Service", 
      venue: "Youth Chapel",
      leader: "Pastor Emmanuel Osei",
      description: "Teenagers, high school graduates, and tertiary students gathering for Pentecostal worship, Bible study, and campus fire.",
      badge: "Youth Service",
      icon: Flame,
    },
    { 
      day: "Saturday", 
      time: "7:00 AM GMT", 
      ministry: "Men of Valor Breakfast Fellowship", 
      venue: "Sanctuary Annex (1st & 3rd Sat)",
      leader: "Deacon Kwadwo Mensah",
      description: "Sharpening men and fathers in spiritual leadership, integrity at work and home, and campus ushering logistics.",
      badge: "Men's Prayer",
      icon: ShieldCheck,
    },
    { 
      day: "Sunday", 
      time: "9:00 AM & 11:00 AM", 
      ministry: "King's Kids Sunday School", 
      venue: "Children's Cathedral Wing",
      leader: "Children's Ministry Team",
      description: "Safe, fun, and background-checked Sunday school programs for infants up to 12 years old during main Sunday services.",
      badge: "Children's Church",
      icon: Baby,
    },
  ];

  const currentGathering = weeklySchedule[selectedDayIndex];
  const CurrentIcon = currentGathering.icon;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* 1. ELEGANT HERO SECTION */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[#050B14] text-white overflow-hidden border-b border-slate-800">
        
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

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/90 text-sky-300 text-[11px] font-black uppercase tracking-wider border border-primary-500/30 backdrop-blur-xl">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>SERVE & GROW AT THE KING'S TEMPLE A/G</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-5xl mx-auto">
            Discover Your Calling & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-400 to-amber-300">
              Belong to a Family
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            From vibrant youth fire to compassionate community care, experience transformative fellowship across our 6 active ministry departments in Offinso, Kumasi.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/15 backdrop-blur-md">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>6 Active Departments</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/15 backdrop-blur-md">
              <Users className="w-4 h-4 text-sky-400" />
              <span>Intergenerational Care</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/15 backdrop-blur-md">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Offinso Outreach</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BOLD ASYMMETRIC BENTO GRID SHOWCASE */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Flame className="w-3.5 h-3.5 text-primary-600" />
              <span>OUR MINISTRIES AT A GLANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Where Do You Belong?
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
              Every department is designed to help you know Christ, grow spiritually, and serve others.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Bento Item 1: Kingdom Youth */}
            <div className="lg:col-span-8 bg-[#050B14] text-white rounded-3xl border-2 border-primary-500/40 p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40 transition-opacity">
                <Image
                  src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1784562978/a0d09b69-8f99-46c2-b8f5-3dd6aca68b92.png"
                  alt="Kingdom Youth Ministry"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-transparent" />
              </div>

              <div className="relative z-10 space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-white bg-primary-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    FEATURED YOUTH & CAMPUS
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-bold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Fridays at 6:00 PM</span>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white pt-2">
                  Kingdom Youth & Campus Ministry
                </h3>

                <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
                  Empowering teenagers, high school graduates, and university students across Offinso with Pentecostal fire, godly character, and campus evangelism.
                </p>
              </div>

              <div className="relative z-10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/15 mt-6">
                <div className="text-xs text-amber-300 font-semibold text-left">
                  Leader: Pastor Emmanuel Osei • Youth Chapel
                </div>

                <Link
                  href="/serve"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span>Join Kingdom Youth</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Bento Item 2: Sanctuary Choir */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-xl flex flex-col justify-between group hover:border-primary-300 transition-all space-y-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Music className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full inline-block">
                  WORSHIP & MEDIA
                </span>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  Sanctuary Choir & Music
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Leading anointed praise that exalts King Jesus. Vocalists, instrumentalists, and broadcast media team.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-primary-600" />
                  <span>Thursdays at 6:00 PM • Choir Loft</span>
                </div>

                <Link
                  href="/serve"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-sm"
                >
                  <span>Join Worship Team</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>

            {/* Bento Item 3: Virtuous Women */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-xl flex flex-col justify-between group hover:border-rose-300 transition-all space-y-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full inline-block">
                  WOMEN'S FELLOWSHIP
                </span>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  Virtuous Women
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Equipping women of all ages in faith, family, career, and community outreach under Deaconess Grace Appiah.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600" />
                  <span>Tuesdays at 5:30 PM • Main Sanctuary</span>
                </div>

                <Link
                  href="/serve"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-sm"
                >
                  <span>Connect with Women</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>

            {/* Bento Item 4: Men of Valor */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-xl flex flex-col justify-between group hover:border-emerald-300 transition-all space-y-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full inline-block">
                  MEN'S FELLOWSHIP
                </span>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  Men of Valor
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Building godly men of integrity, spiritual leadership in the home, and campus ushering operations.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Saturdays (1st & 3rd) 7:00 AM</span>
                </div>

                <Link
                  href="/serve"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-sm"
                >
                  <span>Connect with Men</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>

            {/* Bento Item 5: King's Kids */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-xl flex flex-col justify-between group hover:border-sky-300 transition-all space-y-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Baby className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full inline-block">
                  CHILDREN 0–12 YRS
                </span>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  King's Kids Ministry
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Safe, fun, and background-checked Sunday school programs nurturing young hearts in God's Word.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>Sundays 9:00 AM & 11:00 AM</span>
                </div>

                <Link
                  href="/serve"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-sm"
                >
                  <span>Explore King's Kids</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>

            {/* Bento Item 6: Evangelism & Community Care */}
            <div className="lg:col-span-12 bg-[#050B14] text-white rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-1 text-amber-300 text-xs font-black uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-amber-300" />
                  <span>COMMUNITY OUTREACH & MEDICAL FAIRS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Evangelism & Community Care Across Offinso
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal leading-relaxed">
                  Free medical screenings, emergency food distribution, and open-air gospel outreach serving widows and less privileged families in Kumasi and Offinso.
                </p>
              </div>

              <Link
                href="/serve"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg transition-all flex-shrink-0"
              >
                <span>Volunteer for Outreach</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE DAY SPOTLIGHT TIMETABLE */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Calendar className="w-3.5 h-3.5 text-primary-600" />
              <span>WEEKLY FELLOWSHIP TIMETABLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              When & Where We Gather
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
              Select a day below to view the exact meeting details and location at our Offinso Toll Booth campus.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {weeklySchedule.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDayIndex(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-extrabold transition-all border ${
                  selectedDayIndex === idx
                    ? "bg-primary-600 text-white border-primary-600 shadow-xl scale-105"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <span>{item.day}</span>
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-[#050B14] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/15">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                  <CurrentIcon className="w-7 h-7 text-amber-300" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-black text-white bg-primary-600 px-3 py-0.5 rounded-full uppercase tracking-wider">
                    {currentGathering.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {currentGathering.ministry}
                  </h3>
                </div>
              </div>

              <div className="text-xs font-extrabold text-amber-300 bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>{currentGathering.time}</span>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-normal">
                {currentGathering.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span><strong>Venue:</strong> {currentGathering.venue}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span><strong>Coordinator:</strong> {currentGathering.leader}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-white/10 mt-6">
              <button
                onClick={() => openModal("plan-visit")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Plan Your Visit This {currentGathering.day}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CLEAN HIGH-FASHION EDITORIAL LIGHT CTA CARD */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="bg-white rounded-3xl border-t-4 border-amber-400 border-x border-b border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <HeartHandshake className="w-4 h-4 text-primary-600" />
                <span>BECOMING A KINGDOM WORKER</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to Deploy Your Spiritual Gifts in Offinso?
              </h2>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                Every believer is gifted by God to build up the church. Whether you sing, teach, usher, operate media, or serve in community welfare, there is a place for you on our Serve Team.
              </p>

              <div className="pt-2">
                <Link
                  href="/serve"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  <span>Apply to Serve on a Team</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 text-left">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-500" />
                <span>4 Core Serve Opportunities</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span>Youth & Campus Discipleship</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Choir & Broadcast Media Ops</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Community Medical & Welfare</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Ushering & Campus Logistics</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
