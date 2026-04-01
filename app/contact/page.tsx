"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xbdpklkl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  }

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 text-text">
            Contact
          </h1>
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            We work with a limited number of clients each year. If you&apos;re
            considering a philanthropic engagement, we&apos;d be glad to have a
            confidential conversation.
          </p>
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            No obligations. Just a conversation.
          </p>
          <hr className="border-border mb-12" />
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="border border-accent/30 bg-accent-light p-12 text-center">
              <p className="font-serif text-2xl text-accent mb-4">
                Thank you.
              </p>
              <p className="text-text-muted">
                We&apos;ll be in touch soon. All inquiries are handled with
                complete confidentiality.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-widest uppercase text-text-muted mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-xs tracking-widest uppercase text-text-muted mb-2"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-widest uppercase text-text-muted mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-widest uppercase text-text-muted mb-2"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-accent text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent-hover transition-colors duration-300"
              >
                Send Message
              </button>
            </form>

            <p className="mt-8 text-text-light text-sm italic">
              All inquiries are handled with complete confidentiality.
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
