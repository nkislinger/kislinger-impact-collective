import Link from "next/link";

const items = [
  {
    href: "/news/giving-architecture",
    category: "Founder\u2019s Corner",
    title: "The Giving Architecture",
    description:
      "American philanthropy doesn\u2019t have a generosity problem. It has a design problem.",
  },
  {
    href: "/news/proximity",
    category: "Founder\u2019s Corner",
    title: "What the Field Teaches",
    description:
      "Most grantmakers have never sat in the room with the people their grants are meant to help.",
  },
  {
    href: "/impact-report",
    category: "Impact Report",
    title: "KIC Impact Landscape 2025",
    description:
      "Where philanthropic capital is moving \u2014 and where it isn\u2019t.",
  },
];

export default function IdeasPage() {
  return (
    <>
      {/* Hero with nature image */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ideas-nature.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-white">
            Ideas
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Essays, data, and analysis on philanthropy, grantmaking, and systems
            change.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 px-6 bg-bg-warm min-h-[50vh]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-bg-card border border-border-light p-8 hover:shadow-sm transition-shadow duration-300 no-underline"
              >
                <p className="text-xs tracking-widest uppercase text-accent mb-3">
                  {item.category}
                </p>
                <h2 className="font-serif text-xl md:text-2xl text-text mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
                <p className="mt-4 text-accent text-sm font-semibold">
                  Read →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
