import PageHero from "@/components/PageHero";
import ProjectImg from "@/components/ProjectImg";
import {
  ChefHat,
  Tv,
  PanelsTopLeft,
  BedDouble,
  Wine,
  Flame,
  Image as ImageIcon,
  Palette,
  Layers,
  Pencil,
  Box,
  Check,
} from "lucide-react";

const mainServices = [
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    desc: "Custom modular kitchens designed for everyday efficiency — smart storage, premium finishes, and layouts built around how you cook.",
    img: "/images/portfolio/kitchen-2.jpg",
  },
  {
    icon: Tv,
    title: "Modern TV Unit",
    desc: "Statement TV units that bring your living room together, with integrated storage and clean modern lines.",
    img: "/images/portfolio/tvunit-2.jpg",
  },
  {
    icon: PanelsTopLeft,
    title: "Hall Partition",
    desc: "Elegant partitions that divide spaces without closing them off — perfect for open-plan halls and living areas.",
    img: "/images/portfolio/partition-3.jpg",
  },
];

const moreServices = [
  { icon: BedDouble, title: "Bedroom Wardrobes", desc: "Custom wardrobes with smart internal storage solutions.", img: "/images/portfolio/wardrobe-3.jpg" },
  { icon: Wine, title: "Crockery Units", desc: "Elegant display and storage units for your dining essentials.", img: "/images/portfolio/crockery-1.jpg" },
  { icon: Flame, title: "Pooja Mandir Unit", desc: "Beautifully crafted mandir units designed with care and tradition.", img: "/images/portfolio/mandir-1.jpg" },
  { icon: ImageIcon, title: "Wall Papers", desc: "Premium wallpaper designs to elevate any room instantly.", img: null },
  { icon: Palette, title: "Wall Arts", desc: "Custom wall art and textured finishes for a personal touch.", img: null },
];

const ceilingTypes = ["POP (Plaster of Paris)", "Gypsum", "PVC"];
const floorPlans = ["2D Drawings", "3D Elevation", "3D Visualisation Sketchup"];

const process = [
  { step: "01", title: "Consultation", desc: "We understand your space, needs, and budget." },
  { step: "02", title: "2D & 3D Design", desc: "Detailed drawings and 3D elevations before execution." },
  { step: "03", title: "Execution", desc: "On-site project management from start to finish." },
  { step: "04", title: "Handover", desc: "Final walkthrough and styling touches." },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete interior design solutions — from modular furniture to false ceilings and 3D floor plans — delivered across Hyderabad and Telangana."
      />

      {/* Main 3 Services with images */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-20">
          {mainServices.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ProjectImg src={s.img} alt={s.title} className="h-80 rounded-lg" />
              <div>
                <s.icon className="text-gold mb-4" size={36} />
                <h2 className="font-display text-3xl mb-3">{s.title}</h2>
                <p className="text-black/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Services Grid */}
      <section className="section-pad bg-gold-light/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              And More
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Additional Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {moreServices.map((s) => (
              <div key={s.title} className="bg-ivory rounded-lg overflow-hidden shadow-sm">
                {s.img && (
                  <ProjectImg src={s.img} alt={s.title} className="h-40 w-full" />
                )}
                <div className="p-7">
                  <s.icon className="text-gold mb-3" size={28} />
                  <h3 className="font-display text-lg mb-2">{s.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceiling + Floor Plans */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-black text-ivory rounded-lg p-8">
            <Layers className="text-gold mb-4" size={32} />
            <h3 className="font-display text-2xl mb-4">False Ceiling</h3>
            <p className="text-ivory/60 text-sm mb-5">
              We design and install false ceilings in your preferred material:
            </p>
            <ul className="space-y-2">
              {ceilingTypes.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-gold shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black text-ivory rounded-lg p-8">
            <Box className="text-gold mb-4" size={32} />
            <h3 className="font-display text-2xl mb-4">Floor Plans</h3>
            <p className="text-ivory/60 text-sm mb-5">
              Every project starts with precise planning and visualization:
            </p>
            <ul className="space-y-2">
              {floorPlans.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Pencil size={16} className="text-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-gold-light/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="uppercase tracking-wide text-gold text-xs mb-2">
              How We Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="font-display text-5xl text-gold/40 mb-3">
                  {p.step}
                </div>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-black/70 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold text-black section-pad text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-black/80 mb-8">
            Every great space starts with a conversation. Reach out today.
          </p>
          <a
            href="https://wa.me/919966774984?text=Hi!%20I%27m%20interested%20in%20%5BKitchen%2FWardrobe%2FFull%20Home%5D%20interior%20design%20for%20my%20%5B2BHK%2F3BHK%5D%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-charcoal text-ivory px-8 py-3.5 rounded text-sm uppercase tracking-wide inline-block transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
