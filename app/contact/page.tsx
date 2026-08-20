"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", projectType: "Modular Kitchen", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend wired yet — this simulates submission.
    // To make this live: connect to an API route (app/api/contact/route.ts)
    // that sends an email via Resend/Nodemailer, or POSTs to a Google Sheet / CRM.
    setSubmitted(true);
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm ${form.name || "interested in your services"}. I'd like a consultation for ${form.projectType}. ${form.message}`
  );

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Tell us about your space and let's start designing something beautiful together."
      />

      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl mb-6">Send Us a Brief</h2>

            {submitted ? (
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 text-center">
                <p className="font-display text-xl mb-2">Thank you, {form.name || "there"}!</p>
                <p className="text-black/70 text-sm mb-5">
                  We&apos;ve received your brief and will get back to you within 24 hours.
                  For a faster response, message us directly on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/919966774984?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 rounded inline-flex items-center gap-2 text-sm uppercase tracking-wide"
                >
                  <MessageCircle size={18} /> Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-black/70 mb-1.5">Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Priya Sharma"
                    className="w-full bg-white border border-black/15 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm text-black/70 mb-1.5">Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-black/15 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm text-black/70 mb-1.5">Service Needed</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/15 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  >
                    <option>Modular Kitchen</option>
                    <option>Modern TV Unit</option>
                    <option>Hall Partition</option>
                    <option>Bedroom Wardrobes</option>
                    <option>Crockery Units</option>
                    <option>Pooja Mandir Unit</option>
                    <option>Wall Papers / Wall Arts</option>
                    <option>False Ceiling (POP/Gypsum/PVC)</option>
                    <option>2D/3D Floor Plans</option>
                    <option>Complete Interior</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-black/70 mb-1.5">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Space size, budget range, timeline, style preferences…"
                    className="w-full bg-white border border-black/15 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded text-sm uppercase tracking-wide w-full transition-colors"
                >
                  Submit Brief
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="font-display text-2xl mb-6">Reach Us</h2>
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-black/70 text-sm">Hyderabad &amp; all of Telangana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919966774984" className="text-black/70 text-sm">+91 99667 74984</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:interiorskamakhya@gmail.com" className="text-black/70 text-sm">
                    interiorskamakhya@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919966774984?text=Hi!%20I%27m%20interested%20in%20%5BKitchen%2FWardrobe%2FFull%20Home%5D%20interior%20design%20for%20my%20%5B2BHK%2F3BHK%5D%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded text-sm uppercase tracking-wide w-full mb-6"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>

            <div className="rounded-lg overflow-hidden h-56">
              <iframe
                title="Kamakhya Interior Designs service area — Hyderabad, Telangana"
                src="https://www.google.com/maps?q=Hyderabad,Telangana,India&z=10&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
