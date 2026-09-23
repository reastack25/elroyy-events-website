export type GalleryItem = { title: string; category: string; image: string; alt: string };

export const galleryCategories = ["All", "Weddings", "Corporate", "Conferences", "Graduations", "Private Events", "Décor", "Tents", "Equipment"] as const;

export const galleryItems: GalleryItem[] = [
  { title: "Garden wedding setting", category: "Weddings", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85", alt: "Outdoor wedding table setting" },
  { title: "Conference production", category: "Conferences", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85", alt: "Audience at a professional conference" },
  { title: "Warm evening décor", category: "Décor", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85", alt: "Celebration décor with balloons and lights" },
  { title: "Elegant reception", category: "Weddings", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85", alt: "Wedding reception tables and floral arrangements" },
  { title: "Corporate gathering", category: "Corporate", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85", alt: "People attending an indoor event" },
  { title: "Event lighting detail", category: "Equipment", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=85", alt: "Decorative event lights" },
  { title: "Celebration under canvas", category: "Tents", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1400&q=85", alt: "Tables arranged under an event tent" },
  { title: "Graduation celebration", category: "Graduations", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85", alt: "Graduates celebrating outdoors" },
];
