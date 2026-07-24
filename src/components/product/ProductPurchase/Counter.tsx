import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

const Counter = () => {
    return (

        <div className='border border-[rgb(238,238,238)] bg-[rgb(250,250,250)] p-[6px] w-[50%] mt-2 mx-auto'>
            <div className='flex items-center justify-between'>
                <span className='text-[rgb(34, 34, 34)] bg-white shadow-sm p-1'><RiArrowLeftSLine /></span>
                <span className='text-[rgb(34, 34, 34)]'>1</span>
                <span className='text-[rgb(34, 34, 34)] bg-white shadow-sm p-1'><RiArrowRightSLine /></span>
            </div>
        </div>

    )
}

export default Counter
