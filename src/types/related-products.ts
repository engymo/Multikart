export interface RelatedProduct {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  offerTag?: string;
}