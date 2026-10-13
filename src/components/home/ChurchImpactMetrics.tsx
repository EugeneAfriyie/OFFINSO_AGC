"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion";
import { Users, Calendar, ShieldCheck, Flame } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

interface MetricItem {
  id: string;
  targetNum: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  desc: string;
  badge: string;
  badgeColor: string;
  glowColor: string;
  accentColor: string;
  icon: React.ElementType;
}

const METRICS: MetricItem[] = [
  {
    id: "community",
    targetNum: 2400,
    decimals: 0,
    suffix: "+",
    label: "Kingdom Community",
    desc: "Active worshippers across Offinso sanctuary & digital broadcast",
    badge: "GLOBAL REACH",
    badgeColor: "bg-blue-50 text-primary-600 border-blue-100",
    glowColor: "rgba(30, 115, 232, 0.12)",
    accentColor: "#1E73E8",
    icon: Users,
  },
  {
    id: "tenure",
    targetNum: 5,
    decimals: 0,
    suffix: "+ Years",
    label: "Faith Tenure",
    desc: "Founded April 9, 2019 under Senior Pastor Collins Ababio",
    badge: "PROVEN IMPACT",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/80",
    glowColor: "rgba(212, 175, 55, 0.14)",
    accentColor: "#D4AF37",
    icon: Calendar,
  },
  {
    id: "truths",
    targetNum: 16,
    decimals: 0,
    suffix: " Truths",
    label: "Biblical Foundation",
    desc: "Uncompromised Assemblies of God fundamental gospel doctrines",
    badge: "DOCTRINAL PURITY",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    glowColor: "rgba(16, 185, 129, 0.12)",
    accentColor: "#10B981",
    icon: ShieldCheck,
  },
  {
    id: "celebrations",
    targetNum: 2,
    decimals: 0,
    suffix: " Gatherings",
    label: "Sunday Celebrations",
    desc: "9:00 AM vibrant praise & 11:00 AM spirit-filled worship weekly",
    badge: "WEEKLY WORSHIP",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    glowColor: "rgba(15, 23, 42, 0.08)",
    accentColor: "#0F172A",
    icon: Flame,
  },
];

// Fluid Eased Animated Counter Component
function AnimatedCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  isInView,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(
    `${prefix}${decimals > 0 ? "0." + "0".repeat(decimals) : "0"}${suffix}`
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const controls = animate(0, target, {
      duration: 2.2,
      ease: CUBIC_EASE,
      onUpdate: (latest) => {
        if (decimals === 0) {
          setDisplayValue(`${prefix}${Math.floor(latest).toLocaleString()}${suffix}`);
        } else {
          setDisplayValue(`${prefix}${latest.toFixed(decimals)}${suffix}`);
        }
      },
    });

    return () => controls.stop();
  }, [isInView, target, decimals, prefix, suffix]);

  return <span className="tabular-nums font-extrabold">{displayValue}</span>;
}

// Interactive 3D Perspective Card with Cursor-Spotlight Glow
function PerspectiveMetricCard({
  item,
  index,
}: {
  item: MetricItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Spring physics for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseClientX = e.clientX - rect.left;
    const mouseClientY = e.clientY - rect.top;

    setMousePos({ x: mouseClientX, y: mouseClientY });

    const width = rect.width;
    const height = rect.height;

    const xPct = mouseClientX / width - 0.5;
    const yPct = mouseClientY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const IconComponent = item.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.96 }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: CUBIC_EASE,
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(30,115,232,0.12)] hover:border-slate-300 transition-shadow duration-300 flex flex-col justify-between overflow-hidden group cursor-default"
    >
      {/* Dynamic Cursor-Following Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${item.glowColor}, transparent 80%)`,
        }}
      />

      {/* Card Header: Icon & Category Badge */}
      <div className="flex items-center justify-between gap-3 relative z-10 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
          style={{ backgroundColor: `${item.accentColor}14` }}
        >
          <IconComponent className="w-5 h-5" style={{ color: item.accentColor }} />
        </div>

        <span
          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
        >
          {item.badge}
        </span>
      </div>

      {/* Main Metric Value & Label */}
      <div className="relative z-10 space-y-1 my-2">
        <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight flex items-baseline gap-1">
          <AnimatedCounter
            target={item.targetNum}
            decimals={item.decimals}
            prefix={item.prefix}
            suffix={item.suffix}
            isInView={isInView}
          />
        </div>
        <div className="text-sm font-bold text-slate-900">{item.label}</div>
      </div>

      {/* Supporting Narrative */}
      <div className="relative z-10 pt-3 border-t border-slate-100 text-xs text-slate-500 font-normal leading-relaxed">
        {item.desc}
      </div>
    </motion.div>
  );
}

export function ChurchImpactMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden">
      {/* Ambient background blur glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[260px] bg-gradient-to-r from-blue-100/50 via-amber-100/40 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: CUBIC_EASE }}
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>Kingdom Growth & Verified Impact</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold">{siteConfig.shortName}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: CUBIC_EASE }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight"
          >
            Rooted in Truth. Thriving in Grace.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: CUBIC_EASE }}
            className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed"
          >
            Since 2019, God has expanded our territory in Offinso through biblical teaching, authentic discipleship, and vibrant Pentecostal worship.
          </motion.p>
        </div>

        {/* 4-Column Perspective Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, idx) => (
            <PerspectiveMetricCard key={metric.id} item={metric} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
