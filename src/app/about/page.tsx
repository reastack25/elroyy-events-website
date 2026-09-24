import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "About Us", description: "Learn about Elroy Events and our approach to premium event solutions." };

const values = [
  { title: "Professional service", description: "Clear communication and dependable support from the first conversation onward.", icon: Users },
  { title: "Thoughtful planning", description: "Every detail is considered to protect the flow of your event experience.", icon: Target },
  { title: "Premium standards", description: "We work with quality equipment, tested processes and a polished finish.", icon: Sparkles },
  { title: "Trust and reliability", description: "We value punctuality, clarity and consistency in how we deliver.", icon: ShieldCheck },
];

const storyPoints = [
  { title: "What we do", text: "Elroy Events provides planning support, equipment hire and event execution for weddings, private celebrations, corporate gatherings and premium community events." },
  { title: "How we work", text: "We combine operational planning with practical delivery so the event feels considered, coordinated and effortless for guests." },
  { title: "Why it matters", text: "Great events are not only visually impressive; they need timing, equipment, staffing and calm execution behind the scenes." },
];

export default function AboutPage() {
  return <div>
    <section className="bg-navy pb-20 pt-40 text-white"><div className="container-shell"><p className="eyebrow text-white/60">About Elroy Events</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">Purposeful planning. Beautifully delivered.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">We help clients create memorable events through dependable equipment, professional coordination and carefully planned execution.</p></div></section>
    <section className="container-shell grid gap-12 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"><div><p className="eyebrow">Company introduction</p><h2 className="mt-4 text-4xl font-semibold">Event solutions shaped around your goals.</h2><p className="mt-6 text-lg leading-8 text-navy/65">Elroy Events supports clients seeking premium event experiences, from the setup of elegant spaces to the delivery of confident event execution. Our focus is simple: create an event that feels effortless for guests and dependable for clients.</p></div><div className="overflow-hidden rounded-sm border border-navy/10 bg-[#f4f5f2] p-3"><div className="relative aspect-[4/3] overflow-hidden rounded-sm"><Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85" alt="Event tent and tables prepared for a premium event" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" /></div></div></section>
    <section className="bg-[#f4f5f2] py-24"><div className="container-shell"><p className="eyebrow">Our story</p><h2 className="mt-4 text-4xl font-semibold">Built around real event needs.</h2><div className="mt-10 grid gap-6 lg:grid-cols-3">{storyPoints.map((point) => <article key={point.title} className="rounded-sm border border-navy/10 bg-canvas p-7 shadow-soft"><h3 className="text-xl font-semibold">{point.title}</h3><p className="mt-4 text-sm leading-7 text-navy/60">{point.text}</p></article>)}</div></div></section>
    <section className="container-shell py-24"><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">{values.map(({ title, description, icon: Icon }) => <article key={title} className="rounded-sm border border-navy/10 p-7 transition hover:border-burgundy hover:shadow-soft"><Icon className="text-burgundy" size={24} strokeWidth={1.5} /><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-navy/60">{description}</p></article>)}</div></section>
    <section className="container-shell pb-24"><div className="rounded-sm bg-navy p-8 text-white sm:p-14"><p className="eyebrow text-white/60">Why clients choose us</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold">Professional event support, premium presentation and dependable coordination.</h2><div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">{["Premium equipment", "Responsive communication", "Helpful planning support", "Strong setup execution", "Clean event presentation"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2"><ChevronRight size={14} className="text-burgundy" />{item}</span>)}</div><div className="mt-10"><Button asChild size="lg"><Link href="/get-a-quote">Request a quote <ArrowRight className="ml-2" size={18} /></Link></Button></div></div></section>
  </div>;
}
