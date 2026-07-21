"use client";

import React from "react";
import { ModalProvider } from "@/contexts/ModalContext";
import { AudioPlayerProvider } from "@/contexts/AudioPlayerContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <AudioPlayerProvider>
        {children}
      </AudioPlayerProvider>
    </ModalProvider>
  );
}
