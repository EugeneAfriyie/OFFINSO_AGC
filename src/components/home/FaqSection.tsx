"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const faqs = [
    {
      id: "faq-1",
      question: "Where is The King's Temple A/G located in Offinso?",
      answer: `We are located at ${siteConfig.address}. Our campus is easily accessible with reserved guest parking near the main entrance.`,
    },
    {
      id: "faq-2",
      question: "What are your Sunday and Midweek service times?",
      answer: "We host 1st Sunday Worship from 9:00 AM – 10:30 AM, 2nd Sunday Service from 11:00 AM – 12:30 PM, and Wednesday Midweek Bible Study from 6:30 PM – 8:00 PM.",
    },
    {
      id: "faq-3",
      question: "What should I wear when attending a service?",
      answer: "Come as you are! At The King's Temple A/G, you will see members wearing traditional Ghanaian attire, suits, business casual, and comfortable casual clothing. You are welcome exactly as you are.",
    },
    {
      id: "faq-4",
      question: "Is there a safe place for my children during service?",
      answer: "Yes! Our King's Kids Ministry provides secure, age-appropriate Bible teaching, songs, and activities for children from nursery to age 12, led by background-checked volunteers.",
    },
    {
      id: "faq-5",
      question: "How can I meet Senior Pastor Collins Ababio or request prayer?",
      answer: `Senior Pastor Collins Ababio and our pastoral team love greeting first-time guests in the welcome lounge right after service. You can also call our pastoral helpline (${siteConfig.phone}) or submit a prayer request online anytime.`,
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-extrabold uppercase tracking-wider border border-primary-100">
            <HelpCircle className="w-3.5 h-3.5 text-primary-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Got Questions? We Have Answers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Everything you need to know about visiting {siteConfig.shortName} in Offinso, Kumasi.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((item) => {
            const isOpen = openFaq === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-slate-50 border-primary-300 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-extrabold text-slate-900">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-primary-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/60 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Footer Callout */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-extrabold text-slate-900">
              Have a question not answered here?
            </h4>
            <p className="text-xs text-slate-600">
              Our pastoral support team in Offinso, Kumasi is always ready to assist you.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm transition-all hover:scale-[1.02] flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Church Office</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
