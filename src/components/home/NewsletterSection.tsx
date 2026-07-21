"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Lock } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-canvas border-t border-borderline">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-borderline shadow-card text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-body">
            Stay Connected Throughout the Week
          </h3>
          <p className="mt-2 text-sm text-subtext max-w-lg mx-auto">
            Receive weekly pastoral encouragement, sermon discussion guides, and upcoming church event updates delivered straight to your inbox.
          </p>

          {subscribed ? (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Thank you for subscribing! Check your email for welcome updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3.5 rounded-xl border border-borderline bg-white text-sm text-body focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <div className="mt-4 text-[11px] text-subtext flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3 text-subtext" />
            <span>We respect your privacy. Zero spam. Unsubscribe at any time.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
