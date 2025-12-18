
export interface Attraction {
  name: string;
  description: string;
  distance: string;
  image: string;
}

export interface CabinFeature {
  title: string;
  description: string;
}

export interface Cabin {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mainFeatures: string[];
  detailedSections: { title: string; content: string }[];
  attractions: Attraction[];
  defaultImages: string[];
  bookingUrl?: string;
}

export interface CabinImages {
  [cabinId: string]: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}