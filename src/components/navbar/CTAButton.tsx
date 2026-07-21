"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

interface CTAButtonProps {
  className?: string;
  fullWidth?: boolean;
}

export function CTAButton({ className = "", fullWidth = false }: CTAButtonProps) {
  const { openModal } = useModal();

  return (
    <button
      onClick={() => openModal("plan-visit")}
      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all border border-white/20 ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <Calendar className="w-4 h-4 text-amber-300" />
      <span>Plan Your Visit</span>
    </button>
  );
}
