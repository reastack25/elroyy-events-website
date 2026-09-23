import type { LucideIcon } from "lucide-react";
import { Armchair, Boxes, BriefcaseBusiness, Cake, Camera, ChefHat, Construction, LampCeiling, Truck, Users, Volume2, Warehouse } from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };

export const services: Service[] = [
  { title: "Tent Hire", description: "Elegant, weather-ready structures for intimate gatherings and large celebrations.", icon: Warehouse },
  { title: "Furniture Hire", description: "Comfortable, coordinated seating and tables that complete your event setting.", icon: Armchair },
  { title: "Event Décor", description: "Thoughtful styling details that give every event its own character.", icon: Cake },
  { title: "Lighting & Sound", description: "Atmosphere, clarity and energy from professional event production equipment.", icon: LampCeiling },
  { title: "Stage & Trussing", description: "Safe, polished staging solutions for performances, speeches and brand moments.", icon: Construction },
  { title: "LED Screens & Projection", description: "Crisp visual experiences for conferences, launches and celebrations.", icon: Camera },
  { title: "Catering Equipment", description: "Practical, presentable equipment for smooth food and beverage service.", icon: ChefHat },
  { title: "Logistics & Transport", description: "Coordinated delivery, collection and setup where your event needs us.", icon: Truck },
  { title: "Event Staffing", description: "A professional support team to help your event run with confidence.", icon: Users },
  { title: "Corporate Events", description: "Reliable event solutions for teams, brands, conferences and launches.", icon: BriefcaseBusiness },
  { title: "Weddings", description: "Beautiful, considered details for celebrations that feel truly personal.", icon: Cake },
  { title: "Private Events", description: "Flexible event support for birthdays, graduations and special occasions.", icon: Boxes },
];
