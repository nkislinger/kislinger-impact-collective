export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/aspen-hero.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-white animate-fade-up">
          What We Build
        </h1>
        <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-up animate-delay-200">
          Every engagement is tailored. No templates, no shortcuts.
        </p>
      </div>
    </section>
  );
}
