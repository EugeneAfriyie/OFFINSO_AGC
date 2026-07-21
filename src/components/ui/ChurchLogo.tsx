"use client";

import React from "react";

interface ChurchLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ChurchLogo({ className = "", showText = true, size = "md" }: ChurchLogoProps) {
  const iconDimensions = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }[size];

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      
      {/* Premium Metallic Shield Emblem */}
      <div className={`relative ${iconDimensions} rounded-2xl bg-gradient-to-br from-navy-900 via-primary-950 to-primary-900 p-0.5 shadow-[0_4px_24px_rgba(37,99,235,0.30)] group-hover:shadow-[0_8px_32px_rgba(37,99,235,0.45)] group-hover:scale-105 transition-all duration-300`}>
        
        {/* Inner Golden Gradient Border */}
        <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-amber-400 via-amber-200 to-amber-500 p-[1.5px]">
          <div className="w-full h-full rounded-[12px] bg-gradient-to-b from-primary-900 via-primary-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
            
            {/* Subtle Radiant Background Rays */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent"></div>

            {/* Custom Vector Crown & Temple Cross SVG */}
            <svg 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/center" 
              className="w-full h-full p-1.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            >
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE68A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <linearGradient id="blueGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>

              {/* Temple Columns / Base Arch */}
              <path 
                d="M10 38H38M14 38V28M34 38V28M20 38V24M28 38V24" 
                stroke="url(#goldGrad)" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              
              {/* Outer Royal Arch */}
              <path 
                d="M12 28C12 20 17 15 24 15C31 15 36 20 36 28" 
                stroke="url(#blueGlow)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />

              {/* Central Holy Cross */}
              <path 
                d="M24 10V28M19 16H29" 
                stroke="url(#goldGrad)" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Crown Peaks */}
              <path 
                d="M15 14L18 10L24 13L30 10L33 14" 
                stroke="url(#goldGrad)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Glowing Spirit Flame Dot */}
              <circle cx="24" cy="8" r="2" fill="#FDE68A" className="animate-pulse" />
            </svg>

          </div>
        </div>

        {/* Outer Corner Glow Accent */}
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white shadow-sm"></span>
      </div>

      {/* Typography Lockup */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-navy-800 via-primary-800 to-primary-600 leading-none group-hover:from-primary-600 group-hover:to-primary-700 transition-colors">
              THE KING'S TEMPLE
            </span>
          </div>
          <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-primary-50 via-sky-50 to-primary-50 text-primary-700 text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase border border-primary-100/90 shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse"></span>
            <span>Assemblies of God • Offinso, Kumasi</span>
          </div>
        </div>
      )}

    </div>
  );
}
