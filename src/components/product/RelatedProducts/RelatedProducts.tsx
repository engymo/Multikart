'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RelatedProductCard } from './RelatedProductsCard';
import { useGetProductDetails } from '@/hooks/useProducts';

import 'swiper/css';

interface RelatedProductsProps {
  productId?: string | number;
}

// استخدام ID تجريبي موجود فعلياً في السيرفر (54277) كقيمة افتراضية
export const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId = 54277 }) => {
  // 1. جلب البيانات من الهوك
  const { data, isLoading, isError } = useGetProductDetails('theme5', productId);

  // 2. حالة التحميل
  if (isLoading) {
    return (
      <div className="container mx-auto text-center py-10">
        <p className="text-gray-500">جاري تحميل المنتجات ذات الصلة...</p>
      </div>
    );
  }

  // 3. حالة الخطأ أو عدم وجود المنتج
  if (isError || (data as any)?.code === -1) {
    return (
      <div className="container mx-auto text-center py-10">
        <p className="text-gray-500">لم يتم العثور على منتجات ذات صلة لهذا الرقم ({productId}).</p>
      </div>
    );
  }

  // 4. قراءة القائمة من مفتاح similar_products بحسب توثيق Postman
  const responseData = data as any;
  const relatedList = responseData?.data?.similar_products || [];

  return (
    <section className="container mx-auto lg:px-20 px-4 mt-5">
      <div className="mb-6">
        <h2 className="text-base font-bold tracking-tight">
          Related Products
        </h2>
      </div>

      {/* عرض المنتجات إذا احتوت القائمة على عناصر */}
      {relatedList && relatedList.length > 0 ? (
        <Swiper
          loop={relatedList.length > 4}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {relatedList.map((productItem: any) => (
            <SwiperSlide key={productItem.id || productItem._id}>
              <RelatedProductCard product={productItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500 text-center py-4">
          لا توجد منتجات ذات صلة حالياً لهذا المنتج.
        </p>
      )}
    </section>
  );
};

export default RelatedProducts;