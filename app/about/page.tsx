import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Our Firm */}
        <ScrollReveal>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 text-text">
            About
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-20 max-w-3xl">
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Kislinger Impact Collective was founded on a simple belief:
              remarkable change happens when you bring the right people together
              around shared purpose.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              We work with philanthropists, foundations, and mission-driven
              organizations who are serious about their impact. Our approach is
              rigorous, relational, and always discreet. We measure our success
              by yours.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Based in Colorado. Serving clients nationally.
            </p>
          </div>
        </ScrollReveal>

        <hr className="border-border mb-16" />

        {/* Nick Kislinger */}
        <ScrollReveal delay={0.15}>
          <p className="text-xs tracking-widest uppercase text-accent mb-4">
            Principal
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-10 text-text">
            Nick Kislinger
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14">
            <div className="shrink-0">
              <Image
                src="/nick-kislinger.jpeg"
                alt="Nick Kislinger"
                width={320}
                height={400}
                className="object-cover w-full md:w-[320px]"
              />
            </div>

            <div>
              {/* Pull quote */}
              <blockquote className="border-l-4 border-accent pl-6 mb-8">
                <p className="font-serif text-2xl md:text-3xl text-accent font-light leading-snug italic">
                  &ldquo;Bring the right people together around shared purpose
                  and remarkable things happen.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5 text-text-muted leading-relaxed">
                <p>I believe all life deserves to flourish.</p>
                <p>
                  That belief has taken me from the Governor&apos;s office to
                  co-founding a breathing app used by 100 million people to
                  advising some of the most ambitious philanthropists and
                  organizations working today. The through-line is simple: bring
                  the right people together around shared purpose and remarkable
                  things happen.
                </p>
                <p>
                  As Chief of Staff to California&apos;s Secretary of Education,
                  I oversaw the state&apos;s first Guidelines for Digital
                  Education and helped build the Race to the Top strategy. That
                  experience taught me something crucial: effective policy should
                  be informed by social entrepreneurs, not isolated from them.
                </p>
                <p>
                  So I left Sacramento, co-founded Impact Hub LA, and spent a
                  decade at the intersection of tech, entertainment, and social
                  impact — distributing $5M in grants, raising $34M for a major
                  university campaign, and launching a nationwide hunger
                  initiative with Viola Davis.
                </p>
                <p>
                  In 2019, I co-founded Breathwrk, which Peloton acquired after
                  we hit 100M+ downloads. That experience — plus my own ADHD
                  diagnosis — convinced me the mental health system needs
                  fundamentally new approaches. I went back to school for a
                  Master&apos;s in Clinical Psychology.
                </p>
                <p>
                  Today I bring that full arc — government, philanthropy,
                  entrepreneurship, and clinical training — to every client
                  engagement. Kislinger Impact Collective exists because the
                  people trying to change the world deserve strategy as serious
                  as their ambitions.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
