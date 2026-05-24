"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services, contact } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="services"
      className="section-cv relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 via-white to-cream-50" />
      <div className="absolute inset-0 -z-10">
        <div className="blob bg-primary-200 top-20 -left-20 w-96 h-96 animate-blob" />
        <div
          className="blob bg-accent-200 bottom-20 -right-20 w-96 h-96 animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 mb-4">
            Our Services
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-slate-900 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Complete dental care{" "}
            <span className="gradient-text">under one roof</span>
          </h2>
          <p className="text-lg text-slate-600 text-balance">
            From routine cleanings to advanced cosmetic and surgical procedures,
            we cover every smile-related need.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10 pointer-events-none"
                     style={{
                       backgroundImage: "linear-gradient(135deg, rgba(20,184,166,0.4), rgba(6,182,212,0.4))"
                     }} />
                <div className="glass-strong rounded-3xl p-6 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 border border-white/60">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-600 mb-4">
            Not sure which treatment you need? Get a free consultation.
          </p>
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all"
          >
            Talk to a Dentist on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
