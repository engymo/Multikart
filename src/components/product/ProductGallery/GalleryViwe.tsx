"use client";

import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { product } from "@/data/product";

interface GalleryViewProps {
  activeIndex: number;
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

const GalleryViwe = ({
  swiperRef,
}: GalleryViewProps) => {
  return (
    <div className="mt-4 flex justify-center gap-3">
      {product.images.map((image, index) => (
        <button
          key={image.id}
          onClick={() => swiperRef.current?.slideToLoop(index)}
          className="relative overflow-hidden transition-[filter] duration-500 ease-in-out transition-all
           bg-gray-50 py-2 " >
          <Image
            src={image.image}
            alt={image.alt}
            width={90}
            height={110}
            className="object-cover cursor-pointer"
          />
        </button>
      ))}
    </div>
  );
};

export default GalleryViwe;