"use client";

import { useState, type ReactNode } from "react";
import SourceTag from "./SourceTag";

interface BarData {
  label: string;
  value: number;
  max: number;
  color: string;
}

interface SectorPanelProps {
  title: string;
  stat: string;
  source: string;
  children: ReactNode;
  bars: BarData[];
}

export default function SectorPanel({
  title,
  stat,
  source,
  children,
  bars,
}: SectorPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-bg-card border border-border-light p-6 md:p-8 hover:shadow-sm transition-shadow duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4"
      >
        <div>
          <p className="font-serif text-4xl md:text-5xl text-accent font-light">
            {stat}
          </p>
          <h3 className="font-serif text-xl md:text-2xl text-text mt-2">
            {title}
          </h3>
          <SourceTag label={source} />
        </div>
        <span className="text-text-light text-2xl mt-2 shrink-0 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "none" }}>
          +
        </span>
      </button>

      {open && (
        <div className="mt-6 pt-6 border-t border-border-light space-y-4 text-text-muted text-sm leading-relaxed">
          {children}

          {/* Bar chart */}
          <div className="mt-6 space-y-3">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-text-muted mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">${bar.value}B</span>
                </div>
                <div className="w-full bg-border-light rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{
                      width: `${(bar.value / bar.max) * 100}%`,
                      backgroundColor: bar.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
