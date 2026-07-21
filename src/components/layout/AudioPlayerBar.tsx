"use client";

import React, { useRef, useEffect } from "react";
import { Play, Pause, X, Volume2, Mic } from "lucide-react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

export function AudioPlayerBar() {
  const { activeTrack, isPlaying, togglePlay, pauseTrack } = useAudioPlayer();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, activeTrack]);

  if (!activeTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-800 text-white border-t border-navy-900 shadow-modal py-3 px-4 md:px-8 animate-in slide-in-from-bottom duration-300">
      <audio ref={audioRef} src={activeTrack.audioUrl} />
      
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* Track Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center flex-shrink-0">
            <Mic className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-white truncate">{activeTrack.title}</div>
            <div className="text-xs text-slate-300 truncate">{activeTrack.speaker} — <span className="text-accent-blue">{activeTrack.series}</span></div>
          </div>
        </div>

        {/* Play Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center shadow-md transition-transform active:scale-95"
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5" />}
          </button>

          <button
            onClick={pauseTrack}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close audio player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
