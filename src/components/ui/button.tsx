import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: "primary" | "secondary" | "ghost"; size?: "sm" | "md" | "lg" };

export function Button({ className, variant = "primary", size = "md", asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component className={cn("focus-ring inline-flex items-center justify-center rounded-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50", { "bg-burgundy text-white hover:bg-[#72000f]": variant === "primary", "border border-white/40 bg-white/5 text-white hover:bg-white/10": variant === "secondary", "text-navy hover:text-burgundy": variant === "ghost", "px-4 py-2 text-sm": size === "sm", "px-5 py-3 text-sm": size === "md", "px-7 py-4": size === "lg" }, className)} {...props} />;
}
