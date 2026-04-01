"use client";

import { useState } from "react";

interface FootnoteProps {
  id: number;
  source: string;
}

export default function Footnote({ id, source }: FootnoteProps) {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block">
      <sup
        className="text-accent cursor-help font-bold text-xs ml-0.5"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
      >
        {id}
      </sup>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-text text-bg text-xs rounded shadow-lg whitespace-nowrap z-50 max-w-xs text-center">
          {source}
        </span>
      )}
    </span>
  );
}
