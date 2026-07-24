export interface RelatedProduct {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  offerTag?: string;
}