"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LoaderCircle, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { authService } from "@/services/auth";

const schema = z.object({ fullName: z.string().trim().min(2, "Please enter your full name."), email: z.string().email("Enter a valid email address."), phone: z.string().trim().min(7, "Enter a valid phone number."), password: z.string().min(8, "Password must be at least 8 characters."), confirmPassword: z.string() }).refine((values) => values.password === values.confirmPassword, { path: ["confirmPassword"], message: "Passwords do not match." });
type Values = z.infer<typeof schema>;
const inputClass = "mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<Values>({ resolver: zodResolver(schema) });
  const onSubmit = async ({ confirmPassword: _confirmPassword, ...values }: Values) => { setMessage(null); try { await authService.register(values); setMessage("Your access request was submitted for review."); } catch { setError("root", { message: "We could not create your account. Please try again." }); } };
  return <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-sm border border-navy/10 bg-canvas p-7 shadow-soft"><Field label="Full Name" error={errors.fullName?.message}><input {...register("fullName")} className={inputClass} autoComplete="name" placeholder="Your full name" /></Field><Field label="Email" error={errors.email?.message}><input {...register("email")} className={inputClass} type="email" autoComplete="email" placeholder="you@example.com" /></Field><Field label="Phone Number" error={errors.phone?.message}><input {...register("phone")} className={inputClass} type="tel" autoComplete="tel" placeholder="Phone number" /></Field><Field label="Password" error={errors.password?.message}><PasswordInput register={register("password")} visible={showPassword} toggle={() => setShowPassword((value) => !value)} /></Field><Field label="Confirm Password" error={errors.confirmPassword?.message}><input {...register("confirmPassword")} className={inputClass} type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Repeat your password" /></Field><p className="mt-5 text-xs leading-5 text-navy/55">Role assignment is controlled securely by the backend. Public registration cannot create an Admin account.</p>{errors.root && <p className="mt-4 text-sm text-burgundy" role="alert">{errors.root.message}</p>}{message && <p className="mt-4 text-sm text-green-700" role="status">{message}</p>}<Button type="submit" size="lg" className="mt-7 w-full" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="mr-2 animate-spin" size={18} />Creating...</> : <><UserPlus className="mr-2" size={18} />Create Account</>}</Button><p className="mt-6 text-center text-sm text-navy/60">Already have an account? <Link href="/auth/login" className="font-semibold text-burgundy hover:underline">Sign in</Link></p></form>;
}

function PasswordInput({ register, visible, toggle }: { register: ReturnType<typeof import("react-hook-form").useForm<Values>>["register"] extends never ? never : ReturnType<typeof import("react-hook-form").useForm<Values>>["register"] extends infer T ? T : never; visible: boolean; toggle: () => void }) { return <div className="relative"><input {...register("password")} className={`${inputClass} pr-12`} type={visible ? "text" : "password"} autoComplete="new-password" placeholder="At least 8 characters" /><button type="button" onClick={toggle} className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 text-navy/50" aria-label={visible ? "Hide password" : "Show password"}>{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>; }
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) { return <label className="mt-5 block text-sm font-medium first:mt-0">{label}{children}{error && <span className="mt-1 block text-xs font-normal text-burgundy" role="alert">{error}</span>}</label>; }
