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
  ThumbsUp,
} from "lucide-react";

// ---------- Clinic Identity ----------
export const clinic = {
  name: "Bhawani Dental Clinic",
  shortName: "Bhawani Dental",
  tagline: "Healthy Smiles, Confident Lives",
  description:
    "Bhawani Dental Clinic offers premium, painless dental care with modern equipment and experienced doctors. Cleaning, root canal, braces, implants, whitening and kids dentistry under one roof.",
  keywords:
    "dental clinic, dentist, root canal, braces, dental implants, teeth whitening, kids dentistry, painless dental treatment",
  established: 2015,
  yearsExperience: "10+",
};

// ---------- Contact ----------
export const contact = {
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210", // for tel: links — no spaces
  whatsapp: "919876543210", // for wa.me link — no + or spaces
  whatsappMessage: "Hi, I would like to book an appointment at Bhawani Dental Clinic.",
  email: "info@bhawanidental.com",
  address: {
    line1: "Main Market Road",
    line2: "Near City Hospital",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302001",
  },
  hours: {
    weekdays: "10:00 AM – 8:00 PM",
    sunday: "10:00 AM – 2:00 PM (by appointment)",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56811.43!2d75.78!3d26.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5ca38f23193%3A0xd62b80c0d7f74de8!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000",
  mapLink: "https://maps.google.com/?q=Bhawani+Dental+Clinic+Jaipur",
  social: {
    instagram: "https://instagram.com/bhawanidental",
    facebook: "https://facebook.com/bhawanidental",
  },
};

// ---------- Doctor ----------
export const doctor = {
  name: "Dr. [Doctor Name]",
  qualification: "BDS, MDS",
  specialization: "Cosmetic Dentistry & Endodontics",
  experience: "12+ Years",
  bio: "Dedicated to delivering pain-free, premium dental care using the latest technology. Trusted by 5000+ happy patients across the city.",
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
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional whitening that brightens your smile up to 8 shades in a single session.",
    features: ["Painless procedure", "Long-lasting results", "Same-day visible effect"],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description:
      "Modern, single-sitting root canals with rotary endodontics — virtually painless.",
    features: ["Single sitting RCT", "Latest rotary tools", "Save your natural tooth"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    description:
      "Premium ceramic and zirconia crowns that look and feel like your natural teeth.",
    features: ["Zirconia / E-max", "Perfect colour match", "10+ year warranty"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Smile,
    title: "Braces & Aligners",
    description:
      "Metal, ceramic, and clear aligners (Invisalign-style) for a perfectly aligned smile.",
    features: ["Clear aligners", "Ceramic options", "Free first consultation"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description:
      "Replace missing teeth with permanent, titanium-based implants from global brands.",
    features: ["FDA-approved implants", "Lifetime solution", "Single-tooth to full-mouth"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Baby,
    title: "Kids Dentistry",
    description:
      "Gentle, friendly care for your little ones — turning dental visits into a fun experience.",
    features: ["Child-friendly clinic", "Painless techniques", "Cavity prevention"],
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    icon: Zap,
    title: "Cleaning & Polishing",
    description:
      "Ultrasonic scaling and polishing to remove tartar, plaque and stains safely.",
    features: ["Ultrasonic scaler", "Stain removal", "Recommended every 6 months"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeartPulse,
    title: "Gum Treatment",
    description:
      "Treatment for bleeding, swollen or receding gums with deep cleaning and laser therapy.",
    features: ["Laser gum therapy", "Bleeding gums fix", "Long-term gum health"],
    gradient: "from-emerald-500 to-cyan-500",
  },
];

// ---------- Stats ----------
export const stats = [
  { icon: Users, value: "5,000+", label: "Happy Patients" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: ThumbsUp, value: "98%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Emergency Support" },
];

// ---------- Why Us ----------
export const whyUs = [
  {
    title: "Pain-Free Treatment",
    description:
      "Modern anesthesia and laser techniques ensure most procedures are virtually painless.",
  },
  {
    title: "Sterilized Environment",
    description:
      "Hospital-grade autoclave sterilization for every instrument — your safety first.",
  },
  {
    title: "Latest Technology",
    description:
      "Digital X-rays, intraoral cameras, rotary endodontics and laser dentistry.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. Every treatment plan comes with a clear, written estimate.",
  },
  {
    title: "Experienced Doctors",
    description:
      "Decade-plus experience treating thousands of patients with consistent care.",
  },
  {
    title: "Easy EMI Available",
    description:
      "Affordable monthly payment plans for braces, implants and full-mouth rehab.",
  },
];

// ---------- Testimonials ----------
export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Patient – Root Canal",
    text: "Best dental clinic in the city! My RCT was completely painless and finished in a single sitting. Highly recommend.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Patient – Braces",
    text: "Got my braces done here and the results are amazing. Doctor explains everything patiently and the staff is very friendly.",
    rating: 5,
  },
  {
    name: "Anita Gupta",
    role: "Patient – Implants",
    text: "Excellent implant work — feels exactly like my natural teeth. Worth every rupee. Hygiene standards are top-notch.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Patient – Whitening",
    text: "Came in for whitening, walked out with a Bollywood-level smile in 60 minutes. Super clean clinic.",
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
