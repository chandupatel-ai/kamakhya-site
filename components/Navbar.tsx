"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between h-20 gap-2 md:gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
          <Image
            src="/images/logo.png"
            alt="Kamakhya Interior Designs"
            width={48}
            height={48}
            className="rounded-full shrink-0"
          />
          <span className="font-display tracking-wide text-ivory hidden xl:inline whitespace-nowrap text-xl">
            KAMAKHYA INTERIOR DESIGNS
          </span>
          <span className="font-display tracking-wide text-ivory inline xl:hidden whitespace-nowrap text-lg">
            <span className="text-gold">KAMAKHYA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-8 shrink-0">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs xl:text-sm tracking-wide uppercase text-ivory/80 hover:text-gold transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919966774984?text=Hi!%20I%27m%20interested%20in%20%5BKitchen%2FWardrobe%2FFull%20Home%5D%20interior%20design%20for%20my%20%5B2BHK%2F3BHK%5D%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-black px-3 xl:px-5 py-2 xl:py-2.5 rounded text-xs xl:text-sm tracking-wide uppercase transition-colors whitespace-nowrap"
          >
            Book Consultation
          </a>
        </nav>

        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base uppercase tracking-wide text-ivory/80"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919966774984?text=Hi!%20I%27m%20interested%20in%20%5BKitchen%2FWardrobe%2FFull%20Home%5D%20interior%20design%20for%20my%20%5B2BHK%2F3BHK%5D%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black text-center px-5 py-3 rounded text-sm uppercase tracking-wide"
          >
            Book Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
