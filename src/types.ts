export interface NavCategory {
  id: string;
  name: string;
  links: string[];
  featuredImage: string;
  products: {
    name: string;
    image: string;
  }[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
