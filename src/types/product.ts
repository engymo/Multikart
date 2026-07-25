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



// --- 1. Get Product Details Types ---
export interface ProductDetailsResponse {
  code: number; 
  message: string;
  data: {
    product: any | null;
    product_informations: any[];
    options: any[];
    options_check: any[];
    images: any[];
    similar_products: any[];
    reviews: any[];
  };
}

// --- 2. Product Option Price & Qty Types ---
export interface OptionItem {
  option_id: number;
  value_id: string;
}

export interface GetOptionPricePayload {
  product_id: number;
  options: OptionItem[];
}

export interface OptionPriceData {
  price: number;
  is_offer: boolean;
  new_price: number;
  quanity: number; 
  min_qnt: number;
  max_qnt: number;
  final_option: number;
  is_limit: string;
  image: string | null;
}

export interface OptionPriceResponse {
  code: number;
  message: string;
  data: OptionPriceData;
}