"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Send, ShieldCheck } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

export function PrayerBanner() {
  const { openModal } = useModal();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white p-8 md:p-12 shadow-modal overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Background Decorative Cross Graphic */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
            <HeartHandshake className="w-96 h-96 text-white" />
          </div>

          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-accent-blue text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PASTORAL CARE & PRAYER</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              How Can We Pray For You Today?
            </h2>
            <p className="mt-3 text-base text-slate-200 leading-relaxed">
              You are never alone. Whether you are facing illness, family struggle, or seeking guidance, our pastoral prayer team is ready to stand with you in faith.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => openModal("prayer-request")}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-primary-700 font-extrabold text-base px-8 py-4 rounded-xl shadow-glow hover:scale-105 transition-all"
            >
              <Send className="w-5 h-5 text-primary-600" />
              <span>Submit Prayer Request</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
