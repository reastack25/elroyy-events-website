export type InventoryItem = { name: string; category: string; description: string; image: string; alt: string };

export const inventoryCategories = ["All", "Tents", "Chairs", "Tables", "Décor", "Lighting", "Sound", "Stages", "Screens", "Catering Equipment"] as const;

export const inventoryItems: InventoryItem[] = [
  { name: "100-Seater Tent", category: "Tents", description: "A clean, adaptable shelter for weddings, parties and corporate gatherings.", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=85", alt: "Event tent with arranged tables" },
  { name: "Cross-back Chairs", category: "Chairs", description: "A refined seating option for ceremonies, dinners and receptions.", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85", alt: "Rows of event chairs" },
  { name: "Banquet Tables", category: "Tables", description: "Flexible tables for dining, registration, display and styling.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85", alt: "Tables prepared for a formal event" },
  { name: "Ambient Uplighting", category: "Lighting", description: "Atmospheric lighting to shape the mood and highlight your setting.", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1000&q=85", alt: "Warm lights at an event" },
  { name: "Presentation Screen", category: "Screens", description: "Clear visuals for presentations, speeches, launches and screenings.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85", alt: "Large screen at a conference" },
  { name: "Service & Catering Set", category: "Catering Equipment", description: "Practical pieces that help your service team work smoothly.", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85", alt: "Catering setup prepared for service" },
];
