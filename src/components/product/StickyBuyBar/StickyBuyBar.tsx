import React from 'react'

const StickyBuyBar = () => {
    return (
        <section className='fixed bottom-5 left-0 right-0 z-50 '>
            <div className='container mx-auto lg:px-20 px-4'>
                <div className='flex justify-between items-center bg-white border-gray-50 rounded shadow-md p-3'>
                    <div className='flex gap-2 hidden md:hidden lg:flex'>
                        <div>
                            <img className='w-20 h-20' src="/images/products/17.jpg" alt="stikyimg" />
                        </div>
                        <div>

                            <div >
                                <h4 className='font-semibold text-lg'>Gym Coords Set</h4>
                                <span className='text-base text-[rgb(34,34,34)]'>$32.96{" "}
                                    <span className='line-through text-[rgb(170,170,170)] text-sm'> $459.00 </span>
                                    <span className='text-base text-[rgb(236,137,81)]'> {" "} 55% off</span>
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center gap-3 font-meduim text-base'>
                        <h3 className='hidden md:hidden lg:block'>Variants:</h3>

                        <select
                            className="w-full rounded border border-gray-300 px-3 py-2 text-base focus:outline-none"
                        >
                            <option value="">Color</option>
                            <option value="s">Pink</option>
                            <option value="m">Blue</option>
                            <option value="l">gray</option>
                        </select>
                        <select
                            className="w-full rounded border border-gray-300 px-3 py-2 text-base focus:outline-none"
                        >
                            <option value="">Size</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                        </select>

                    </div>
                    <button className='text-[#fff] bg-[rgb(236,137,81)] font-semibold 
                     text-[15.3225px] px-[16px] py-[9px] border-2 border-[rgb(236, 137, 81)]'>
                        Add To Cart
                    </button>

                </div>

            </div>
        </section>
    )
}

export default StickyBuyBar
