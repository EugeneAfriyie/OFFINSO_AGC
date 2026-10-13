"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Smartphone, Building2, CreditCard, ShieldCheck, Copy, Check, Lock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { GivingModal } from "@/components/modals/GivingModal";

export function GivingSection() {
  const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [category, setCategory] = useState("Tithe");

  const [copiedMoMo, setCopiedMoMo] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const copyToClipboard = (text: string, type: "momo" | "bank") => {
    navigator.clipboard.writeText(text);
    if (type === "momo") {
      setCopiedMoMo(true);
      setTimeout(() => setCopiedMoMo(false), 2500);
    } else {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2500);
    }
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Giving Vision & Manual Copy Buttons (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>ONLINE GIVING & TITHE PORTAL</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Partner With Us in Kingdom Ministry
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Your faithful tithes, offerings, and seeds empower us to transform lives, support families, and spread the gospel across Offinso, Kumasi, and Ghana.
              </p>

              {/* Manual MoMo & Bank Copy Bar */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Prefer Manual MoMo or Bank Transfer?
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => copyToClipboard(siteConfig.phone, "momo")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-xs shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-amber-600" />
                    <span>{copiedMoMo ? "MoMo Copied!" : `Copy MoMo (${siteConfig.phone})`}</span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(siteConfig.name, "bank")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-xs shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-primary-600" />
                    <span>{copiedBank ? "Bank Details Copied!" : "Copy Bank Details"}</span>
                  </button>
                </div>
              </div>

              {/* Scripture Promise */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                <p className="text-xs font-bold text-slate-700 italic">
                  "Give, and it will be given to you. A good measure, pressed down, shaken together..."
                </p>
                <div className="text-[10px] font-black text-primary-600 uppercase tracking-wider">— LUKE 6:38</div>
              </div>

            </div>

            {/* Right Column: Clean White Interactive Giving Portal Card (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-5">
              
              {/* Header Pill */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                  <CreditCard className="w-3.5 h-3.5 text-primary-600" />
                  <span>INSTANT ONLINE PAYMENT</span>
                </span>
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>256-Bit Encrypted</span>
                </span>
              </div>

              {/* Category Purpose Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-900 block">Select Purpose:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Tithe", "Offering", "Building Seed", "Missions"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`py-2 px-2 rounded-xl text-xs font-extrabold border transition-all ${
                        category === cat
                          ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-900 block">Select Amount (GH₵):</label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {["20", "50", "100", "250"].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`py-2.5 rounded-xl text-xs font-black border transition-all ${
                        selectedAmount === amt && !customAmount
                          ? "bg-amber-400 text-slate-950 border-amber-400 shadow-sm"
                          : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      GH₵ {amt}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Or Enter Custom Amount (GH₵)..."
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount("");
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Primary Action Button */}
              <button
                onClick={() => setIsGivingModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all hover:scale-[1.01]"
              >
                <Lock className="w-4 h-4 text-amber-300" />
                <span>Give GH₵ {customAmount || selectedAmount || "100"} Online Now</span>
              </button>

              {/* Supported Payment Channels */}
              <div className="text-center text-[11px] text-slate-400 font-medium">
                Supports Visa • Mastercard • MTN MoMo • Telecel Cash • AT Money
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Custom Online Giving Modal */}
      <GivingModal
        isOpen={isGivingModalOpen}
        onClose={() => setIsGivingModalOpen(false)}
      />
    </>
  );
}
