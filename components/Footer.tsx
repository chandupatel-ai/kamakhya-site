import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Kamakhya Interior Designs"
              width={44}
              height={44}
              className="rounded-full"
            />
            <h3 className="font-display text-xl">
              KAMAKHYA INTERIOR DESIGNS
            </h3>
          </div>
          <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
            Premium interior design services in Hyderabad and across Telangana
            — modular kitchens, wardrobes, false ceilings, and complete home &
            office interiors. 50+ projects delivered in 2+ years.
          </p>
        </div>

        <div>
          <h4 className="uppercase text-sm tracking-wide text-gold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-ivory/60">
            <li><Link href="/portfolio" className="hover:text-ivory">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-ivory">Services</Link></li>
            <li><Link href="/about" className="hover:text-ivory">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-ivory">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-sm tracking-wide text-gold mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm text-ivory/60">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-gold shrink-0" />
              Hyderabad, Telangana
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+919966774984" className="hover:text-ivory">+91 99667 74984</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:interiorskamakhya@gmail.com" className="hover:text-ivory">
                interiorskamakhya@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon size={16} className="text-gold shrink-0" />
              <a
                href="https://instagram.com/kamakhyainteriordesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory"
              >
                @kamakhyainteriordesigns
              </a>
            </li>
            <li className="flex items-center gap-2">
              <YoutubeIcon size={16} className="text-gold shrink-0" />
              <a
                href="https://youtube.com/@kamakhya_interiordesigns?si=P1DhfqE21KTFK_Dx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory"
              >
                @kamakhya_interiordesigns
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/40">
        © {new Date().getFullYear()} KAMAKHYA INTERIOR DESIGNS. All rights reserved. Built by Scaify.
      </div>
    </footer>
  );
}
