"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper/modules";

import { product } from "@/data/product";
import { RiArrowLeftSLine, RiArrowRightSLine, } from "@remixicon/react";

import GalleryViwe from "./GalleryViwe";

const GallerySlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>

      <div className="relative">

        {/* Desktop */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden lg:flex absolute left-[-15] top-1/2 -translate-y-1/2 z-50
      h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg"
        >
          <RiArrowLeftSLine size={22} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden lg:flex absolute right-[-15] top-1/2 -translate-y-1/2 z-50
      h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg"
        >
          <RiArrowRightSLine size={22} />
        </button>

        {/* Mobile */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 z-50
      h-8 w-8 rounded-full bg-white shadow flex justify-center items-center"
        >
          <RiArrowLeftSLine size={22} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 z-50
      h-8 w-8 rounded-full bg-white shadow flex justify-center items-center"
        >
          <RiArrowRightSLine size={22} />
        </button>

        <Swiper
          modules={[EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {product.images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative aspect-[4.5/5] w-full overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <GalleryViwe
        activeIndex={activeIndex}
        swiperRef={swiperRef}
      />

    </div>
  );
};

export default GallerySlider;