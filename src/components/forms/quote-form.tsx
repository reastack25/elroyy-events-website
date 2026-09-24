"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quotationService } from "@/services/quotations";

const quoteSchema = z.object({ fullName: z.string().trim().min(2, "Please enter your full name."), company: z.string().trim().optional(), email: z.string().email("Enter a valid email address."), phone: z.string().trim().min(7, "Enter a valid phone number."), eventType: z.string().trim().min(2, "Please tell us the event type."), eventDate: z.string().min(1, "Select an event date."), location: z.string().trim().min(2, "Enter the event location."), guests: z.coerce.number().int().min(1, "Enter an estimated guest count."), services: z.string().trim().min(2, "Tell us which services you need."), equipment: z.string().trim().optional(), budget: z.string().min(1, "Select a budget range."), additional: z.string().trim().optional() });
type QuoteValues = z.infer<typeof quoteSchema>;
const inputClass = "mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting }, setError, clearErrors } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema), mode: "onBlur", defaultValues: { budget: "" } });
  useEffect(() => { const equipment = searchParams.get("equipment"); if (equipment) setValue("equipment", equipment); }, [searchParams, setValue]);
  const onSubmit = async (values: QuoteValues) => {
    clearErrors("root");
    setSubmitted(false);
    try {
      await quotationService.submit(values);
      reset();
      setSubmitted(true);
    } catch {
      setError("root", { message: "Something went wrong while submitting your request. Please try again." });
    }
  };
  return <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-sm border border-navy/10 bg-canvas p-8 shadow-soft"><div className="grid gap-6 md:grid-cols-2"><Field label="Full Name" error={errors.fullName?.message}><input {...register("fullName")} className={inputClass} type="text" autoComplete="name" placeholder="Your full name" /></Field><Field label="Company / Organization" error={errors.company?.message}><input {...register("company")} className={inputClass} type="text" placeholder="Company or organization" /></Field><Field label="Email" error={errors.email?.message}><input {...register("email")} className={inputClass} type="email" autoComplete="email" placeholder="you@example.com" /></Field><Field label="Phone Number" error={errors.phone?.message}><input {...register("phone")} className={inputClass} type="tel" autoComplete="tel" placeholder="Phone number" /></Field><Field label="Event Type" error={errors.eventType?.message}><input {...register("eventType")} className={inputClass} type="text" placeholder="Wedding, conference, launch..." /></Field><Field label="Event Date" error={errors.eventDate?.message}><input {...register("eventDate")} className={inputClass} type="date" /></Field><Field label="Event Location" error={errors.location?.message}><input {...register("location")} className={inputClass} type="text" placeholder="Venue or city" /></Field><Field label="Estimated Guest Count" error={errors.guests?.message}><input {...register("guests")} className={inputClass} type="number" min="1" placeholder="200" /></Field><Field label="Services Required" error={errors.services?.message} wide><textarea {...register("services")} className={`${inputClass} min-h-[120px]`} placeholder="Tent hire, décor, lighting, staffing..." /></Field><Field label="Equipment Required" error={errors.equipment?.message} wide><textarea {...register("equipment")} className={`${inputClass} min-h-[100px]`} placeholder="List any equipment you need" /></Field><Field label="Budget Range" error={errors.budget?.message}><select {...register("budget")} className={inputClass}><option value="">Select a range</option><option>Under KES 100k</option><option>KES 100k – 250k</option><option>KES 250k – 500k</option><option>KES 500k – 1M</option><option>Above KES 1M</option></select></Field><Field label="Additional Requirements" error={errors.additional?.message}><input {...register("additional")} className={inputClass} type="text" placeholder="Anything else?" /></Field></div>{errors.root && <p className="mt-4 text-sm text-burgundy" role="alert">{errors.root.message}</p>}{submitted && <div className="mt-4 inline-flex items-center gap-2 text-sm text-green-700" role="status" aria-live="polite"><CheckCircle2 size={16} />Request received. We&apos;ll be in touch soon.</div>}<div className="mt-8 flex flex-wrap items-center gap-4"><Button type="submit" size="lg" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="mr-2 animate-spin" size={18} />Submitting...</> : <>Request a Quote <ArrowRight className="ml-2" size={18} /></>}</Button></div></form>;
}

function Field({ label, error, children, wide = false }: { label: string; error?: string; children: React.ReactNode; wide?: boolean }) { return <label className={`text-sm font-medium text-navy ${wide ? "md:col-span-2" : ""}`}>{label}{children}{error && <span className="mt-1 block text-xs font-normal text-burgundy" role="alert">{error}</span>}</label>; }
