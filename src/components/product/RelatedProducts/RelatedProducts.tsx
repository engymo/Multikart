"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { relatedProducts } from "@/data/RelatedProducts";
import ProductCard from "@/components/product/ProductCard/ProductCard";

const RelatedProducts: React.FC = () => {
    return (

        <section className="container mx-auto px-3">

            <div className="">
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
                    Related Products
                </h3>
                <hr className="mt-2 border-gray-200" />
            </div>

            {/* Grid view (Desktop/Tablet) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Swiper slider (Mobile view) */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    pagination={{ clickable: true }}
                    className="pb-10"
                >
                    {relatedProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RelatedProducts;