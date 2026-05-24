/**
 * Bhawani Dental Clinic — Centralized data
 *
 * All client-facing copy lives here so the clinic owner (or developer)
 * can update once and have it propagate across every section/component.
 *
 * SAFE TO EDIT — only this file should change for routine updates.
 */

import type { LucideIcon } from "lucide-react";
import {
  Smile,
  Sparkles,
  Stethoscope,
  Baby,
  Shield,
  Crown,
  Zap,
  HeartPulse,
  Award,
  Users,
  Clock,
  Star,
  ScanLine,
  Wrench,
  GraduationCap,
} from "lucide-react";

// ---------- Clinic Identity ----------
export const clinic = {
  name: "Bhawani Dental Clinic",
  shortName: "Bhawani Dental",
  tagline: "Healthy Smiles, Confident Lives",
  description:
    "Bhawani Dental Clinic in Rangapara, Sonitpur — premium painless dental care by Dr. Neelam Shah (BDS, MIDA). Root canal, braces, smile makeover, kids dentistry, teeth whitening, fillings, crowns and more under one roof.",
  keywords:
    "dentist in Rangapara, dental clinic Sonitpur, Dr Neelam Shah, root canal Rangapara, braces Sonitpur, dental implants Assam, teeth whitening, kids dentistry, painless dental treatment, oral surgeon",
  established: 2015,
  yearsExperience: "12+",
};

// ---------- Promo / Camp Offer ----------
// Toggle `active: false` to hide the promo banner once the camp ends.
export const promo = {
  active: true,
  badge: "Limited Time",
  headline: "FREE Dental Check-up Camp",
  detail: "25% OFF on All Procedures",
  shortText: "FREE Camp \u00B7 25% OFF on All Procedures",
  ctaText: "Book Now",
  ctaHref: "#contact",
};

