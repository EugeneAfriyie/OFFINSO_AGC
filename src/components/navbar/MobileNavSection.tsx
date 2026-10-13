"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NavLinkItem } from "./NavLinks";

interface MobileNavSectionProps {
  item: NavLinkItem;
  onCloseMobile: () => void;
}

export function MobileNavSection({ item, onCloseMobile }: MobileNavSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasMegaItems = item.megaItems && item.megaItems.length > 0;

  if (!hasMegaItems) {
    return (
      <Link
        href={item.href}
        onClick={onCloseMobile}
        className="block px-4 py-3 rounded-xl bg-slate-50 hover:bg-primary-50 text-slate-800 font-extrabold text-sm border border-slate-200/80 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-slate-800 font-extrabold text-sm focus:outline-none"
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary-600" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden px-3 pb-3 space-y-1.5 border-t border-slate-200/60 pt-2 bg-white"
          >
            {item.megaItems?.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.href}
                onClick={onCloseMobile}
                className="block p-2.5 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-semibold transition-colors"
              >
                <div className="font-extrabold text-slate-900">{sub.title}</div>
                <div className="text-[11px] text-slate-500 line-clamp-1">{sub.description}</div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
