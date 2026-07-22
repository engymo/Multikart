"use client";

import React from "react";
import { Product } from "@/types/product";
import RatingBadge from "./RatingBadge";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div
            className=" group bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 
            grid-cols-1 lg:grid-cols-4" >

            <div className="p-3">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />

                <RatingBadge rating={product.rating} />

                <ProductActions />
            </div>

            <div className="p-4 flex flex-col gap-1">
                <h4 className="text-[30px] font-medium text-gray-800 transition-colors duration-300 
                 group-hover:text-[#ff4c3b]">
                    {product.name}
                </h4>
                <p className="text-gray-400 text-xs font-normal">{product.subtitle}</p>

                <ProductPrice
                    price={product.price}
                    oldPrice={product.oldPrice}
                    discountPercentage={product.discountPercentage}
                />

                <div className="mt-2 pt-2 border-t border-dashed border-gray-200 flex items-center
                 gap-1.5 text-xs text-[#e26e5c] overflow-hidden">
                    <i className="ri-price-tag-3-line transition-transform duration-300 group-hover:translate-x-1"></i>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {product.offerText}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;