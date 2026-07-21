"use client";

import React from "react";
import Image from "next/image";
import { Users, Mail } from "lucide-react";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Pastors John & Mary Davis",
      role: "Senior Pastors",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      bio: "Serving our congregation for over 12 years with a heart for Spirit-led worship, practical discipleship, and community outreach.",
    },
    {
      name: "Pastor Marcus Vance",
      role: "Youth & Young Adults Pastor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      bio: "Passionate about empowering the next generation to stand firm in faith and discover their unique God-given calling.",
    },
    {
      name: "Sarah Jenkins",
      role: "Children's Ministry Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      bio: "Dedicated to creating safe, joyful, and engaging environments where children learn God's Word with excitement.",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-canvas">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>PASTORAL TEAM</span>
          </div>
          <h1 className="text-4xl font-extrabold text-body tracking-tight">
            Leadership & <span className="text-primary-600">Pastoral Staff</span>
          </h1>
          <p className="mt-3 text-subtext">Meet the dedicated team serving our church family with love and integrity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-borderline shadow-card flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3]">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-body">{leader.name}</h3>
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mt-0.5 mb-3">{leader.role}</p>
                  <p className="text-sm text-subtext leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
