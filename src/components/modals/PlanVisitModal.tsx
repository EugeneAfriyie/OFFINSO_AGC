"use client";

import React, { useState } from "react";
import { X, Calendar, CheckCircle2, User, Mail, Phone, Users, ShieldCheck } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

export function PlanVisitModal() {
  const { activeModal, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "9:00 AM",
    kidsCount: "0",
    hostRequested: true,
  });

  if (activeModal !== "plan-visit") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-modal border border-borderline relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
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
            <h3 className="text-2xl font-extrabold text-body">You're All Set!</h3>
            <p className="mt-2 text-sm text-subtext leading-relaxed">
              We have saved a place and a special welcome gift for you this Sunday at <strong className="text-body">{formData.service}</strong>.
            </p>
            <p className="mt-2 text-xs text-primary-600 font-semibold">
              Check your email ({formData.email}) for host meeting details & directions.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                closeModal();
              }}
              className="mt-6 w-full bg-primary-600 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>GUEST CONCIERGE</span>
            </div>
            <h3 className="text-2xl font-extrabold text-body">Plan Your Sunday Visit</h3>
            <p className="text-xs text-subtext mt-1">Let us know you're coming and we'll have a friendly host greet you!</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-body uppercase mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-subtext absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-body uppercase mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-subtext absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-body uppercase mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-subtext absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-body uppercase mb-1">Preferred Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white"
                  >
                    <option value="9:00 AM">Sunday 9:00 AM</option>
                    <option value="11:00 AM">Sunday 11:00 AM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-body uppercase mb-1">Number of Kids</label>
                  <select
                    value={formData.kidsCount}
                    onChange={(e) => setFormData({ ...formData, kidsCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-borderline text-sm text-body focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white"
                  >
                    <option value="0">No Kids</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3+">3+ Children</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-canvas border border-borderline flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-body">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Pair me with a friendly host greeting</span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.hostRequested}
                  onChange={(e) => setFormData({ ...formData, hostRequested: e.target.checked })}
                  className="w-4 h-4 text-primary-600 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm py-4 rounded-xl shadow-md transition-colors mt-2"
              >
                SUBMIT VISIT RESERVATION
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
