"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedBarProps {
  label: string;
  value: string;
  width: number;
  color?: string;
}

export default function AnimatedBar({
  label,
  value,
  width,
  color = "#4a6741",
}: AnimatedBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-bg/70">{label}</span>
        <span className="text-bg font-semibold">{value}</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-4">
        <div
          className="h-4 rounded-full transition-all duration-1500 ease-out"
          style={{
            width: animated ? `${width}%` : "0%",
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
