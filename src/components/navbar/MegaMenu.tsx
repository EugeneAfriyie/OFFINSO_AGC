"use client";

import React from "react";
import Link from "next/link";
import { Crown } from "lucide-react";
import { MegaMenuItem } from "./NavLinks";

interface MegaMenuProps {
  type: "about" | "ministries" | "media";
  items: MegaMenuItem[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClose: () => void;
}

export function MegaMenu({ type, items, onMouseEnter, onMouseLeave, onClose }: MegaMenuProps) {
  const getHeaderTitle = () => {
    switch (type) {
      case "about":
        return "About The King's Temple";
      case "ministries":
        return "Our Ministry Departments";
      case "media":
        return "Sermons & Media Hub";
      default:
        return "Explore";
    }
  };

  const isGrid = type === "ministries";

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[92vw] max-w-4xl z-50 animate-fadeIn"
    >
      {/* Invisible Hover Bridge */}
      <div className="absolute top-0 left-0 right-0 h-3" />

      {/* Floating Card Container */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8">
        
        {/* Header Pill */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <span className="text-xs font-black uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-100 flex items-center gap-1.5">
            <Crown className="w-3.5 h-3.5 text-primary-600" />
            <span>{getHeaderTitle()}</span>
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            The King's Temple A/G • Offinso, Kumasi
          </span>
        </div>

        {/* Grid vs List Layout */}
        <div className={`grid gap-4 ${isGrid ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="p-4 rounded-2xl bg-slate-50/70 hover:bg-primary-50/60 border border-slate-100 hover:border-primary-200 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-primary-600 flex items-center justify-center font-bold shadow-sm border border-slate-200/80 group-hover:bg-primary-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h4>
                    {item.badge && (
                      <span className="text-[9px] font-black text-amber-700 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
