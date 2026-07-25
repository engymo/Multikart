'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';
import { RelatedProduct } from '@/types/related-products';
import { RelatedIcon } from "@/data/RelatedProuductIcon";
import { RiDiscountPercentFill } from "@remixicon/react";

interface RelatedProductCardProps {
    product: RelatedProduct;
}

export const RelatedProductCard: React.FC<RelatedProductCardProps> = ({ product }) => {
    const [isInteracted, setIsInteracted] = useState(false);
    return (
        <div className="group relative bg-white border border-gray-100
         rounded-sm overflow-hidden mb-10">
            {/* Product Image Wrapper */}
            <div className="relative aspect-[3/4] w-full overflow-hidden ">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-top transition-transform p-2"
                />

                {/* Rating Badge */}
                <div className="absolute bottom-3 left-3 bg-white
                 px-2 py-1  flex items-center gap-1 text-xs text-gray-700">
                    <i className="ri-star-fill text-amber-400 text-[11px]" />
                    <span className="font-semibold text-[12px]">{product.rating}</span>
                </div>

                {/* Hover Side Menu Actions */}

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    {RelatedIcon.map((action, index) => (
                        <button
                            key={action.icon}
                            aria-label={action.label}
                            style={{
                                transitionDelay: `${index * 75}ms`,
                            }}
                            className="w-8 h-8 bg-white text-[rgb(236,137,81)] rounded-full flex items-center justify-center  
                 hover:bg-[#E27C49] hover:text-white transition-all duration-300
                 opacity-100 translate-y-0
                 lg:opacity-0 lg:-translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
                        >
                            <i className={`${action.icon} text-sm`} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Details Section */}
            <div className="p-4 space-y-1">
                <h3 className="font-semibold text-[rgb(34,34,34)] text-base truncate">{product.title}</h3>
                <p className="text-xs text-gray-400 truncate">{product.subtitle}</p>

                {/* Prices */}
                <div className="flex items-center gap-2 pt-1">
                    <span className="font-meduim text-[rgb(34,34,34)] text-[15px]">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <span className="text-xs text-[rgb(170,170,170)] line-through">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                    {product.discountPercentage && (
                        <span className="text-[14px] font-semibold text-[#E27C49]">
                            {product.discountPercentage}% Off
                        </span>
                    )}
                </div>
            </div>

            {/* Hover Moving Footer Banner */}
            <div
                className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden"
                onClick={() => setIsInteracted((prev) => !prev)} >
                {/* Footer Offer Banner */}
                {product.offerTag && (
                    <div className="relative overflow-hidden border-t border-[rgb(238,238,238)] py-1.5 px-1 select-none">
                        <div className="flex w-full overflow-hidden">
                            <div
                                className={`flex whitespace-nowrap gap-6 transition-all duration-300 ${
                                    isInteracted ? 'animate-marquee' : 'lg:group-hover:animate-marquee'
                                    }`}
                            >
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex items-center gap-1.5 text-[14px] font-medium text-[#222222]">
                                        <span className="text-[rgb(236,137,81)]">
                                            <RiDiscountPercentFill size={15} />
                                        </span>
                                        <span>{product.offerTag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};