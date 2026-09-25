import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProtectedContent } from "@/components/auth/protected-content";

export const metadata: Metadata = { title: "Inventory", description: "View authorized event equipment inventory and event-ready resources." };

const inventory = [
  { title: "Wedding setups", description: "Chairs, lounge seating, signage, glassware and premium décor packages.", stock: "12 collections" },
  { title: "Corporate event kits", description: "Stage accessories, AV stations, branded signage and desk arrangements.", stock: "8 active kits" },
  { title: "Outdoor equipment", description: "Tents, lighting rigs, generators, flooring and weather protection packages.", stock: "19 units" },
  { title: "Hospitality support", description: "Catering support equipment, service tables, linens and guest-flow items.", stock: "6 checklists" },
];

export default function InventoryPage() {
  return <ProtectedContent>
    <div className="container-shell py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Inventory workspace</p>
          <h1 className="mt-4 text-5xl font-semibold">Event-ready assets and resources.</h1>
        </div>
        <Button asChild size="lg"><Link href="/get-a-quote">Request equipment <ArrowRight className="ml-2" size={18} /></Link></Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {inventory.map((item) => (
          <article key={item.title} className="rounded-sm border border-navy/10 bg-canvas p-6 shadow-soft">
            <Box className="text-burgundy" size={20} />
            <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-navy/60">{item.description}</p>
            <p className="mt-5 text-sm font-semibold text-navy">{item.stock}</p>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-sm bg-navy p-8 text-white sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-white/60">Operations overview</p>
            <h2 className="mt-4 text-3xl font-semibold">Everything your team needs for confident event delivery.</h2>
          </div>
          <div className="space-y-4 text-sm text-white/75">
            <div className="flex items-start gap-3"><Check className="mt-0.5 text-burgundy" size={18} /> <span>Inventory status updates by category</span></div>
            <div className="flex items-start gap-3"><Check className="mt-0.5 text-burgundy" size={18} /> <span>Equipment allocation tracked for each event</span></div>
            <div className="flex items-start gap-3"><Check className="mt-0.5 text-burgundy" size={18} /> <span>Delivery and setup coordination built into planning</span></div>
          </div>
        </div>
      </section>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <div className="rounded-sm border border-navy/10 bg-[#f4f5f2] p-6">
          <Calendar className="text-burgundy" size={20} />
          <h3 className="mt-4 text-xl font-semibold">Upcoming events</h3>
          <p className="mt-3 text-sm leading-6 text-navy/60">2 weddings, 1 venue setup, and 3 corporate activations on the planning board.</p>
        </div>
        <div className="rounded-sm border border-navy/10 bg-[#f4f5f2] p-6">
          <Box className="text-burgundy" size={20} />
          <h3 className="mt-4 text-xl font-semibold">High-demand items</h3>
          <p className="mt-3 text-sm leading-6 text-navy/60">Tent structures, outdoor lighting, lounge setups and premium stool packs are currently active.</p>
        </div>
        <div className="rounded-sm border border-navy/10 bg-[#f4f5f2] p-6">
          <ArrowRight className="text-burgundy" size={20} />
          <h3 className="mt-4 text-xl font-semibold">Next action</h3>
          <p className="mt-3 text-sm leading-6 text-navy/60">Review outstanding equipment requests and confirm delivery windows before Friday.</p>
        </div>
      </div>
    </div>
  </ProtectedContent>;
}
