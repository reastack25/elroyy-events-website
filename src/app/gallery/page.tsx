"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryCategories, galleryItems } from "@/data/gallery";

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const visible = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);
  return <div><section className="bg-navy pb-20 pt-40 text-white"><div className="container-shell"><p className="eyebrow text-white/60">A closer look</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">Moments, spaces and details.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Explore a selection of event environments and equipment details that inspire the way we work.</p></div></section><section className="container-shell py-20"><div className="flex flex-wrap gap-2" aria-label="Gallery categories">{galleryCategories.map((category) => <button key={category} onClick={() => setActive(category)} className={`focus-ring rounded-full border px-4 py-2 text-sm transition ${active === category ? "border-burgundy bg-burgundy text-white" : "border-navy/15 hover:border-burgundy hover:text-burgundy"}`} aria-pressed={active === category}>{category}</button>)}</div><div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">{visible.map((item) => <article key={item.title} className="group relative mb-5 break-inside-avoid overflow-hidden rounded-sm bg-navy"><Image src={item.image} alt={item.alt} width={1400} height={1050} className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 p-5 pt-16 text-white"><p className="eyebrow text-white/60">{item.category}</p><h2 className="mt-2 text-xl font-semibold">{item.title}</h2></div></article>)}</div>{visible.length === 0 && <p className="py-16 text-center text-navy/60">More work in this category will be added soon.</p>}<div className="mt-16 rounded-sm bg-[#f4f5f2] p-8 sm:p-12"><p className="eyebrow">Planning something of your own?</p><div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><h2 className="max-w-xl text-3xl font-semibold">Let&apos;s talk about the atmosphere you want to create.</h2><Button asChild><a href="/get-a-quote">Request a quote <ArrowRight className="ml-2" size={17} /></a></Button></div></div></section></div>;
}
