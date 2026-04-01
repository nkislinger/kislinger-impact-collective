import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/impact/AnimatedCounter";
import Footnote from "@/components/impact/Footnote";
import SourceTag from "@/components/impact/SourceTag";
import SectorPanel from "@/components/impact/SectorPanel";
import AnimatedBar from "@/components/impact/AnimatedBar";
import GivingCalculator from "@/components/impact/GivingCalculator";
import SourcesAccordion from "@/components/impact/SourcesAccordion";

export const metadata = {
  title: "Impact Landscape 2025 — Kislinger Impact Collective",
  description:
    "A data-driven analysis of American philanthropy, federal policy shifts, and the structural case for systems-change giving.",
};

export default function ImpactReportPage() {
  return (
    <>
      {/* ═══════ 1. HERO ═══════ */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-bg-warm">
        <div className="max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
              KIC Impact Landscape 2025
            </p>
          </ScrollReveal>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-text animate-fade-up">
            $326 billion. Sitting. Waiting.
          </h1>
          <p className="mt-8 text-text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-up animate-delay-200">
            American philanthropy hit a record $592.5 billion in 2024. The
            federal government simultaneously enacted the largest safety-net cuts
            in modern history. This is not a funding gap. It is a structural
            crisis — and the data points to one conclusion:{" "}
            <em>the problem isn&apos;t how much you&apos;re giving. It&apos;s how.</em>
          </p>
        </div>

        {/* Hero stat counters */}
        <div className="mt-16 max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up animate-delay-300">
          {[
            {
              prefix: "$",
              end: 592,
              suffix: "B",
              label: "Total U.S. giving, 2024",
              source: "Giving USA 2025",
            },
            {
              prefix: "$",
              end: 326,
              suffix: "B",
              label: "DAF assets sitting in accounts",
              source: "Chronicle of Philanthropy 2024",
            },
            {
              prefix: "$",
              end: 187,
              suffix: "B",
              label: "SNAP cuts over 10 years",
              source: "CBPP 2025",
            },
            {
              prefix: "",
              end: 1.7,
              suffix: "%",
              label: "Philanthropy going to mental health",
              source: "Mindful Philanthropy 2024",
              decimals: 1,
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-text font-light">
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="text-text-muted text-sm mt-2 leading-snug">
                {stat.label}
              </p>
              <SourceTag label={stat.source} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ 2. THESIS ═══════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Prose — 3 cols */}
            <div className="md:col-span-3 space-y-6 text-text-muted leading-relaxed">
              <ScrollReveal>
                <p>
                  The United States now faces an unprecedented convergence: record
                  philanthropic capacity alongside the most aggressive rollback of
                  public safety-net programs in a generation.
                  <Footnote id={1} source="Giving USA (2025). Annual Report on Philanthropy." />
                  {" "}Donor-advised fund assets alone have surpassed $326 billion,
                  yet the majority of those funds sit undisbursed — earning returns
                  for financial sponsors while communities wait.
                  <Footnote id={2} source="Chronicle of Philanthropy (2024). DAF Assets Soar 30% to $326 Billion." />
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p>
                  Meanwhile, proposed federal cuts to Medicaid alone could exceed
                  $1 trillion over a decade,
                  <Footnote id={7} source="CAP (2025). Medicaid Cuts Analysis." />
                  {" "}and SNAP reductions would remove 2.4 million people from
                  food assistance monthly.
                  <Footnote id={3} source="CBPP (2025). SNAP Cuts in Reconciliation Bill." />
                  {" "}One-third of nonprofits report they are already losing
                  government funding.
                  <Footnote id={8} source="Chronicle of Philanthropy (2025). One-Third of Nonprofits Losing Government Funding." />
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p>
                  Research spanning five decades of major social change shows that
                  80% of transformative outcomes required government policy change,
                  with a median timeline of 45 years.
                  <Footnote id={5} source="Bridgespan Group (2017). Audacious Philanthropy: Case Studies." />
                  {" "}Yet advocacy funding represents a tiny fraction of total
                  giving. Atlantic Philanthropies found that every dollar invested
                  in advocacy returned $100 in social value
                  <Footnote id={6} source="Atlantic Philanthropies (2018). Catalytic Philanthropy." />
                  {" "} — a 100:1 ROI that dwarfs traditional direct-service models.
                </p>
              </ScrollReveal>
            </div>

            {/* Sticky pull-quote — 2 cols */}
            <div className="md:col-span-2">
              <div className="md:sticky md:top-24">
                <ScrollReveal>
                  <blockquote className="border-l-4 border-accent pl-6">
                    <p className="font-serif text-2xl md:text-3xl text-accent font-light leading-snug italic">
                      &ldquo;The highest-leverage response for family offices and
                      DAF donors is not to give more — it is to give
                      differently.&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-4 pl-6 space-y-1">
                    <SourceTag label="Bridgespan Group 2017" />
                    <br />
                    <SourceTag label="Atlantic Philanthropies 2018" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-border" />
      </div>

      {/* ═══════ 3. MACRO CONTEXT ═══════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-text mb-12">
              The Macro Context
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "$1T",
                label: "Proposed Medicaid cuts over a decade",
                source: "CAP 2025",
                delay: 0.1,
              },
              {
                stat: "⅓",
                label: "Nonprofits already losing government funding",
                source: "Chronicle of Philanthropy 2025",
                delay: 0.2,
              },
              {
                stat: "65×",
                label: "Education funding gap multiplier",
                source: "Grants Plus 2025",
                delay: 0.3,
              },
            ].map((card) => (
              <ScrollReveal key={card.stat} delay={card.delay}>
                <div className="bg-bg-card border border-border-light p-8 text-center">
                  <p className="font-serif text-5xl md:text-6xl text-accent font-light">
                    {card.stat}
                  </p>
                  <p className="text-text-muted text-sm mt-4 leading-snug">
                    {card.label}
                  </p>
                  <SourceTag label={card.source} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. SECTOR PANELS ═══════ */}
      <section className="py-24 px-6 bg-bg-warm">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-text mb-4">
              Four Sectors. One Pattern.
            </h2>
            <p className="text-text-muted mb-12 max-w-2xl">
              Click each sector to see the full picture — the need, the gap, and
              where strategic philanthropy can move the needle.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <SectorPanel
                title="Mental Health"
                stat="1.7%"
                source="Mindful Philanthropy 2024"
                bars={[
                  { label: "Need", value: 35, max: 40, color: "#4a6741" },
                  { label: "Current giving", value: 2.3, max: 40, color: "#8aac80" },
                  { label: "SAMHSA cuts", value: 2, max: 40, color: "#c0392b" },
                ]}
              >
                <p>
                  SAMHSA has lost half its staff and approximately $2B in grants.
                  <Footnote id={10} source="STAT News (2025). SAMHSA Lost Half Its Staff." />
                  {" "}137 million Americans live in Mental Health Professional
                  Shortage Areas.
                  <Footnote id={11} source="HRSA (2025). Shortage Designations." />
                  {" "}28 states have now adopted phone-free school policies
                  impacting 21.7 million students — a positive signal, but one
                  that requires support infrastructure.
                  <Footnote id={12} source="ExcelinEd (2026). Phone-Free School Policies." />
                </p>
              </SectorPanel>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <SectorPanel
                title="Food Systems"
                stat="7%"
                source="Climate Policy Initiative 2024"
                bars={[
                  { label: "Climate transition needed", value: 300, max: 320, color: "#4a6741" },
                  { label: "Current food-climate finance", value: 95, max: 320, color: "#8aac80" },
                  { label: "SNAP cuts", value: 187, max: 320, color: "#c0392b" },
                ]}
              >
                <p>
                  FAO estimates the hidden costs of global agrifood systems at
                  $10–12 trillion annually.
                  <Footnote id={14} source="FAO (2024). Hidden Costs of Agrifood Systems." />
                  {" "}The Rockefeller Foundation found that Food Is Medicine
                  programs could unlock $45B in state-level savings.
                  <Footnote id={15} source="Rockefeller Foundation (2026). Food Is Medicine." />
                  {" "}Meanwhile, SNAP cuts of $187B over 10 years would remove
                  2.4 million people from food assistance monthly.
                  <Footnote id={3} source="CBPP (2025). SNAP Cuts in Reconciliation Bill." />
                </p>
              </SectorPanel>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <SectorPanel
                title="Education"
                stat="½ grade behind"
                source="Harvard/Stanford/Dartmouth 2025"
                bars={[
                  { label: "Ed philanthropy (record)", value: 88.3, max: 110, color: "#4a6741" },
                  { label: "Federal cuts", value: 12, max: 110, color: "#c0392b" },
                  { label: "Recovery funding needed", value: 100, max: 110, color: "#8aac80" },
                ]}
              >
                <p>
                  33% of 8th graders scored below NAEP Basic proficiency.
                  <Footnote id={17} source="The 74 Million (2025). NAEP Results." />
                  {" "}NSF canceled 1,574 grants totaling $1.1B, 90% flagged as
                  DEI-related.
                  <Footnote id={18} source="Urban Institute (2025). NSF Grant Cancellations." />
                  {" "}$12B in school funding disruptions are projected in year
                  one of current policy proposals.
                  <Footnote id={19} source="EdWeek (2026). School Funding Disruptions." />
                </p>
              </SectorPanel>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <SectorPanel
                title="AI & Social Impact"
                stat="$3B+"
                source="Philanthropy News Digest 2025"
                bars={[
                  { label: "Current AI ($400M)", value: 0.4, max: 2, color: "#4a6741" },
                  { label: "Humanity AI ($500M)", value: 0.5, max: 2, color: "#8aac80" },
                  { label: "NextLadder ($1B)", value: 1, max: 2, color: "#2c5e1a" },
                ]}
              >
                <p>
                  Over $3B has been mobilized for AI and social impact, including
                  Current AI ($400M), Humanity AI ($500M), and NextLadder Ventures
                  ($1B).
                  <Footnote id={20} source="PND (2025). AI & Social Impact Funds." />
                  <Footnote id={21} source="Fast Forward (2025). AI for Social Impact." />
                  {" "}Yet 84% of AI-powered nonprofits cite funding as their primary
                  barrier.
                  <Footnote id={21} source="Fast Forward (2025). AI for Social Impact." />
                  {" "}And AI chatbots proved unsafe for teen mental health in 32%
                  of test scenarios.
                  <Footnote id={22} source="Common Sense Media (2025). AI Chatbot Safety." />
                </p>
              </SectorPanel>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ 5. SYSTEMS CHANGE ═══════ */}
      <section className="py-24 px-6 bg-text">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              The Evidence for Systems Change
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-bg mb-12">
              What five decades of research tells us
            </h2>
          </ScrollReveal>

          {/* Bridgespan stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "45 yrs", label: "Median timeline for major social change" },
              { stat: "80%", label: "Required government policy change" },
              { stat: "75%", label: "Required funder coordination" },
              { stat: "7%", label: "Of big-bet philanthropy funds field building" },
            ].map((item, i) => (
              <ScrollReveal key={item.stat} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-accent font-light">
                    {item.stat}
                  </p>
                  <p className="text-bg/60 text-sm mt-2 leading-snug">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="flex justify-center mb-16">
              <SourceTag label="Bridgespan Group 2017 · Bridgespan 2023" />
            </div>
          </ScrollReveal>

          {/* ROI bars */}
          <ScrollReveal>
            <h3 className="font-serif text-2xl text-bg font-light mb-8">
              Return on Investment by Strategy
            </h3>
          </ScrollReveal>
          <div className="space-y-5 mb-16">
            <AnimatedBar label="Advocacy" value="$100 per $1" width={95} color="#4a6741" />
            <AnimatedBar label="Tobacco control" value="$155 per $1" width={100} color="#3b5334" />
            <AnimatedBar label="Direct service" value="~$1.10 per $1" width={8} color="#8aac80" />
          </div>
          <ScrollReveal>
            <div className="flex gap-4 flex-wrap mb-12">
              <SourceTag label="Atlantic Philanthropies 2018" />
              <SourceTag label="Bridgespan Group 2017" />
            </div>
          </ScrollReveal>

          {/* Field catalysts callout */}
          <ScrollReveal>
            <blockquote className="border-l-4 border-accent pl-6 max-w-3xl">
              <p className="text-bg/80 text-lg leading-relaxed italic">
                &ldquo;Field catalysts operate on median budgets of just $5M yet
                90% believe they would achieve their goals within two decades if
                adequately funded. Their median funding gap is $2.5M.&rdquo;
              </p>
              <div className="mt-3">
                <SourceTag label="Bridgespan Group 2023" />
              </div>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ 6. CALCULATOR ═══════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <GivingCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ 7. SOURCES ═══════ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SourcesAccordion />
        </div>
      </section>

      {/* ═══════ 8. CTA ═══════ */}
      <section className="py-24 px-6 bg-bg-warm">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <hr className="border-border mb-16 max-w-xs mx-auto" />
            <p className="font-serif text-3xl md:text-4xl font-light text-text mb-4">
              The question isn&apos;t how much you give.
            </p>
            <p className="font-serif text-3xl md:text-4xl font-light text-accent mb-10">
              It&apos;s how.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent-hover transition-colors duration-300"
            >
              Talk to KIC
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
