import type { Metadata } from "next";
import { RegisterForm } from "@/components/forms/register-form";

export const metadata: Metadata = { title: "Create Account", description: "Create an authorized Elroy Events IMS account." };

export default function RegisterPage() {
  return <div className="min-h-[720px] bg-[#f4f5f2] px-5 pb-20 pt-36 sm:px-8 lg:px-12"><div className="mx-auto max-w-md"><p className="eyebrow">Elroy Events IMS</p><h1 className="mt-4 text-4xl font-semibold">Create an account.</h1><p className="mt-4 text-navy/60">Staff accounts are subject to backend approval and role controls.</p><div className="mt-8"><RegisterForm /></div></div></div>;
}
