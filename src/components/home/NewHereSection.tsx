"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Smile, 
  ShieldCheck, 
  Car, 
  Music, 
  Coffee, 
  UserCheck, 
  Heart,
  Calendar
} from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

export function NewHereSection() {
  const { openModal } = useModal();

  const touchpoints = [
    {
      icon: Smile,
      title: "Casual & Welcoming",
      description: "Wear whatever is comfortable for you — from jeans to suit. You'll never be singled out or made to feel awkward.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Kids Check-in",
      description: "Your children are safe with us. We use badge check-ins, clean classrooms, and background-checked volunteers.",
    },
    {
      icon: Car,
      title: "Reserved Guest Parking",
      description: "Follow the signs to reserved visitor parking spaces right near the front main entrance doors.",
    },
    {
      icon: Music,
      title: "Inspiring Worship & Teaching",
      description: "Experience 75 minutes of uplifting modern worship music and practical teaching rooted in the Bible.",
    },
    {
      icon: Coffee,
      title: "Meet the Pastors",
      description: "Join us in the welcome lounge after service for fresh coffee, tea, and a warm casual greeting.",
    },
    {
      icon: UserCheck,
      title: "Host Greeting Option",
      description: "Optionally pre-register to have a designated friendly host meet you at the door and show you around.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>FIRST-TIME GUESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-body tracking-tight">
            What to Expect on <span className="text-primary-600">Your First Visit</span>
          </h2>
          <p className="mt-4 text-base text-subtext">
            We know visiting a new church can feel intimidating. Here is everything you need to know to feel completely relaxed and welcomed.
          </p>
        </div>

        {/* 6 Touchpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {touchpoints.map((tp, idx) => {
            const Icon = tp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-canvas rounded-2xl p-6 border border-borderline hover:border-primary-300 hover:shadow-card hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-body mb-2 group-hover:text-primary-600 transition-colors">
                  {tp.title}
                </h3>
                <p className="text-sm text-subtext leading-relaxed">
                  {tp.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Conversion CTA Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-modal">
          <div>
            <h3 className="text-2xl font-extrabold text-white">Ready to Join Us This Sunday?</h3>
            <p className="text-sm text-slate-200 mt-1">Let us know you're coming and we'll save a seat and a gift for you!</p>
          </div>
          <button
            onClick={() => openModal("plan-visit")}
            className="whitespace-nowrap bg-white hover:bg-slate-100 text-primary-700 font-extrabold text-sm px-8 py-4 rounded-xl shadow-md transition-transform hover:scale-105 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-primary-600" />
            <span>PLAN YOUR VISIT NOW</span>
          </button>
        </div>

      </div>
    </section>
  );
}
