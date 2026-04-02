import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <>
      {/* Hero — full-width video */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <HeroVideo />
        <div className="relative z-10 max-w-3xl text-center">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light leading-tight text-white animate-fade-up">
            Impact is a strategy problem.
          </h1>
          <p className="mt-6 md:mt-8 text-white/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-up animate-delay-200 px-2">
            The people changing the world aren&apos;t lacking resources or
            passion. They&apos;re lacking architecture. That&apos;s what we
            build.
          </p>
          <div className="mt-8 md:mt-12 animate-fade-up animate-delay-300">
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-text transition-all duration-300 text-center"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-lg leading-relaxed text-text-muted">
              Every organization&apos;s giving is shaped by its story. We take
              the time to understand yours — your priorities, your
              relationships, your vision for the future — and translate that
              into a philanthropic strategy that works.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed text-text-muted">
              Kislinger Impact Collective is a boutique advisory practice. We
              don&apos;t take on many clients. We do exceptional work for the
              ones we serve.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Thin rule */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-border" />
      </div>

      {/* What Sets Us Apart */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-16 text-text">
              What Sets Us Apart
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent-light">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-text mb-3">
                  Discretion First
                </h3>
                <p className="text-text-muted leading-relaxed">
                  We don&apos;t discuss our clients. Ever. Your philanthropy is
                  yours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent-light">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-text mb-3">
                  Strategic Depth
                </h3>
                <p className="text-text-muted leading-relaxed">
                  We go beyond grantmaking. We help you design a program that
                  reflects your values and achieves measurable impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent-light">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-text mb-3">
                  Trusted Networks
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Decades of relationships across nonprofit, government, and
                  philanthropic sectors — at your disposal.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ideas */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ideas-nature.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-12 text-white">
              Ideas
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <a href="/news/giving-architecture" className="block bg-bg-card border border-border-light p-8 hover:shadow-sm transition-shadow duration-300 no-underline">
                <p className="text-xs tracking-widest uppercase text-accent mb-3">
                  Founder&apos;s Corner
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-text mb-3 leading-snug">
                  The Giving Architecture
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  American philanthropy doesn&apos;t have a generosity problem.
                  It has a design problem.
                </p>
                <p className="mt-4 text-accent text-sm font-semibold">
                  Read essay →
                </p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a href="/news/proximity" className="block bg-bg-card border border-border-light p-8 hover:shadow-sm transition-shadow duration-300 no-underline">
                <p className="text-xs tracking-widest uppercase text-accent mb-3">
                  Founder&apos;s Corner
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-text mb-3 leading-snug">
                  What the Field Teaches
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Most grantmakers have never sat in the room with the people
                  their grants are meant to help. That&apos;s not a minor gap.
                  It&apos;s the whole problem.
                </p>
                <p className="mt-4 text-accent text-sm font-semibold">
                  Read essay →
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <hr className="border-border mb-16 max-w-xs mx-auto" />
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-text">
              Ready to begin?
            </h2>
            <p className="text-text-muted text-lg mb-10">
              We work with a limited number of clients each year.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent-hover transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
