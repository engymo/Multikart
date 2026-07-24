'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { relatedProductsData } from '@/data/RelatedProducts';
import { RelatedProductCard } from './RelatedProductsCard';

import 'swiper/css';

export const RelatedProducts: React.FC = () => {
  return (
    <section className="container mx-auto lg:px-20 px-4 mt-5">
      <div className="mb-6">
        <h2 className="text-base font-bold tracking-tight">
          Related Products
        </h2>
      </div>

      <Swiper
        loop={true}
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
        {relatedProductsData.map((product) => (
          <SwiperSlide key={product.id}>
            <RelatedProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedProducts;