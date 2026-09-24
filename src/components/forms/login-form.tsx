"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, LoaderCircle, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { authService } from "@/services/auth";

const schema = z.object({ email: z.string().email("Enter a valid email address."), password: z.string().min(8, "Password must be at least 8 characters."), remember: z.boolean().default(false) });
type Values = z.infer<typeof schema>;
const inputClass = "mt-2 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/20";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { remember: false } });
  const onSubmit = async (values: Values) => { try { await authService.login(values); router.push("/inventory"); router.refresh(); } catch { setError("root", { message: "We could not sign you in. Check your details and try again." }); } };
  return <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-sm border border-navy/10 bg-canvas p-7 shadow-soft"><label className="block text-sm font-medium">Email<input {...register("email")} className={inputClass} type="email" autoComplete="email" placeholder="you@example.com" />{errors.email && <span className="mt-1 block text-xs font-normal text-burgundy">{errors.email.message}</span>}</label><label className="mt-5 block text-sm font-medium">Password<div className="relative"><input {...register("password")} className={`${inputClass} pr-12`} type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Your password" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 text-navy/50" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>{errors.password && <span className="mt-1 block text-xs font-normal text-burgundy">{errors.password.message}</span>}</label><div className="mt-5 flex items-center justify-between gap-3 text-sm"><label className="inline-flex items-center gap-2"><input {...register("remember")} type="checkbox" className="accent-burgundy" />Remember me</label><Link href="#" className="text-burgundy hover:underline">Forgot password?</Link></div>{errors.root && <p className="mt-4 text-sm text-burgundy" role="alert">{errors.root.message}</p>}<Button type="submit" size="lg" className="mt-7 w-full" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="mr-2 animate-spin" size={18} />Signing in...</> : <><LogIn className="mr-2" size={18} />Sign In</>}</Button><p className="mt-6 text-center text-sm text-navy/60">Need an account? <Link href="/auth/register" className="font-semibold text-burgundy hover:underline">Request access</Link></p></form>;
}
