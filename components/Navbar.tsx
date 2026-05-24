"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { clinic, contact, navLinks, promo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Mirrors PromoBanner visibility — used to slide navbar below the banner
  const [promoVisible, setPromoVisible] = useState(promo.active);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync with PromoBanner — read dismissal state + listen for changes
  useEffect(() => {
    if (!promo.active) {
      setPromoVisible(false);
      return;
    }
    const key = `bhawani-promo-dismissed:${promo.shortText}`;
    const sync = () => {
      try {
        const dismissed = localStorage.getItem(key) === "1";
        setPromoVisible(!dismissed);
      } catch {
        setPromoVisible(true);
      }
    };
    sync();
    window.addEventListener("promo:visibility", sync);
    return () => window.removeEventListener("promo:visibility", sync);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          promoVisible ? "top-10" : "top-0"
        } ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
              scrolled
                ? "glass-strong shadow-lg shadow-primary-900/5 px-4 py-2"
                : "px-2 py-2"
            }`}
          >
            {/* Brand */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div
                  className="font-bold text-slate-900 text-base sm:text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {clinic.shortName}
                </div>
                <div className="hidden sm:block text-[10px] uppercase tracking-widest text-primary-700/80">
                  Clinic
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-700 rounded-lg hover:bg-primary-50/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white text-sm font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>

              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-700"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[70] bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-[85%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <span
                  className="font-bold text-lg text-slate-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="p-4 border-t border-slate-100">
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold shadow-lg shadow-primary-500/30"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
