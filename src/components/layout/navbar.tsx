"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Gallery", "/gallery"], ["Inventory", "/inventory"], ["Blog", "/blog"], ["Contact Us", "/contact"]] as const;

export function Logo() { return <Link href="/" className="focus-ring inline-flex items-center gap-3" aria-label="Elroy Events home"><span className="grid h-10 w-10 place-items-center rounded-full border border-burgundy text-lg font-bold text-burgundy">E</span><span className="font-display text-lg font-bold tracking-tight text-white">ELROYY <span className="text-burgundy">EVENTS</span></span></Link>; }

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-sm"><nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation"><Logo /><div className="hidden items-center gap-5 xl:flex">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`focus-ring relative py-3 text-sm transition ${pathname === href ? "text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-burgundy" : "text-white/70 hover:text-white"}`}>{label}</Link>)}<Button asChild size="sm"><Link href="/get-a-quote">Get a Quote</Link></Button></div><button className="focus-ring rounded-sm p-2 xl:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></nav>{open && <div id="mobile-navigation" className="container-shell border-t border-white/10 pb-6 pt-4 xl:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined} key={href} href={href} className={`block border-b border-white/10 py-3 ${pathname === href ? "font-semibold text-white" : "text-white/80"}`}>{label}</Link>)}<Button asChild className="mt-5 w-full"><Link onClick={() => setOpen(false)} href="/get-a-quote">Get a Quote</Link></Button></div>}</header>;
}
