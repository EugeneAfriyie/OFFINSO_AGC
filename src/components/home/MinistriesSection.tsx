"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Baby, Flame, Heart, ShieldCheck, Music, Globe, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function MinistriesSection() {
  const ministries = [
    {
      id: "children",
      name: "King's Kids Ministry",
      subtitle: "Nursery to Age 12",
      description: "Nurturing young hearts in a safe, fun, and loving environment with engaging Bible lessons.",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "youth",
      name: "Kingdom Youth & Young Adults",
      subtitle: "Teenagers & Students",
      description: "Empowering the next generation with Pentecostal fire, godly purpose, and authentic fellowship.",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "women",
      name: "Virtuous Women of Faith",
      subtitle: "Sisters in Christ",
      description: "Building strong women of prayer, wisdom, and encouragement through mentorship and prayer circles.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "men",
      name: "Men of Valor Fellowship",
      subtitle: "Brothers in Ministry",
      description: "Equipping men to lead their families, workplaces, and church with spiritual integrity and honor.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "worship",
      name: "Worship & Creative Arts",
      subtitle: "Praise & Sound Team",
      description: "Leading the congregation into Spirit-filled worship through music, choir, and media production.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1510563800743-aed236490d08?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "outreach",
      name: "Evangelism & Outreach",
      subtitle: "Gospel Missions",
      description: "Demonstrating Christ's love across Offinso, Kumasi through community aid, medical screening, and outreach.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
              <Users className="w-3.5 h-3.5 text-primary-600" />
              <span>OUR MINISTRY DEPARTMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ministries for Every Generation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Discover a place to belong, grow spiritually, and serve others in Offinso, Kumasi.
            </p>
          </div>

          <Link
            href="/ministries"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-extrabold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Explore All Ministries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Card Ministry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {ministries.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all overflow-hidden flex flex-col justify-between group"
              >
                
                {/* Image Banner */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-primary-600 flex items-center justify-center font-bold shadow-md border border-white/40">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Subtitle Badge */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-xs font-bold text-amber-300 drop-shadow">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/ministries#${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Learn More & Join</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Volunteer Callout */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-extrabold text-slate-900">
              Passionate about serving in ministry?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              We welcome your God-given talents! Join one of our ministry serve teams in Offinso, Kumasi.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/serve"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <Users className="w-4 h-4 text-white" />
              <span>Join a Serve Team</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
