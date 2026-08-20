import PageHero from "@/components/PageHero";
import PlaceholderImg from "@/components/PlaceholderImg";
import ProjectImg from "@/components/ProjectImg";
import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Award, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "45+", label: "Happy Clients" },
  { icon: Clock, value: "2+", label: "Years of Experience" },
  { icon: Heart, value: "98%", label: "Client Satisfaction" },
];

const team = [
  { name: "Founder & Principal Designer", role: "Lead Design Direction" },
  { name: "Senior Interior Designer", role: "Space Planning & Execution" },
  { name: "Project Manager", role: "Client Relations & Delivery" },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About KAMAKHYA INTERIOR DESIGNS"
        subtitle="A Hyderabad-based studio serving clients across Telangana, with 50+ projects delivered in just over 2 years."
      />

      {/* Story */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ProjectImg src="/images/portfolio/mandir-1.jpg" alt="Kamakhya Interior Designs craftsmanship — Pooja Mandir Unit" className="h-96 rounded-lg" />
          <div>
            <p className="uppercase tracking-wide text-gold text-xs mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-5">
              Designing Spaces, Crafting Stories
            </h2>
            <p className="text-black/70 leading-relaxed mb-4">
              Kamakhya Interior Designs began with a simple belief: every space
              has the potential to tell a story. In just over 2 years, we&apos;ve
              delivered 50+ projects across Telangana — with a strong base in
              Hyderabad — working closely with homeowners and businesses to
              translate their vision into thoughtfully designed interiors.
            </p>
            <p className="text-black/70 leading-relaxed">
              From modular kitchens and wardrobes to false ceilings and complete
              3D-planned interiors, we bring a signature black-and-gold standard
              of craftsmanship to every project — large or small.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad bg-black text-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="mx-auto mb-3 text-gold" size={32} />
              <div className="font-display text-3xl md:text-4xl mb-1">{s.value}</div>
              <p className="text-ivory/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              The People Behind It
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <PlaceholderImg
                  label="Team"
                  className="h-56 rounded-lg mb-4"
                  variant="light"
                />
                <h3 className="font-display text-lg">{t.name}</h3>
                <p className="text-black/50 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gold-light/10 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-5">
            Our Design Philosophy
          </h2>
          <p className="text-black/70 leading-relaxed">
            We believe great interiors are built on listening first, designing
            second. Every project starts with understanding how you live or
            work — then shaping a space around that truth, finished with
            premium materials and meticulous attention to detail.
          </p>
        </div>
      </section>
    </>
  );
}
