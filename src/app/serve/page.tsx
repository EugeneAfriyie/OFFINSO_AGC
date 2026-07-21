"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HeartHandshake, 
  Users, 
  Music, 
  Baby, 
  Video, 
  Heart, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Send 
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function ServePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    team: "Hospitality & Ushering",
    notes: "",
  });

  const serveTeams = [
    {
      id: "team-1",
      title: "Hospitality & Ushering",
      description: "Welcoming first-time guests, assisting with sanctuary seating, and ensuring a warm worship atmosphere.",
      icon: Users,
      badge: "High Need",
    },
    {
      id: "team-2",
      title: "Worship & Creative Arts",
      description: "Leading the congregation in praise through vocals, choir, musical instruments, and stage production.",
      icon: Music,
    },
    {
      id: "team-3",
      title: "King's Kids Ministry",
      description: "Nurturing children (nursery to age 12) with fun, secure, and age-appropriate Bible lessons.",
      icon: Baby,
      badge: "Background Checked",
    },
    {
      id: "team-4",
      title: "Media & Live Broadcast",
      description: "Operating cameras, sound mixing, video production, and social media live streaming.",
      icon: Video,
    },
    {
      id: "team-5",
      title: "Community Outreach & Welfare",
      description: "Distributing food relief, organizing health fairs, and serving vulnerable families in Offinso.",
      icon: Heart,
    },
    {
      id: "team-6",
      title: "Campus Safety & Parking",
      description: "Guiding vehicles safely, managing guest parking spaces, and ensuring campus security.",
      icon: ShieldCheck,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
            <HeartHandshake className="w-3.5 h-3.5 text-primary-600" />
            <span>SERVE TEAM PORTAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Use Your Gifts to Serve God & People
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Discover meaningful serve opportunities at {siteConfig.name} in Offinso, Kumasi. Every gift matters.
          </p>
        </div>

        {/* 6-Team Serve Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serveTeams.map((team) => {
            const Icon = team.icon;
            return (
              <div
                key={team.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {team.badge && (
                      <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                        {team.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    {team.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {team.description}
                  </p>
                </div>

                <button
                  onClick={() => setFormData({ ...formData, team: team.title })}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-primary-50 text-slate-800 hover:text-primary-700 font-extrabold text-xs border border-slate-200 transition-colors text-center"
                >
                  Select This Team
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Serve Application Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>JOIN A SERVE TEAM TODAY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Serve Application Form
            </h2>
            <p className="text-xs text-slate-600">
              Fill out your details below and our serve team coordinator will contact you.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Application Received!</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>, for stepping forward to serve on the <strong>{formData.team}</strong> team. Our coordinator in Offinso, Kumasi will reach out to you shortly!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl bg-primary-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:bg-primary-700 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +233 55 272 4685"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                    Selected Serve Team *
                  </label>
                  <select
                    value={formData.team}
                    onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {serveTeams.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                  Experience or Special Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any previous ministry experience or skills..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Serve Team Application</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
