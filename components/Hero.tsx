"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { clinic, contact, stats } from "@/lib/data";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 noise"
    >
      {/* Layered gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, #ccfbf1 0%, #f0fdfa 40%, #fdfcf8 80%)",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="blob bg-primary-300 top-10 -left-20 w-[420px] h-[420px] animate-blob" />
        <div
          className="blob bg-accent-300 top-1/3 -right-24 w-[460px] h-[460px] animate-blob"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="blob bg-emerald-200 bottom-0 left-1/3 w-[380px] h-[380px] animate-blob"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* 3D scene — fills the section, sits behind content */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-90"
        style={{ scale }}
      >
        <Scene3D />
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ opacity, y }}
        className="relative max-w-7xl mx-auto px-6 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy block */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                Trusted by 3,000+ patients
              </span>
              <span className="ml-1 flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-balance"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="block text-slate-900">Healthy Smiles,</span>
              <span className="block gradient-text">Confident Lives.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 text-balance"
            >
              Premium, painless dental care at{" "}
              <span className="font-semibold text-slate-800">{clinic.name}</span>.
              Modern equipment, experienced doctors, and a calm experience for the
              whole family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-strong font-semibold text-slate-800 hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4 text-primary-600" />
                {contact.phone}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0"
            >
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="glass rounded-2xl p-4 text-center lg:text-left"
                  >
                    <Icon className="w-5 h-5 text-primary-600 mx-auto lg:mx-0 mb-2" />
                    <div className="text-xl font-bold text-slate-900">
                      {s.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right column — empty on mobile (3D fills behind), spacer on desktop so content stays balanced */}
          <div className="hidden lg:block h-[520px]" aria-hidden />
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2"
        >
          <span className="w-1 h-1.5 bg-current rounded-full" />
        </motion.div>
      </motion.a>
    </section>
  );
}
