"use client";

import { useState } from "react";

interface Source {
  id: number;
  author: string;
  year: string;
  title: string;
  url: string;
}

const sources: Source[] = [
  { id: 1, author: "Giving USA", year: "2025", title: "Annual Report on Philanthropy", url: "https://givingusa.org" },
  { id: 2, author: "Chronicle of Philanthropy", year: "2024", title: "DAF Assets Soar 30% to $326 Billion", url: "https://philanthropy.com/news/daf-assets-soar-30-to-326-billion" },
  { id: 3, author: "CBPP", year: "2025", title: "SNAP Cuts in Reconciliation Bill", url: "https://cbpp.org" },
  { id: 4, author: "Mindful Philanthropy", year: "2024", title: "Mental Health Philanthropy Report", url: "https://mindfulphilanthropy.org/resources" },
  { id: 5, author: "Bridgespan Group", year: "2017", title: "Audacious Philanthropy: Case Studies", url: "https://bridgespan.org/insights/audacious-philanthropy-case-studies" },
  { id: 6, author: "Atlantic Philanthropies", year: "2018", title: "Catalytic Philanthropy: Investing in Policy & Advocacy", url: "https://atlanticphilanthropies.org/news/catalytic-philanthropy-investing-policy-advocacy" },
  { id: 7, author: "CAP", year: "2025", title: "Medicaid Cuts Analysis", url: "https://americanprogress.org" },
  { id: 8, author: "Chronicle of Philanthropy", year: "2025", title: "One-Third of Nonprofits Losing Government Funding", url: "https://philanthropy.com" },
  { id: 9, author: "Grants Plus", year: "2025", title: "Education Funding Gap Multiplier", url: "https://grantsplus.com" },
  { id: 10, author: "STAT News", year: "2025", title: "SAMHSA Lost Half Its Staff and ~$2B in Grants", url: "https://statnews.com" },
  { id: 11, author: "HRSA", year: "2025", title: "Mental Health Professional Shortage Areas", url: "https://bhw.hrsa.gov" },
  { id: 12, author: "ExcelinEd", year: "2026", title: "Phone-Free School Policies Impact 21.7M Students", url: "https://excelinedinaction.org" },
  { id: 13, author: "Climate Policy Initiative", year: "2024", title: "Global Landscape of Climate Finance", url: "https://climatepolicyinitiative.org" },
  { id: 14, author: "FAO", year: "2024", title: "Hidden Costs of Agrifood Systems: $10-12T Annually", url: "https://fao.org" },
  { id: 15, author: "Rockefeller Foundation", year: "2026", title: "Food Is Medicine Could Unlock $45B for States", url: "https://prnewswire.com/news-releases/new-rockefeller-foundation-research-finds-food-is-medicine" },
  { id: 16, author: "Harvard/Stanford/Dartmouth", year: "2025", title: "Education Recovery Scorecard", url: "https://educationrecoveryscorecard.org" },
  { id: 17, author: "The 74 Million", year: "2025", title: "33% of 8th Graders Below NAEP Basic", url: "https://the74million.org" },
  { id: 18, author: "Urban Institute", year: "2025", title: "NSF Canceled 1,574 Grants Totaling $1.1B", url: "https://urban.org" },
  { id: 19, author: "EdWeek", year: "2026", title: "$12B in School Funding Disruptions Year One", url: "https://edweek.org" },
  { id: 20, author: "Philanthropy News Digest", year: "2025", title: "$3B+ Mobilized for AI & Social Impact", url: "https://philanthropynewsdigest.org" },
  { id: 21, author: "Fast Forward", year: "2025", title: "AI for Social Impact Report", url: "https://ffwd.org" },
  { id: 22, author: "Common Sense Media", year: "2025", title: "Major AI Chatbots Unsafe for Teens in 32% of Scenarios", url: "https://commonsensemedia.org/press-releases/common-sense-media-finds-major-ai-chatbots-unsafe" },
  { id: 23, author: "Bridgespan Group", year: "2023", title: "Field Catalysts: Nonprofit Sector Builders", url: "https://bridgespan.org" },
  { id: 24, author: "GEO", year: "2025", title: "Grantmaking Study 2025", url: "https://grantmakingstudy2025.geofunders.org" },
  { id: 25, author: "Bank of America Private Bank", year: "2024", title: "Family Office Report", url: "https://privatebank.bankofamerica.com/articles/family-office-report" },
  { id: 26, author: "Medscape", year: "2025", title: "Physician Burnout & Mental Health", url: "https://medscape.com" },
  { id: 27, author: "SAMHSA", year: "2025", title: "Substance Abuse and Mental Health Services Administration Budget", url: "https://samhsa.gov" },
  { id: 28, author: "National Council for Mental Wellbeing", year: "2024", title: "Access to Care Report", url: "https://thenationalcouncil.org" },
  { id: 29, author: "Bridgespan Group", year: "2017", title: "How Philanthropy Can Overcome Its Biases Against Advocacy", url: "https://bridgespan.org" },
  { id: 30, author: "USDA ERS", year: "2024", title: "Food Security in the United States", url: "https://ers.usda.gov" },
  { id: 31, author: "NCES", year: "2025", title: "National Assessment of Educational Progress", url: "https://nces.ed.gov" },
  { id: 32, author: "Philanthropy Roundtable", year: "2025", title: "Education Philanthropy Report", url: "https://philanthropyroundtable.org" },
  { id: 33, author: "Current AI", year: "2025", title: "$400M Fund for AI Social Impact", url: "https://current.ai" },
  { id: 34, author: "Humanity AI", year: "2025", title: "$500M Initiative", url: "https://humanityai.org" },
  { id: 35, author: "NextLadder Ventures", year: "2025", title: "$1B Impact Fund", url: "https://nextladder.com" },
];

export default function SourcesAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="font-serif text-xl text-text">
          Sources &amp; References ({sources.length})
        </span>
        <span
          className="text-text-light text-xl transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        >
          &#9660;
        </span>
      </button>

      {open && (
        <div className="pb-8 grid md:grid-cols-2 gap-x-8 gap-y-3">
          {sources.map((s) => (
            <div key={s.id} className="text-sm text-text-muted leading-snug">
              <span className="text-accent font-bold mr-1">{s.id}.</span>
              {s.author} ({s.year}).{" "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="italic hover:text-accent transition-colors"
              >
                {s.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
