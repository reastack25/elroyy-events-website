import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/service-card";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services", description: "Explore Elroy Events planning, rental and event execution services." };

export default function ServicesPage() { return <div><section className="bg-navy pb-20 pt-40 text-white"><div className="container-shell"><p className="eyebrow text-white/60">Our services</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">Complete event solutions.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">From planning to execution, we provide everything you need for a memorable and successful event.</p></div></section><section className="container-shell py-20"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div><div className="mt-20 flex flex-col justify-between gap-6 rounded-sm bg-[#f4f5f2] p-8 sm:flex-row sm:items-center sm:p-12"><div><p className="eyebrow">Need help deciding?</p><h2 className="mt-3 text-3xl font-semibold">We can shape the right package with you.</h2></div><Button asChild size="lg"><Link href="/get-a-quote">Get a Quote <ArrowRight className="ml-2" size={18} /></Link></Button></div></section></div>; }
