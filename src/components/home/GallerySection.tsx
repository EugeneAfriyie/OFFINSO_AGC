"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";

export function GallerySection() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
      alt: "Congregational Worship Service",
      caption: "Sunday Morning Worship",
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      alt: "Baptism Service Celebration",
      caption: "Water Baptism Celebrations",
    },
    {
      src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
      alt: "Children Smiling in Sunday School",
      caption: "Kids Ministry Joy",
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
      alt: "Youth Summer Retreat Campfire",
      caption: "Youth Summer Camp",
    },
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
      alt: "Community Outreach Volunteers",
      caption: "Community Food Drive",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      alt: "Post-Service Coffee Fellowship",
      caption: "Sunday Morning Fellowship",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>CHURCH LIFE IN PHOTOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-body tracking-tight">
              Vibrant Fellowship & <span className="text-primary-600">Community</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-bold text-sm text-primary-600 hover:text-primary-700 hover:underline"
          >
            <span>Explore Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-subtle group border border-borderline"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold">{photo.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
