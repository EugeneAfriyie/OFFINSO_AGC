"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin, Timer, ArrowRight, Navigation } from "lucide-react";

export function ServiceQuickBar() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { ...prev, days: Math.max(0, prev.days - 1), hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 md:px-8 -mt-12 md:-mt-16 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Worship Schedules */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all border border-borderline flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-body mb-2">Worship Services</h3>
            <div className="space-y-1.5 text-sm text-subtext">
              <p className="flex justify-between">
                <span className="font-semibold text-body">Sunday Mornings:</span>
                <span className="font-bold text-primary-600">9:00 AM & 11:00 AM</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold text-body">Midweek Bible Study:</span>
                <span>Wed 7:00 PM</span>
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-borderline text-xs font-semibold text-primary-600 flex items-center gap-1">
            <span>Kids & Youth programs active during all services</span>
          </div>
        </div>

        {/* Card 2: Campus Location */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all border border-borderline flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-body mb-2">Campus Location</h3>
            <p className="text-sm text-subtext leading-relaxed mb-3">
              123 Faith Avenue, Offinso Main<br />
              <span className="text-xs text-subtext">Reserved visitor parking near main entrance</span>
            </p>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-transform"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions on Google Maps</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Card 3: Next Service Countdown */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-6 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/10 text-accent-blue flex items-center justify-center mb-4">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Next Sunday Service</h3>
            <div className="grid grid-cols-4 gap-2 my-2 text-center">
              <div className="bg-white/15 backdrop-blur-md rounded-lg p-2">
                <span className="text-xl font-extrabold text-white block">{timeLeft.days}</span>
                <span className="text-[10px] text-slate-200 uppercase tracking-wider">Days</span>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-lg p-2">
                <span className="text-xl font-extrabold text-white block">{timeLeft.hours}</span>
                <span className="text-[10px] text-slate-200 uppercase tracking-wider">Hours</span>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-lg p-2">
                <span className="text-xl font-extrabold text-white block">{timeLeft.minutes}</span>
                <span className="text-[10px] text-slate-200 uppercase tracking-wider">Mins</span>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-lg p-2">
                <span className="text-xl font-extrabold text-white block">{timeLeft.seconds}</span>
                <span className="text-[10px] text-slate-200 uppercase tracking-wider">Secs</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20 text-xs font-medium text-slate-200 flex items-center justify-between">
            <span>Live Stream active on Sunday</span>
            <a href="/watch" className="font-bold text-white hover:underline flex items-center gap-1">
              <span>Watch Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
