import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" });
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-manrope" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "Elroy Events | Creating Extraordinary Events", template: "%s | Elroy Events" }, description: "Premium event planning, equipment rental and professional event solutions for unforgettable experiences.", alternates: { canonical: "/" }, openGraph: { title: "Elroy Events", description: "Creating extraordinary events.", type: "website", url: siteUrl, siteName: "Elroy Events" }, twitter: { card: "summary_large_image", title: "Elroy Events", description: "Creating extraordinary events." } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}><Navbar /><main>{children}</main><Footer /></body></html>; }
