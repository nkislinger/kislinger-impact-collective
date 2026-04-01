"use client";

import { useState } from "react";

type Mode = "direct" | "systems";

interface OutputData {
  reach: string;
  structure: string;
  horizon: string;
  roi: string;
}

function formatCurrency(val: number): string {
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(1)}M`;
  if (val >= 1_000) return `$${(val / 1_000).toFixed(0)}K`;
  return `$${val}`;
}

function getOutputs(amount: number, mode: Mode): OutputData {
  if (mode === "direct") {
    const people = Math.round(amount / 1200);
    return {
      reach: `~${people.toLocaleString()} individuals served`,
      structure: "Program grants, 1–3 year terms",
      horizon: "1–3 years",
      roi: "~1.1x per dollar invested",
    };
  }
  const populationReach =
    amount >= 1_000_000
      ? "State or national policy impact"
      : amount >= 250_000
        ? "Regional systems change"
        : "Local coalition building";
  return {
    reach: populationReach,
    structure: "Advocacy, research, field building",
    horizon: "20–45 years (median)",
    roi: "Up to $100 per $1 invested",
  };
}

export default function GivingCalculator() {
  const [amount, setAmount] = useState(500_000);
  const [mode, setMode] = useState<Mode>("direct");

  const outputs = getOutputs(amount, mode);

  const outputCards: { label: string; key: keyof OutputData }[] = [
    { label: "Impact Reach", key: "reach" },
    { label: "Grant Structure", key: "structure" },
    { label: "Time Horizon", key: "horizon" },
    { label: "ROI Estimate", key: "roi" },
  ];

  return (
    <div className="bg-text rounded-sm p-8 md:p-12">
      <h3 className="font-serif text-3xl md:text-4xl text-bg font-light mb-2">
        Giving Architecture Calculator
      </h3>
      <p className="text-bg/60 text-sm mb-10">
        See how allocation strategy changes impact.
      </p>

      {/* Slider */}
      <div className="mb-8">
        <div className="flex justify-between text-bg/70 text-sm mb-2">
          <span>Annual giving budget</span>
          <span className="font-serif text-2xl text-accent-light font-semibold">
            {formatCurrency(amount)}
          </span>
        </div>
        <input
          type="range"
          min={50_000}
          max={10_000_000}
          step={50_000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between text-bg/40 text-xs mt-1">
          <span>$50K</span>
          <span>$10M</span>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex gap-2 mb-10">
        <button
          onClick={() => setMode("direct")}
          className={`px-5 py-2 text-sm tracking-wider uppercase transition-colors duration-200 ${
            mode === "direct"
              ? "bg-accent text-white"
              : "bg-white/10 text-bg/60 hover:bg-white/15"
          }`}
        >
          Direct Service
        </button>
        <button
          onClick={() => setMode("systems")}
          className={`px-5 py-2 text-sm tracking-wider uppercase transition-colors duration-200 ${
            mode === "systems"
              ? "bg-accent text-white"
              : "bg-white/10 text-bg/60 hover:bg-white/15"
          }`}
        >
          Systems Change
        </button>
      </div>

      {/* Output cards */}
      <div className="grid grid-cols-2 gap-4">
        {outputCards.map((card) => (
          <div key={card.key} className="bg-white/5 p-5 border border-white/10">
            <p className="text-bg/50 text-xs tracking-widest uppercase mb-2">
              {card.label}
            </p>
            <p className="text-bg text-sm font-semibold leading-snug">
              {outputs[card.key]}
            </p>
          </div>
        ))}
      </div>

      <p className="text-bg/40 text-xs mt-6 italic">
        Estimates directional, based on Bridgespan Group (2017) and Atlantic
        Philanthropies (2018) research.
      </p>
    </div>
  );
}
