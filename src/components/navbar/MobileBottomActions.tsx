"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useModal } from "@/contexts/ModalContext";

export function MobileBottomActions() {
  const { openModal } = useModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-borderline py-2.5 px-4 sm:hidden flex items-center justify-around shadow-modal">
      <Link href="/contact" className="flex flex-col items-center text-subtext hover:text-primary-600 text-[10px] font-semibold">
        <MapPin className="w-5 h-5 text-primary-600 mb-0.5" />
        <span>Location</span>
      </Link>

      <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex flex-col items-center text-subtext hover:text-primary-600 text-[10px] font-semibold">
        <Phone className="w-5 h-5 text-primary-600 mb-0.5" />
        <span>Call Us</span>
      </a>

      <button 
        onClick={() => openModal("plan-visit")}
        className="bg-primary-600 text-white text-[11px] font-extrabold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Visit Us</span>
      </button>
    </div>
  );
}
