"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyUs, stats } from "@/lib/data";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-cv relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900" />
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 -z-10">
        <div className="blob bg-primary-500 top-20 -left-32 w-96 h-96 mix-blend-screen opacity-30 animate-blob" />
        <div
          className="blob bg-accent-500 bottom-20 -right-32 w-96 h-96 mix-blend-screen opacity-30 animate-blob"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-200 bg-primary-500/15 border border-primary-400/20 mb-4">
            Why Choose Us
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Care that goes beyond{" "}
            <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
              the chair
            </span>
          </h2>
          <p className="text-lg text-slate-300 text-balance">
            Six things that make our patients keep coming back — and bring their
            families along.
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="glass-dark rounded-2xl p-5 text-center"
              >
                <Icon className="w-6 h-6 text-primary-300 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                  {s.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
