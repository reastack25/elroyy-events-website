import type { Metadata } from "next";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = { title: "Contact Us", description: "Get in touch with Elroy Events for event planning, rentals and support." };

export default function ContactPage() {
  return <div><section className="bg-navy pb-20 pt-40 text-white"><div className="container-shell"><p className="eyebrow text-white/60">Get in touch</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">Let&apos;s plan the right event experience.</h1></div></section><section className="container-shell grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]"><div className="rounded-sm border border-navy/10 bg-[#f4f5f2] p-8"><h2 className="text-2xl font-semibold">Contact details</h2><div className="mt-8 space-y-6 text-sm text-navy/70"><div className="flex items-start gap-3"><Phone className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Phone</p><a href="tel:+254700000000" className="hover:text-burgundy">+254 700 000 000</a></div></div><div className="flex items-start gap-3"><Mail className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Email</p><a href="mailto:hello@elroyevents.co.ke" className="hover:text-burgundy">hello@elroyevents.co.ke</a></div></div><div className="flex items-start gap-3"><MapPin className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Location</p><p>Kenya · By appointment</p></div></div><div className="flex items-start gap-3"><Clock3 className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Business hours</p><p>Mon – Sat: 8:00 AM – 6:00 PM</p></div></div></div></div><ContactForm /></section></div>;
}
