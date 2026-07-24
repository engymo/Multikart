import React from 'react'

const Buttonoffer = () => {
    return (
        <div className='flex items-center gap-3 justify-center mt-2'>
            <button
                type="button"
                className="inline-flex min-w-[102px] items-center justify-center 
            bg-[#EC8951]/80 px-[13px] py-[7px] text-sm font-semibold capitalize text-white disabled:opacity-65"
            >
                Out Of Stock
            </button>

            {/* Buy Now Button */}
            <button
                type="button"
                className="inline-flex min-w-[102px] items-center justify-center bg-[#EC8951]/80
             px-[13px] py-[7px] text-sm font-semibold capitalize text-white "
            >
                Buy Now
            </button>
        </div>
    )
}

export default Buttonoffer
