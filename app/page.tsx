import Link from "next/link";
import Image from "next/image";
import ProjectImg from "@/components/ProjectImg";
import PlaceholderImg from "@/components/PlaceholderImg";
import {
  ChefHat,
  Tv,
  PanelsTopLeft,
  Star,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  Hammer,
  CheckCircle2,
  Boxes,
  ShieldCheck,
  Gem,
  Timer,
} from "lucide-react";

const featuredProjects = [
  { name: "Modular Kitchen — Hyderabad", type: "Modular Kitchen", img: "/images/portfolio/kitchen-1.jpg", location: "3BHK, Gachibowli", budget: "₹2.5L project", blurb: "Full L-shape modular kitchen with soft-close storage and breakfast counter." },
  { name: "Modern TV Unit Design", type: "TV Unit", img: "/images/portfolio/tvunit-1.jpg", location: "2BHK, Kondapur", budget: "₹85K project", blurb: "Floating glossy TV console with backlit display niches." },
  { name: "Master Bedroom Wardrobe", type: "Bedroom Wardrobe", img: "/images/portfolio/wardrobe-5.jpg", location: "3BHK, Madhapur", budget: "₹1.1L project", blurb: "Floor-to-ceiling sliding wardrobe with internal organizers." },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Hyderabad & Telangana", label: "Service Area" },
];

const services = [
  { icon: ChefHat, title: "Modular Kitchen", desc: "Smart, space-efficient kitchens built for everyday cooking.", price: "Starting from ₹85,000", time: "10–18 days installation" },
  { icon: Tv, title: "Modern TV Unit", desc: "Statement TV units that anchor your living room.", price: "Starting from ₹35,000", time: "5–8 days installation" },
  { icon: PanelsTopLeft, title: "Hall Partition", desc: "Stylish partitions that define spaces beautifully.", price: "Starting from ₹25,000", time: "4–7 days installation" },
];

const testimonials = [
  {
    name: "Ramesh K.",
    location: "Kondapur, Hyderabad",
    project: "Modular Kitchen Project",
    quote:
      "Kamakhya designed our modular kitchen and wardrobe — quality and finish exceeded our expectations.",
  },
  {
    name: "Sandhya P.",
    location: "Gachibowli, Hyderabad",
    project: "False Ceiling & TV Unit Project",
    quote:
      "The false ceiling and TV unit work transformed our hall completely. Very professional team.",
  },
  {
    name: "Naveen R.",
    location: "Madhapur, Hyderabad",
    project: "Complete Home Interior Project",
    quote: "Great experience from 3D design to final execution. Highly recommend in Hyderabad.",
  },
];

const process = [
  { icon: MessageCircle, step: "01", title: "Consultation", desc: "Share your space and vision — we listen first." },
  { icon: Boxes, step: "02", title: "3D Design", desc: "Detailed 3D visualization before any work begins." },
  { icon: CheckCircle2, step: "03", title: "Approval", desc: "You review and approve every design detail." },
  { icon: Hammer, step: "04", title: "Execution", desc: "On-site installation, managed start to finish." },
];

