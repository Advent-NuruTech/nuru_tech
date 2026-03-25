export type RecordStatus = "Pending" | "Confirmed" | "Completed";

export type HeroSettings = {
  id: string;
  headline: string;
  subtext: string;
  videoUrl: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  updatedAt?: unknown;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  
  order: number;
  updatedAt?: unknown;
};

export type PortfolioItem = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  tags: string[];
  imageUrl: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Live" | "In Development";
  testimonial?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type Testimonial = {
  id: string;
  name: string;
  service: string;
  comment: string;
  imageUrl?: string;
  rating: number;
  approved: boolean;
  createdAt?: unknown;
};

export type BlogArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  tags: string[];
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type MediaAsset = {
  id: string;
  type: "image" | "video";
  title: string;
  url: string;
  size?: number;
  createdAt?: unknown;
};

export type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  status: RecordStatus;
  createdAt?: unknown;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  createdAt?: unknown;
};

export type SiteSettings = {
  id: string;
  siteName: string;
  supportEmail: string;
  supportPhone: string;
  defaultTheme: "light" | "dark";
  updatedAt?: unknown;
};
