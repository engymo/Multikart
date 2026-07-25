import { useQuery, useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/apiClient';
import {
  ProductDetailsResponse,
  GetOptionPricePayload,
  OptionPriceResponse,
} from '@/types/product';

// ----------------------------------------------------
// 1. API: Show Product (GET Request)
// ----------------------------------------------------
export const fetchProductDetails = async (
  theme: string,
  productId: number | string
): Promise<ProductDetailsResponse> => {
  const response = await apiClient.get<ProductDetailsResponse>(
    `/product/${theme}/${productId}`
  );
  return response.data;
};

export const useGetProductDetails = (
  theme: string = 'theme5',
  productId: number | string
) => {
  return useQuery({
    queryKey: ['product', theme, productId],
    queryFn: () => fetchProductDetails(theme, productId),
    enabled: !!productId, 
  });
};

// ----------------------------------------------------
// 2. API: Get Price & Qty for Product Option (POST Request)
// ----------------------------------------------------
const fetchOptionPrice = async ({
  product_id,
  options,
}: GetOptionPricePayload): Promise<OptionPriceResponse> => {
  const response = await apiClient.post<OptionPriceResponse>(
    `/product_price/${product_id}`,
    { options }
  );
  return response.data;
};

export const useGetOptionPrice = () => {
  return useMutation({
    mutationFn: fetchOptionPrice,
  });
};