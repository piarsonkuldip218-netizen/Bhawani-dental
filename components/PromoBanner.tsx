"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { promo } from "@/lib/data";

/**
 * Sticky top promotional banner.
 *
 * Toggle visibility by changing `promo.active` in lib/data.ts.
 * Users can also dismiss it for the session (persists in localStorage).
 */
export default function PromoBanner() {
  const [hidden, setHidden] = useState(true); // start hidden to avoid SSR flash

  useEffect(() => {
    if (!promo.active) return;
    // Each promo round (when text changes) gets a fresh dismissal state.
    const key = `bhawani-promo-dismissed:${promo.shortText}`;
    const dismissed = typeof window !== "undefined" && localStorage.getItem(key) === "1";
    setHidden(dismissed);
  }, []);

  if (!promo.active) return null;

  const dismiss = () => {
    const key = `bhawani-promo-dismissed:${promo.shortText}`;
    try {
      localStorage.setItem(key, "1");
    } catch {
      // localStorage may be blocked — fall back to in-memory hide
    }
    setHidden(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("promo:visibility"));
    }
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="promo"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[55] h-10 bg-gradient-to-r from-primary-700 via-accent-600 to-primary-700 text-white shadow-md shadow-primary-900/20 overflow-hidden"
          role="region"
          aria-label="Promotional offer"
        >
          {/* Subtle shimmer */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s linear infinite",
            }}
          />

          <div className="relative max-w-7xl mx-auto h-full px-3 sm:px-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
                <Sparkles className="w-3 h-3" />
                {promo.badge}
              </span>
              <p className="text-xs sm:text-sm font-medium truncate">
                <span className="hidden sm:inline">{promo.headline} </span>
                <span className="opacity-90">{"\u00B7"} {promo.detail}</span>
                <span className="sm:hidden font-semibold"> {promo.headline}</span>
              </p>
            </div>

            <a
              href={promo.ctaHref}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-primary-700 text-xs font-bold hover:bg-cream-100 transition-colors flex-shrink-0"
            >
              {promo.ctaText}
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              onClick={dismiss}
              aria-label="Dismiss promotional banner"
              className="flex-shrink-0 w-7 h-7 rounded-full hover:bg-white/15 active:bg-white/25 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
