import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg text-text">
            Kislinger Impact Collective
          </p>
          <p className="text-text-light text-sm mt-1 italic">
            Helping your giving matter.
          </p>
        </div>

        <nav className="flex gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-text-light text-xs tracking-wide">
            &copy; 2026 Kislinger Impact Collective. All rights reserved.
            &nbsp;&middot;&nbsp; Colorado &middot; Serving clients nationally
          </p>
        </div>
      </div>
    </footer>
  );
}
