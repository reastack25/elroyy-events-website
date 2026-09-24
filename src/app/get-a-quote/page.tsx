import type { Metadata } from "next";
import { ArrowRight, CalendarDays, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a quote for your next event with Elroy Events.",
};

export default function QuotePage() {
  return <div>
    <section className="bg-navy pb-20 pt-40 text-white">
      <div className="container-shell">
        <p className="eyebrow text-white/60">Request your quote</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">Tell us about your event.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Share your plans and we&apos;ll prepare a tailored recommendation for your venue, guest count and preferred setup.</p>
      </div>
    </section>

    <section className="container-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-sm border border-navy/10 bg-[#f4f5f2] p-8">
          <h2 className="text-2xl font-semibold">Quick info</h2>
          <div className="mt-8 space-y-5 text-sm text-navy/70">
            <div className="flex items-start gap-3"><Phone className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Call us</p><p>+254 700 000 000</p></div></div>
            <div className="flex items-start gap-3"><Mail className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Email</p><p>hello@elroyevents.co.ke</p></div></div>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Location</p><p>Kenya · By appointment</p></div></div>
            <div className="flex items-start gap-3"><CalendarDays className="mt-0.5 text-burgundy" size={18} /><div><p className="font-semibold text-navy">Planning window</p><p>Share your date as early as possible.</p></div></div>
          </div>
        </div>

        <form className="rounded-sm border border-navy/10 bg-canvas p-8 shadow-soft">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm font-medium text-navy">Full Name<input aria-label="Full Name" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="text" placeholder="Your full name" /></label>
            <label className="text-sm font-medium text-navy">Company / Organization<input aria-label="Company / Organization" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="text" placeholder="Company or organization" /></label>
            <label className="text-sm font-medium text-navy">Email<input aria-label="Email" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="email" placeholder="you@example.com" /></label>
            <label className="text-sm font-medium text-navy">Phone Number<input aria-label="Phone Number" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="tel" placeholder="Phone number" /></label>
            <label className="text-sm font-medium text-navy">Event Type<input aria-label="Event Type" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="text" placeholder="Wedding, conference, launch..." /></label>
            <label className="text-sm font-medium text-navy">Event Date<input aria-label="Event Date" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="date" /></label>
            <label className="text-sm font-medium text-navy">Event Location<input aria-label="Event Location" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="text" placeholder="Venue or city" /></label>
            <label className="text-sm font-medium text-navy">Estimated Guest Count<input aria-label="Estimated Guest Count" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="number" placeholder="200" /></label>
            <label className="text-sm font-medium text-navy md:col-span-2">Services Required<textarea aria-label="Services Required" className="mt-2 min-h-[120px] w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" placeholder="Tent hire, décor, lighting, staffing..." /></label>
            <label className="text-sm font-medium text-navy md:col-span-2">Equipment Required<textarea aria-label="Equipment Required" className="mt-2 min-h-[100px] w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" placeholder="List any equipment you need" /></label>
            <label className="text-sm font-medium text-navy">Budget Range<select aria-label="Budget Range" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy"><option>Under KES 100k</option><option>KES 100k – 250k</option><option>KES 250k – 500k</option><option>KES 500k – 1M</option><option>Above KES 1M</option></select></label>
            <label className="text-sm font-medium text-navy">Additional Requirements<input aria-label="Additional Requirements" className="mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none focus:border-burgundy" type="text" placeholder="Anything else?" /></label>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg"><a href="mailto:hello@elroyevents.co.ke">Request a Quote <ArrowRight className="ml-2" size={18} /></a></Button>
            <div className="inline-flex items-center gap-2 text-sm text-navy/60"><CheckCircle2 className="text-burgundy" size={16} /> Response within one business day</div>
          </div>
        </form>
      </div>
    </section>
  </div>;
}
