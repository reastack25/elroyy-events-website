import type { LucideIcon } from "lucide-react";
import { Award, ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";

export const strengths: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Premium equipment", description: "Well-presented equipment selected to support a polished guest experience.", icon: Sparkles },
  { title: "Professional team", description: "Responsive people who understand the detail behind a successful event.", icon: Award },
  { title: "Reliable delivery", description: "Clear coordination from planning through setup and collection.", icon: ShieldCheck },
  { title: "Quality execution", description: "A practical, careful approach that keeps your event moving smoothly.", icon: ClipboardCheck },
];