const whyChooseUs = [
  { icon: Sparkles, text: "3D Design Preview" },
  { icon: Timer, text: "On-time Delivery Guarantee" },
  { icon: Gem, text: "Premium Materials Only" },
  { icon: ShieldCheck, text: "Dedicated Project Manager" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-ivory overflow-hidden min-h-[640px] md:min-h-[760px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Elegant living room interior by Kamakhya Interior Designs"
          fill
          priority
          className="object-cover object-center -z-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-0 w-full">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.2em] text-gold text-xs md:text-sm mb-5">
              Premium Interior Design · Hyderabad &amp; Telangana
            </p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight mb-6">
              Designing Spaces<br /> Elevating Lifestyles
            </h1>
            <p className="text-ivory/75 mb-10 text-base md:text-lg">
              50+ projects delivered in 2+ years — from modular kitchens to
              complete home interiors, serving Hyderabad and clients across
              Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="bg-gold hover:bg-gold-dark text-black px-8 py-3.5 rounded text-sm uppercase tracking-wide transition-colors text-center"
              >
                View Our Work
              </Link>
              <a
                href="https://wa.me/919966774984?text=Hi!%20I%27d%20like%20a%20free%20design%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ivory/40 hover:border-gold hover:text-gold text-ivory px-8 py-3.5 rounded text-sm uppercase tracking-wide transition-colors text-center"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Strip */}
      <section className="bg-black text-ivory border-t border-ivory/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl md:text-3xl text-gold mb-1">{s.value}</p>
              <p className="text-ivory/60 text-xs md:text-sm uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="uppercase tracking-wide text-gold text-xs mb-2">
                Selected Work
              </p>
              <h2 className="font-display text-3xl md:text-4xl">Featured Projects</h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm uppercase tracking-wide text-gold hover:text-gold-dark border-b border-gold pb-1"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div key={p.name} className="group">
                <ProjectImg
                  src={p.img}
                  alt={p.name}
                  className="h-64 rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-xs uppercase tracking-wide text-gold mb-1">
                  {p.type}
                </p>
                <h3 className="font-display text-xl mb-2">{p.name}</h3>
                <p className="text-black/70 text-sm mb-2">{p.blurb}</p>
                <div className="flex items-center justify-between text-xs text-black/50">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {p.location}
                  </span>
                  <span>{p.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Founder */}
      <section className="section-pad bg-gold-light/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <PlaceholderImg label="Founder & Principal Designer" className="h-96 rounded-lg" />
          <div>
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              Meet Our Designer
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-5">
              The People Behind Your Space
            </h2>
            <p className="text-black/70 leading-relaxed mb-4">
              Kamakhya Interior Designs is led by a team that believes great
              interiors start with listening. Every project — from a single
              modular kitchen to a complete home — is shaped around how you
              actually live, not just how a space looks in a photo.
            </p>
            <p className="text-black/70 leading-relaxed mb-6">
              With 50+ projects delivered across Hyderabad and Telangana, our
              focus has stayed the same: thoughtful design, premium
              materials, and a team that&apos;s there from the first sketch to
              final handover.
            </p>
            <Link
              href="/about"
              className="text-sm uppercase tracking-wide text-gold hover:text-gold-dark border-b border-gold pb-1"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-pad bg-gold-light/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-ivory rounded-lg p-8 text-center shadow-sm"
              >
                <s.icon className="mx-auto mb-4 text-gold" size={36} />
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-gold text-sm font-medium mb-1">{s.price}</p>
                <p className="text-black/50 text-xs flex items-center justify-center gap-1">
                  <Clock size={13} /> {s.time}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-sm uppercase tracking-wide text-gold hover:text-gold-dark border-b border-gold pb-1"
            >
              View All 8 Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              Client Love
            </p>
            <h2 className="font-display text-3xl md:text-4xl">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gold-light/10 rounded-lg p-7">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-black/80 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gold/20 text-gold font-display flex items-center justify-center text-base shrink-0">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div>
                    <p className="font-display text-base leading-tight">{t.name}</p>
                    <p className="text-black/50 text-xs">{t.location}</p>
                    <p className="text-gold text-xs mt-0.5">{t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              How It Works
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4">
                  <p.icon size={24} />
                </div>
                <p className="font-display text-3xl text-gold/40 mb-2">{p.step}</p>
                <h3 className="font-display text-lg mb-2">{p.title}</h3>
                <p className="text-black/60 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-black text-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              The Kamakhya Standard
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((w) => (
              <div key={w.text} className="flex flex-col items-center text-center">
                <w.icon className="text-gold mb-3" size={30} />
                <p className="text-sm text-ivory/80">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-ivory section-pad text-center overflow-hidden">
        <Image
          src="/images/portfolio/kitchen-2.jpg"
          alt="Kamakhya Interior Designs completed project"
          fill
          className="object-cover object-center -z-20"
        />
        <div className="absolute inset-0 -z-10 bg-black/75" />
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-ivory/75 mb-8">
            Book a free consultation and let&apos;s bring your vision to life.
          </p>
          <a
            href="https://wa.me/919966774984?text=Hi!%20I%27m%20interested%20in%20interior%20design%20for%20my%20home%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-black px-8 py-3.5 rounded text-sm uppercase tracking-wide inline-block transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
