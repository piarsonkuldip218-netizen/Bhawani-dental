"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
  MessageCircle,
} from "lucide-react";
import { contact } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static export: open WhatsApp with prefilled message
    const text = `Hi, I'm ${form.name} (${form.phone}). ${form.message}`;
    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="section-cv relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 via-white to-cream-50" />
      <div className="absolute inset-0 -z-10">
        <div className="blob bg-primary-200 top-20 right-20 w-96 h-96 animate-blob" />
        <div
          className="blob bg-accent-200 bottom-20 left-20 w-96 h-96 animate-blob"
          style={{ animationDelay: "5s" }}
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
            Get in Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-slate-900 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book your <span className="gradient-text">appointment</span>
          </h2>
          <p className="text-lg text-slate-600 text-balance">
            Walk in or call ahead — we&apos;ll make sure you&apos;re seen quickly
            and comfortably.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactCard
              icon={MapPin}
              title="Visit Us"
              gradient="from-primary-500 to-accent-500"
            >
              <p className="text-slate-700 text-sm leading-relaxed">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.city}, {contact.address.state}{" "}
                {contact.address.pincode}
              </p>
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-semibold text-primary-700 hover:text-primary-800"
              >
                Get Directions →
              </a>
            </ContactCard>

            <ContactCard
              icon={Phone}
              title="Call / WhatsApp"
              gradient="from-emerald-500 to-teal-500"
            >
              <a
                href={`tel:${contact.phoneRaw}`}
                className="block text-slate-800 hover:text-primary-700 font-semibold text-lg"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block text-slate-700 hover:text-primary-700 text-sm mt-1"
              >
                {contact.email}
              </a>
            </ContactCard>

            <ContactCard
              icon={Clock}
              title="Hours"
              gradient="from-cyan-500 to-blue-500"
            >
              <div className="text-sm text-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span className="font-medium">{contact.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">{contact.hours.sunday}</span>
                </div>
              </div>
            </ContactCard>

            <div className="glass-strong rounded-2xl p-5">
              <div className="text-sm font-semibold text-slate-900 mb-3">
                Follow us
              </div>
              <div className="flex gap-2">
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white hover:-translate-y-0.5 transition-transform shadow-md"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white hover:-translate-y-0.5 transition-transform shadow-md"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white hover:-translate-y-0.5 transition-transform shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form + map column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="glass-strong rounded-3xl p-6 md:p-8 space-y-4"
            >
              <h3
                className="text-2xl font-bold text-slate-900 mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Send us a message
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                We&apos;ll reply on WhatsApp within minutes.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Your name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="Aapka naam"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Phone number
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="+91 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your concern (e.g. tooth pain, cleaning, braces consult...)"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all"
              >
                Send via WhatsApp
                <Send className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-500 text-center">
                Submitting opens WhatsApp with your message — no data stored on
                our server.
              </p>
            </form>

            {/* Map */}
            <div className="glass-strong rounded-3xl p-2 overflow-hidden">
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhawani Dental Clinic Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  gradient,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-strong rounded-2xl p-5 hover:-translate-y-0.5 transition-transform">
      <div className="flex items-start gap-3">
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-900 mb-1">{title}</div>
          {children}
        </div>
      </div>
    </div>
  );
}
