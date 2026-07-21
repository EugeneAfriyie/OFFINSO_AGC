"use client";

import React, { useState } from "react";
import { X, HeartHandshake, CheckCircle2, Lock } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

export function PrayerRequestModal() {
  const { activeModal, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
    isPrivate: true,
  });

  if (activeModal !== "prayer-request") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-modal border border-borderline relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-xl text-subtext hover:bg-canvas transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-body">Prayer Received</h3>
            <p className="mt-2 text-sm text-subtext leading-relaxed">
              Our pastoral prayer team has received your request and is standing in agreement with you in faith.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                closeModal();
              }}
              className="mt-6 w-full bg-primary-600 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>PASTORAL CARE</span>
            </div>
            <h3 className="text-2xl font-extrabold text-body">Submit Prayer Request</h3>
            <p className="text-xs text-subtext mt-1">Our prayer team reads and prays over every submission with love.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-body uppercase mb-1">Your Name (Optional)</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Anonymous or Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-body uppercase mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="For pastoral follow-up"
                  className="w-full px-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-body uppercase mb-1">Prayer Request Details</label>
                <textarea
                  required
                  rows={4}
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  placeholder="Share how we can pray for you..."
                  className="w-full px-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none resize-none"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-canvas border border-borderline flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-body">
                  <Lock className="w-4 h-4 text-primary-600" />
                  <span>Keep this request strictly confidential (Pastors only)</span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.isPrivate}
                  onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
                  className="w-4 h-4 text-primary-600 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm py-4 rounded-xl shadow-md transition-colors"
              >
                SUBMIT PRAYER REQUEST
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
