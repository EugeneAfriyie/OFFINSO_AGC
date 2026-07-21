"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Quote } from "lucide-react";

export function PastoralWelcome() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pastoral Couple Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000"
                alt="Senior Pastors John and Mary Davis"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-card">
                <div className="text-sm font-bold text-body">Pastors John & Mary Davis</div>
                <div className="text-xs text-primary-600 font-semibold">Senior Pastors</div>
              </div>
            </div>

            {/* Decorative Accent Ring */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-100 rounded-3xl -z-10 hidden sm:block" />
          </motion.div>

          {/* Right Column: Welcome Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <Heart className="w-3.5 h-3.5" />
              <span>A WARM WELCOME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight leading-tight">
              We Are So Glad <span className="text-primary-600">You Are Here</span>
            </h2>

            <div className="mt-6 relative pl-6 border-l-4 border-primary-500 my-4">
              <Quote className="w-8 h-8 text-primary-200 absolute -top-3 -left-3 -z-10" />
              <p className="text-lg md:text-xl text-body italic font-medium leading-relaxed">
                "Our heart is to create a vibrant church family where everyone can encounter God's unconditional love, discover true purpose, and find a community to journey with."
              </p>
            </div>

            <p className="text-base text-subtext leading-relaxed mb-8">
              Whether you are walking into a church for the first time in years or seeking a solid spiritual foundation for your family, Assemblies of God Church is a place where you belong. We believe God has a extraordinary plan for your life.
            </p>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-primary-50 hover:bg-primary-100 text-primary-600 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all hover:translate-x-1"
              >
                <span>Read Our Full Story & Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
