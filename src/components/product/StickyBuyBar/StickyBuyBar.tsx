"use client";

import React from 'react';
import { useScroll } from '@/hooks/useScroll';

const StickyBuyBar = () => {
    const isScrolled = useScroll(400);

    return (
        <section
            className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-full"
                }`}
        >
            <div className='container mx-auto lg:px-20 px-4 mb-2'>
                <div className='flex justify-between items-center bg-white border-gray-100 rounded shadow-lg p-3'>

                    {/* الصورة والتفاصيل */}
                    <div className='flex gap-2 hidden lg:flex items-center'>
                        <img className='w-16 h-16 object-cover rounded' src="/images/products/17.jpg" alt="sticky-img" />
                        <div>
                            <h4 className='font-semibold text-base'>Gym Coords Set</h4>
                            <span className='text-sm text-[#222] font-medium'>
                                $32.96{" "}
                                <span className='line-through text-[#aaa] text-xs'> $459.00 </span>
                                <span className='text-[#ec8951] text-xs'> 55% off</span>
                            </span>
                        </div>
                    </div>

                    {/* الخيارات */}
                    <div className='flex items-center gap-3 font-medium text-sm'>
                        <h3 className='hidden lg:block'>Variants:</h3>

                        <select className="rounded border border-gray-300 px-3 py-2 text-sm bg-gray-100 focus:outline-none">
                            <option value="">Color</option>
                            <option value="pink">Pink</option>
                            <option value="blue">Blue</option>
                            <option value="gray">Gray</option>
                        </select>

                        <select className="rounded border border-gray-300 px-3 py-2 text-sm bg-gray-100 focus:outline-none">
                            <option value="">Size</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                        </select>
                    </div>

                    <button className='font-semibold text-[15.3225px] px-[16px] py-[9px] border-2 border-[rgb(236, 137, 81)]
                       relative overflow-hidden border-2 border-white
    bg-[linear-gradient(30deg,#ec8951_50%,transparent_50%)] bg-[length:850px] bg-[position:0_50%]
    bg-no-repeat tracking-[0.71px] text-white transition-[background-position] duration-400
    ease-in-out hover:bg-[position:100%_50%] hover:text-[#ec8951] hover:border-[#ec8951] '>

                        Add To Cart

                    </button>

                </div>
            </div>
        </section>
    );
};

export default StickyBuyBar;