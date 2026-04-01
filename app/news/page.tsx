import Link from "next/link";

const essays = [
  {
    href: "/news/giving-architecture",
    category: "Perspective",
    title: "The Giving Architecture",
    description:
      "American philanthropy doesn\u2019t have a generosity problem. It has a design problem.",
  },
  {
    href: "/news/proximity",
    category: "Field Notes",
    title: "What the Field Teaches",
    description:
      "Most grantmakers have never sat in the room with the people their grants are meant to help. That\u2019s not a minor gap. It\u2019s the whole problem.",
  },
];

export default function NewsPage() {
  return (
    <section className="py-24 px-6 bg-bg-warm min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-light mb-4 text-text">
          Founder&apos;s Corner
        </h1>
        <p className="text-text-muted text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
          Essays on philanthropy, grantmaking, and what the field actually
          teaches.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {essays.map((essay) => (
            <Link
              key={essay.href}
              href={essay.href}
              className="block bg-bg-card border border-border-light p-8 hover:shadow-sm transition-shadow duration-300 no-underline"
            >
              <p className="text-xs tracking-widest uppercase text-accent mb-3">
                {essay.category}
              </p>
              <h2 className="font-serif text-xl md:text-2xl text-text mb-3 leading-snug">
                {essay.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                {essay.description}
              </p>
              <p className="mt-4 text-accent text-sm font-semibold">
                Read essay →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
