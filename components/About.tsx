"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Award, Heart } from "lucide-react";
import { clinic, doctor } from "@/lib/data";

const highlights = [
  { icon: GraduationCap, label: doctor.qualification },
  { icon: Award, label: doctor.experience },
  { icon: Heart, label: "5000+ Smiles" },
];

const points = [
  "Painless treatment using modern anesthesia",
  "Honest diagnosis — only what you actually need",
  "Patient-friendly, child-friendly environment",
  "Follow-up care and long-term oral health planning",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-cv relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 via-primary-50/40 to-cream-50" />
      <div className="absolute inset-0 -z-10">
        <div className="blob bg-accent-200 top-32 right-0 w-96 h-96 animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden glass-strong p-2 shadow-2xl shadow-primary-900/10">
              <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-primary-100 via-accent-50 to-cream-100 flex items-center justify-center relative overflow-hidden">
                {/* SVG illustration — clean dental icon */}
                <svg
                  viewBox="0 0 200 240"
                  className="w-3/4 h-3/4 drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="toothG" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#ccfbf1" />
                    </linearGradient>
                    <linearGradient id="rimG" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 20 C 60 20 30 50 30 90 C 30 120 45 145 55 175 C 62 195 70 215 80 220 C 90 224 92 200 95 175 C 96 165 98 160 100 160 C 102 160 104 165 105 175 C 108 200 110 224 120 220 C 130 215 138 195 145 175 C 155 145 170 120 170 90 C 170 50 140 20 100 20 Z"
                    fill="url(#toothG)"
                    stroke="url(#rimG)"
                    strokeWidth="3"
                  />
                  <circle cx="80" cy="80" r="10" fill="#ffffff" opacity="0.9" />
                </svg>

                {/* Floating badge */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 right-6 glass-strong rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    Since
                  </div>
                  <div className="text-2xl font-bold text-primary-700">
                    {clinic.established}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 glass-strong rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Patients served</div>
                    <div className="text-base font-bold text-slate-900">
                      5,000+
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 mb-4">
              About the Clinic
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 text-slate-900 text-balance"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trusted dental care for{" "}
              <span className="gradient-text">over a decade</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 text-balance">
              {clinic.name} was founded in {clinic.established} with one simple
              mission — to make premium dental treatment painless, affordable, and
              accessible. {doctor.bio}
            </p>

            {/* Doctor card */}
            <div className="glass-strong rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {doctor.name.replace("Dr. ", "").slice(0, 1)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{doctor.name}</div>
                  <div className="text-sm text-slate-600">
                    {doctor.specialization}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all"
            >
              Meet the Doctor
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
