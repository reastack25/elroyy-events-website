import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = { title: "Journal", description: "Event planning, equipment and production insights from Elroy Events." };

export default function BlogPage() {
  return <div><section className="bg-navy pb-20 pt-40 text-white"><div className="container-shell"><p className="eyebrow text-white/60">The Elroy journal</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">Ideas for better events.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Practical guidance for planning memorable celebrations, corporate gatherings and thoughtful event environments.</p></div></section><section className="container-shell py-20"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post) => <article key={post.slug} className="group overflow-hidden rounded-sm border border-navy/10 bg-canvas transition hover:-translate-y-1 hover:shadow-soft"><Link href={`/blog/${post.slug}`} className="block"><div className="relative aspect-[4/3] overflow-hidden bg-[#f4f5f2]"><Image src={post.image} alt={post.alt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" /></div><div className="p-7"><p className="eyebrow">{post.category}</p><h2 className="mt-3 text-2xl font-semibold">{post.title}</h2><p className="mt-4 text-sm leading-6 text-navy/60">{post.excerpt}</p><div className="mt-6 flex items-center gap-4 text-xs text-navy/50"><span className="inline-flex items-center gap-1"><CalendarDays size={14} />{new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(post.date))}</span><span className="inline-flex items-center gap-1"><Clock3 size={14} />{post.readTime}</span></div><span className="mt-6 inline-flex items-center font-semibold text-burgundy">Read article <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={16} /></span></div></Link></article>)}</div></section></div>;
}
