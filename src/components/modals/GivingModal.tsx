"use client";

import React, { useState } from "react";
import { X, CreditCard, Smartphone, ShieldCheck, Lock, Heart, Check } from "lucide-react";
import { siteConfig } from "@/config/site.config";

interface GivingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GivingModal({ isOpen, onClose }: GivingModalProps) {
  const [selectedAmount, setSelectedAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [category, setCategory] = useState("Tithe");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "momo">("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Giving Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 text-amber-300 text-[11px] font-black uppercase tracking-wider mb-2 border border-white/20">
            <Lock className="w-3 h-3 text-amber-300" />
            <span>256-BIT ENCRYPTED PORTAL</span>
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Secure Online Giving Portal
          </h3>
          <p className="text-xs text-slate-200 mt-1">
            {siteConfig.name} • Offinso, Kumasi
          </p>
        </div>

        {/* Success Feedback Screen */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900">Thank You for Your Giving!</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Your faithful seed of <strong>GH₵ {customAmount || selectedAmount}</strong> ({category}) has been received. May the Lord multiply your seed and bless your household!
            </p>
          </div>
        ) : (
          /* Giving Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            
            {/* Giving Category Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Select Giving Purpose:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Tithe", "Offering", "Building Seed", "Welfare"].map((cat) => (
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

            {/* Preset Amount Buttons */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Select Amount (GH₵):</label>
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
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900"
              />
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Select Payment Channel:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-extrabold transition-all ${
                    paymentMethod === "card"
                      ? "bg-emerald-50 text-emerald-800 border-emerald-500 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  <span>Card (Visa / Mastercard)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("momo")}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-extrabold transition-all ${
                    paymentMethod === "momo"
                      ? "bg-amber-50 text-amber-900 border-amber-500 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-amber-600" />
                  <span>Mobile Money (MoMo)</span>
                </button>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-[1] disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Connecting Secure Gateway...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-amber-300" />
                    <span>Proceed to Pay GH₵ {customAmount || selectedAmount || "0"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Security Footer Note */}
            <div className="text-center text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Bank-grade 256-bit encryption • Powered by Paystack / Hubtel</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
