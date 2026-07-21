"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";

export function LifeStoriesSection() {
  const stories = [
    {
      quote: "Moving to a new city was overwhelming, but the moment we walked through the doors here, we found a genuine family. Our children love their Sunday school teachers!",
      author: "The Jenkins Family",
      role: "Members for 3 years",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
    {
      quote: "Through the youth ministry and small groups, I found true purpose and a personal relationship with Jesus. This church gave me direction and lifelong friends.",
      author: "Marcus T.",
      role: "Young Adult Leader",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
      quote: "In my hardest personal season, the pastoral team and prayer ministry stood by me with overwhelming love and support. I experienced God's peace in a real way.",
      author: "Elena R.",
      role: "Worship Team Member",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section className="py-24 bg-canvas border-t border-borderline">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>TRANSFORMED LIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-body tracking-tight">
            Life Stories of <span className="text-primary-600">Faith & Hope</span>
          </h2>
          <p className="mt-4 text-base text-subtext">
            Read how God is actively restoring lives, strengthening families, and building community.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-borderline shadow-card hover:shadow-hover hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-primary-300 mb-4" />
                <p className="text-sm text-body italic leading-relaxed mb-6">
                  "{story.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-borderline">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-100">
                  <Image
                    src={story.avatar}
                    alt={story.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-body">{story.author}</div>
                  <div className="text-xs text-primary-600 font-semibold">{story.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
