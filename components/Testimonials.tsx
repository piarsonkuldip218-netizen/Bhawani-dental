"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-cv relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 via-white to-primary-50/30" />
      <div className="absolute inset-0 -z-10">
        <div className="blob bg-primary-200 top-20 left-1/4 w-96 h-96 animate-blob" />
        <div
          className="blob bg-accent-200 bottom-20 right-1/4 w-96 h-96 animate-blob"
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
            Patient Stories
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-slate-900 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Real smiles, <span className="gradient-text">real reviews</span>
          </h2>
          <p className="text-lg text-slate-600 text-balance">
            What our patients say after their treatment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative group"
            >
              <div className="glass-strong rounded-3xl p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 border border-white/60">
                <Quote className="w-9 h-9 text-primary-400/60 mb-3" />

                <div className="flex gap-0.5 mb-4 text-amber-500">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 text-balance">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-strong rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <div className="flex items-center gap-1 justify-center sm:justify-start text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-slate-900 font-bold text-lg">
                4.9 / 5
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Based on 500+ verified patient reviews
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
          >
            Write your story — book a visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
