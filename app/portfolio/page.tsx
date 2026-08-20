"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ProjectImg from "@/components/ProjectImg";

const categories = [
  "All",
  "Pooja Mandir",
  "Modular Kitchen",
  "TV Unit",
  "Hall Partition",
  "Bedroom Wardrobe",
  "Crockery Unit",
] as const;

const projects = [
  { name: "Marble Pooja Mandir Unit", category: "Pooja Mandir", img: "/images/portfolio/mandir-1.jpg" },

  { name: "Green Gloss Modular Kitchen", category: "Modular Kitchen", img: "/images/portfolio/kitchen-1.jpg" },
  { name: "Blue & Wood Modular Kitchen", category: "Modular Kitchen", img: "/images/portfolio/kitchen-2.jpg" },

  { name: "Glossy White TV Unit", category: "TV Unit", img: "/images/portfolio/tvunit-1.jpg" },
  { name: "Floating Panel TV Unit", category: "TV Unit", img: "/images/portfolio/tvunit-2.jpg" },
  { name: "Warm Wood TV Console", category: "TV Unit", img: "/images/portfolio/tvunit-3.jpg" },

  { name: "Wooden Lattice Partition", category: "Hall Partition", img: "/images/portfolio/partition-1.jpg" },
  { name: "Framed Glass Partition", category: "Hall Partition", img: "/images/portfolio/partition-2.jpg" },
  { name: "Ribbed Glass Gold Partition", category: "Hall Partition", img: "/images/portfolio/partition-3.jpg" },
  { name: "Wooden Hall Partition", category: "Hall Partition", img: "/images/portfolio/partition-4.jpg" },

  { name: "Walk-In Wardrobe System", category: "Bedroom Wardrobe", img: "/images/portfolio/wardrobe-1.jpg" },
  { name: "Navy & Ivory Wardrobe", category: "Bedroom Wardrobe", img: "/images/portfolio/wardrobe-3.jpg" },
  { name: "Glossy Striped Wardrobe", category: "Bedroom Wardrobe", img: "/images/portfolio/wardrobe-5.jpg" },
  { name: "Arched Panel Wardrobe", category: "Bedroom Wardrobe", img: "/images/portfolio/wardrobe-6.jpg" },
  { name: "Navy & White Wardrobe", category: "Bedroom Wardrobe", img: "/images/portfolio/wardrobe-7.jpg" },

  { name: "Walnut Crockery & Bar Unit", category: "Crockery Unit", img: "/images/portfolio/crockery-1.jpg" },
  { name: "Display Crockery Cabinet", category: "Crockery Unit", img: "/images/portfolio/crockery-2.jpg" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<typeof categories[number]>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="A curated selection of modular kitchens, wardrobes, partitions, and interiors we've delivered across Hyderabad and Telangana — 50+ projects and counting."
      />

      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm uppercase tracking-wide transition-colors border ${
                  filter === c
                    ? "bg-gold text-black border-gold"
                    : "border-black/20 text-black/70 hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <ProjectImg
                  src={p.img}
                  alt={p.name}
                  className="h-60 rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-xs uppercase tracking-wide text-gold mb-1">
                  {p.category}
                </p>
                <h3 className="font-display text-lg">{p.name}</h3>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-black/60 py-12">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