// ---------- Contact ----------
export const contact = {
  phone: "+91 70683 40558",
  phoneRaw: "+917068340558", // for tel: links — no spaces
  whatsapp: "917068340558", // for wa.me link — no + or spaces
  whatsappMessage:
    "Hi, I would like to book an appointment at Bhawani Dental Clinic.",
  email: "bhawanidental@gmail.com",
  address: {
    line1: "M.G. Road, Near PNB Bank",
    line2: "Rangapara",
    city: "Sonitpur",
    state: "Assam",
    pincode: "784505",
  },
  hours: {
    weekdays: "10:00 AM \u2013 7:00 PM",
    sunday: "10:00 AM \u2013 7:00 PM",
    note: "Open all 7 days",
  },
  // Search-based embed — works without API key, points to clinic location
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Bhawani+Dental+Clinic+M.G.+Road+Rangapara+Sonitpur+Assam&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Bhawani+Dental+Clinic+M.G.+Road+Rangapara+Sonitpur+Assam",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};

// ---------- Doctor ----------
export const doctor = {
  name: "Dr. Neelam Shah",
  qualification: "BDS, MIDA",
  specialization: "Oral Surgeon & Dental Disease Specialist",
  experience: "12+ Years",
  pastRole: "Ex-Lecturer, FDS Dental College, Gorakhpur (U.P.)",
  bio: "Dr. Neelam Shah is a trusted Oral Surgeon and Dental Disease Specialist with over a decade of clinical and teaching experience. Previously a Lecturer at FDS Dental College, Gorakhpur, she now leads Bhawani Dental Clinic in Rangapara — combining academic rigour with gentle, modern, painless dental care for every patient.",
};

// ---------- Services ----------
export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string; // Tailwind classes
};

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Regular Dental Check-up",
    description:
      "Routine examination, oral health assessment, and personalised prevention plan to keep your smile healthy.",
    features: ["Full mouth exam", "Cavity screening", "Preventive guidance"],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: ScanLine,
    title: "Digital Dental X-ray",
    description:
      "On-site digital X-ray imaging with significantly lower radiation than traditional film X-rays.",
    features: ["Instant results", "Low radiation", "Accurate diagnosis"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Root Canal Treatment",
    description:
      "Modern, single-sitting root canals with rotary endodontics — virtually painless and saves your natural tooth.",
    features: [
      "Single-sitting RCT",
      "Latest rotary tools",
      "Save the natural tooth",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Smile,
    title: "Orthodontic Treatment",
    description:
      "Metal, ceramic, and clear aligners for a perfectly aligned smile — for kids, teens and adults.",
    features: ["Braces & aligners", "Free first consult", "EMI options"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Sparkles,
    title: "Smile Makeover",
    description:
      "Custom cosmetic plan combining whitening, veneers and shaping to design the smile you want.",
    features: ["Personalised design", "Veneers & laminates", "Natural finish"],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Baby,
    title: "Kids Dentistry",
    description:
      "Pedodontic care for children — gentle, friendly, and turning dental visits into a fun experience.",
    features: ["Child-friendly clinic", "Painless techniques", "Cavity prevention"],
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    icon: Zap,
    title: "Teeth Whitening",
    description:
      "Professional whitening that brightens your smile up to 8 shades in a single session.",
    features: ["Painless procedure", "Long-lasting", "Same-day result"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Crown,
    title: "Filling & Crowns",
    description:
      "Tooth-coloured composite fillings and premium ceramic / zirconia crowns that look natural.",
    features: ["Composite fillings", "Zirconia / E-max", "Perfect colour match"],
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Scaling & Cleaning",
    description:
      "Ultrasonic scaling and polishing to safely remove tartar, plaque and stains.",
    features: ["Ultrasonic scaler", "Stain removal", "Recommended every 6 months"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: HeartPulse,
    title: "Gum Treatment",
    description:
      "Treatment for bleeding, swollen and receding gums with deep cleaning and modern therapy.",
    features: ["Bleeding gums fix", "Deep cleaning", "Long-term gum health"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "Tooth Extraction",
    description:
      "Safe, painless removal of damaged, infected or wisdom teeth — performed by an oral surgeon.",
    features: ["Wisdom tooth removal", "Milk tooth extraction", "Painless surgery"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Veneers, contouring and aesthetic restorations to refine the look of your smile.",
    features: ["Veneers", "Tooth shaping", "Aesthetic finish"],
    gradient: "from-cyan-500 to-teal-500",
  },
];

// ---------- Stats ----------
export const stats = [
  { icon: Users, value: "3,000+", label: "Happy Smiles" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Star, value: "4.9 / 5", label: "Patient Rating" },
  { icon: Clock, value: "10\u20137", label: "Open All 7 Days" },
];

// ---------- Why Us ----------
export const whyUs = [
  {
    title: "Experienced Specialist",
    description:
      "Treatment by Dr. Neelam Shah (BDS, MIDA) — Oral Surgeon and former Lecturer at FDS Dental College, Gorakhpur.",
  },
  {
    title: "Pain-Free Treatment",
    description:
      "Modern anaesthesia and gentle techniques ensure most procedures are virtually painless.",
  },
  {
    title: "Sterilised Environment",
    description:
      "Hospital-grade autoclave sterilisation for every instrument — your safety always comes first.",
  },
  {
    title: "Latest Technology",
    description:
      "Digital X-rays, rotary endodontics, ultrasonic scaling and modern dental equipment.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. Every treatment plan comes with a clear, written estimate before we begin.",
  },
  {
    title: "Open All 7 Days",
    description:
      "10:00 AM to 7:00 PM, every day of the week — including Sundays — for your convenience.",
  },
];

// ---------- Doctor Highlights (used in About) ----------
export const doctorHighlights = [
  { icon: GraduationCap, label: doctor.qualification },
  { icon: Award, label: doctor.experience },
  { icon: Users, label: "3,000+ Smiles" },
];

// ---------- Testimonials ----------
export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Patient \u2013 Root Canal",
    text: "Best dental clinic in Rangapara! My RCT was completely painless and finished in a single sitting. Dr. Neelam ma'am explains everything so patiently.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Patient \u2013 Braces",
    text: "Got my braces done here and the results are amazing. The clinic is very clean, the staff is friendly, and pricing is transparent.",
    rating: 5,
  },
  {
    name: "Anita Gupta",
    role: "Parent \u2013 Kids Dentistry",
    text: "My 6-year-old was scared of dentists but doctor handled him so gently that now he asks to visit. Highly recommend for kids.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Patient \u2013 Whitening + Cleaning",
    text: "Walked in for cleaning, came out with a Bollywood-level smile. Dr. Shah's experience really shows in the work. Worth every rupee.",
    rating: 5,
  },
];

// ---------- Navigation ----------
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
