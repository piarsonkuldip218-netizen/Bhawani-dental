"use client";

import { Heart, Sparkles } from "lucide-react";
import { clinic, contact, navLinks, services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 text-slate-300 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-500 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {clinic.name}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-md">
              {clinic.description}
            </p>
            <div className="text-sm text-slate-400">
              <div className="font-semibold text-white">
                {contact.address.line1}
              </div>
              <div>{contact.address.line2}</div>
              <div>
                {contact.address.city}, {contact.address.state}{" "}
                {contact.address.pincode}
              </div>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-block mt-2 text-primary-300 hover:text-primary-200"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-primary-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-primary-300 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-400 flex items-center gap-1.5">
            © {year} {clinic.name}. Crafted with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> in India.
          </p>
          <div className="flex gap-5 text-slate-400">
            <a href="#" className="hover:text-primary-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
