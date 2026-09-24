import type { Metadata } from "next";
import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = { title: "Sign In", description: "Sign in to the Elroy Events IMS workspace." };

export default function LoginPage() {
  return <div className="min-h-[720px] bg-[#f4f5f2] px-5 pb-20 pt-36 sm:px-8 lg:px-12"><div className="mx-auto max-w-md"><p className="eyebrow">Elroy Events IMS</p><h1 className="mt-4 text-4xl font-semibold">Welcome back.</h1><p className="mt-4 text-navy/60">Sign in to continue to your workspace.</p><div className="mt-8"><LoginForm /></div></div></div>;
}
