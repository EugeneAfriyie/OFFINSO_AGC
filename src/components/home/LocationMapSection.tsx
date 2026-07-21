"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Navigation, Phone, Mail, Clock, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function LocationMapSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
            <MapPin className="w-3.5 h-3.5 text-primary-600" />
            <span>CAMPUS LOCATION & MAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Find Your Way to The King's Temple A/G
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Conveniently located at {siteConfig.address} with reserved parking for all guests.
          </p>
        </div>

        {/* 2-Column Map & Directions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Campus Info & Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>OFFINSO CATHEDRAL CAMPUS</span>
              </div>

              {/* Address Lockup */}
              <div className="space-y-2">
                <div className="text-xs font-extrabold text-primary-600 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  <span>Physical Address</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {siteConfig.address}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Ashanti Region, Ghana
                </p>
              </div>

              {/* Contact Meta */}
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Phone Helpline:</span>
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-slate-900 font-bold hover:text-primary-600">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Email Enquiries:</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-900 font-bold hover:text-primary-600">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Sunday Worship:</span>
                    <span className="text-slate-900 font-bold">1st Service: 9:00 AM | 2nd Service: 11:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Guest Parking Reassurance */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Reserved Guest Parking Available on Arrival</span>
              </div>
            </div>

            {/* GPS Navigation Action */}
            <div className="pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Open in Google Maps GPS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden min-h-[400px] relative">
            <iframe
              className="w-full h-full min-h-[400px] border-0"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126600.0!2d-1.6500!3d6.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJOIDHCsDM5JzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh`}
              loading="lazy"
              title="The King's Temple Assemblies of God Offinso Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
