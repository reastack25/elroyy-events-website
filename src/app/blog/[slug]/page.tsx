import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPost, blogPosts } from "@/data/blog";

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: "article", images: [{ url: post.image, alt: post.alt }] } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <article><section className="bg-navy pb-16 pt-36 text-white"><div className="container-shell"><Link href="/blog" className="focus-ring inline-flex items-center text-sm text-white/65 hover:text-white"><ArrowLeft className="mr-2" size={16} />Back to journal</Link><p className="eyebrow mt-12 text-white/60">{post.category}</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold sm:text-6xl">{post.title}</h1><div className="mt-6 flex flex-wrap gap-5 text-sm text-white/60"><span className="inline-flex items-center gap-2"><CalendarDays size={16} />{new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(post.date))}</span><span className="inline-flex items-center gap-2"><Clock3 size={16} />{post.readTime}</span></div></div></section><div className="container-shell"><div className="relative -mt-6 aspect-[16/8] overflow-hidden rounded-sm bg-[#f4f5f2] shadow-soft"><Image src={post.image} alt={post.alt} fill priority className="object-cover" sizes="(min-width: 1280px) 1152px, 100vw" /></div><div className="mx-auto max-w-3xl py-16"><p className="text-xl leading-9 text-navy/75">{post.introduction}</p><div className="mt-12 space-y-10">{post.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-semibold">{section.heading}</h2><p className="mt-4 leading-8 text-navy/65">{section.body}</p></section>)}</div><div className="mt-16 rounded-sm bg-[#f4f5f2] p-8 sm:p-10"><p className="eyebrow">Planning an event?</p><h2 className="mt-3 text-3xl font-semibold">Let&apos;s talk about what you&apos;re creating.</h2><Button asChild className="mt-6"><Link href="/get-a-quote">Request a quote <ArrowRight className="ml-2" size={17} /></Link></Button></div></div></div></article>;
}
