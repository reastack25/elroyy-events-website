"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({ name: z.string().trim().min(2, "Please enter your name."), email: z.string().email("Enter a valid email address."), phone: z.string().trim().min(7, "Enter a valid phone number."), subject: z.string().trim().min(2, "Please enter a subject."), message: z.string().trim().min(10, "Please provide a little more detail.") });
type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful }, setError } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), mode: "onBlur" });
  const onSubmit = async (values: ContactValues) => { try { await new Promise((resolve) => setTimeout(resolve, 600)); console.info("Contact enquiry ready for API submission", values); reset(); } catch { setError("root", { message: "Something went wrong while sending your message. Please try again." }); } };
  return <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-sm border border-navy/10 bg-canvas p-8 shadow-soft"><div className="grid gap-6 sm:grid-cols-2"><Field label="Name" error={errors.name?.message}><input {...register("name")} className={inputClass} type="text" placeholder="Your name" /></Field><Field label="Email" error={errors.email?.message}><input {...register("email")} className={inputClass} type="email" placeholder="you@example.com" /></Field><Field label="Phone" error={errors.phone?.message}><input {...register("phone")} className={inputClass} type="tel" placeholder="Phone number" /></Field><Field label="Subject" error={errors.subject?.message}><input {...register("subject")} className={inputClass} type="text" placeholder="How can we help?" /></Field></div><Field label="Message" error={errors.message?.message}><textarea {...register("message")} className={`${inputClass} min-h-[160px]`} placeholder="Tell us about your event requirements" /></Field>{errors.root && <p className="mt-4 text-sm text-burgundy" role="alert">{errors.root.message}</p>}{isSubmitSuccessful && <p className="mt-4 text-sm text-green-700" role="status">Thanks — your message has been received. We&apos;ll be in touch soon.</p>}<div className="mt-8"><Button type="submit" size="lg" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="mr-2 animate-spin" size={18} />Sending...</> : <>Send Message <ArrowRight className="ml-2" size={18} /></>}</Button></div></form>;
}

const inputClass = "mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20";
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) { return <label className="mt-6 block text-sm font-medium text-navy first:mt-0">{label}{children}{error && <span className="mt-1 block text-xs font-normal text-burgundy" role="alert">{error}</span>}</label>; }
