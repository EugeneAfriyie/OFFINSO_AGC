"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Search, BookOpen, Calendar, Users, ArrowRight } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

export function SearchModal() {
  const { activeModal, closeModal } = useModal();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (activeModal === "search") {
          closeModal();
        } else {
          // Trigger search modal
          window.dispatchEvent(new CustomEvent("open-search"));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, closeModal]);

  if (activeModal !== "search") return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-900/70 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full p-4 shadow-modal border border-borderline relative overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="relative flex items-center border-b border-borderline pb-3">
          <Search className="w-5 h-5 text-subtext absolute left-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sermons, events, ministries, or topics..."
            className="w-full pl-10 pr-10 py-2.5 text-base text-body focus:outline-none bg-transparent"
          />
          <button
            onClick={closeModal}
            className="p-1 rounded-lg text-subtext hover:bg-canvas"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Links Suggestions */}
        <div className="p-4 space-y-3">
          <div className="text-xs font-bold text-subtext uppercase tracking-wider">Quick Suggestions</div>
          
          <div className="space-y-1">
            <Link
              href="/sermons"
              onClick={closeModal}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-primary-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-body group-hover:text-primary-600">Browse Sermon Library</span>
              </div>
              <ArrowRight className="w-4 h-4 text-subtext group-hover:text-primary-600" />
            </Link>

            <Link
              href="/events"
              onClick={closeModal}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-primary-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-body group-hover:text-primary-600">Upcoming Church Events</span>
              </div>
              <ArrowRight className="w-4 h-4 text-subtext group-hover:text-primary-600" />
            </Link>

            <Link
              href="/ministries"
              onClick={closeModal}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-primary-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-body group-hover:text-primary-600">Ministries Directory (11 Departments)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-subtext group-hover:text-primary-600" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
