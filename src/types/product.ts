export interface ProductImage {
  id: number;
  image: string;
  alt:string;
}

export interface ProductColor {
  id: number;
  name: string;
  image: string;
}

export interface ProductAccordion {
  id: number;
  title: string;
  content: string;
}

export interface ProductPayment {
  id: number;
  image: string;
}

export interface ProductFeature {
  id: number;
  icon: string;
  text: string;
}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  sku: string;
  weight: string;
  quantity: number;
  stock: string;
  description: string;
  information: string;

  images: ProductImage[];
  colors: ProductColor[];
  accordion: ProductAccordion[];
  payments: ProductPayment[];
  securePayments: ProductPayment[];
  delivery: ProductFeature[];
}