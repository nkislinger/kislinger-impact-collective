"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL = "/forest-compressed.mp4";

export default function ServicesHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isMobile]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Video — desktop */}
      {!isMobile && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}

      {/* Solid color fallback — mobile */}
      {isMobile && (
        <div className="absolute inset-0 w-full h-full bg-[#1a2e1a]" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-white animate-fade-up">
          What We Build
        </h1>
        <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-up animate-delay-200">
          Every engagement is tailored. No templates, no shortcuts.
        </p>
      </div>
    </section>
  );
}
