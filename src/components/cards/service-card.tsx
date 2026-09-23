import type { LucideIcon } from "lucide-react";
import { Armchair, Boxes, BriefcaseBusiness, Cake, Camera, ChefHat, Construction, LampCeiling, Truck, Users, Volume2, Warehouse } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon: LucideIcon = service.icon;
  return <article className="group rounded-sm border border-navy/10 bg-canvas p-7 transition duration-300 hover:-translate-y-1 hover:border-burgundy hover:shadow-soft"><div className="flex items-start justify-between"><Icon className="text-burgundy" size={27} strokeWidth={1.5} /><span className="font-stat text-sm text-navy/35">{String(index + 1).padStart(2, "0")}</span></div><h2 className="mt-10 text-xl font-semibold">{service.title}</h2><p className="mt-3 text-sm leading-6 text-navy/60">{service.description}</p><a className="focus-ring mt-6 inline-flex items-center text-sm font-semibold text-burgundy hover:underline" href="/get-a-quote">Discuss this service <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">→</span></a></article>;
}
