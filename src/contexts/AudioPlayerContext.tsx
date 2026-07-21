"use client";

import React, { createContext, useContext, useState } from "react";

export interface SermonTrack {
  id: string;
  title: string;
  speaker: string;
  series: string;
  audioUrl: string;
}

interface AudioPlayerContextType {
  activeTrack: SermonTrack | null;
  isPlaying: boolean;
  playTrack: (track: SermonTrack) => void;
  pauseTrack: () => void;
  togglePlay: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTrack, setActiveTrack] = useState<SermonTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playTrack = (track: SermonTrack) => {
    setActiveTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => setIsPlaying(false);
  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <AudioPlayerContext.Provider value={{ activeTrack, isPlaying, playTrack, pauseTrack, togglePlay }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
  }
  return context;
};
