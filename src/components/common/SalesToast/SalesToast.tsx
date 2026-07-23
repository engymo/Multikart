"use client";
import React from 'react'
import {salesData} from "@/data/SalesToast"
import { RiCloseFill } from '@remixicon/react'
import { useSalesToast } from "@/hooks/useSalesToast";


const SalesToast = () => {
    const { isVisible, closeToast } = useSalesToast();

    if (!isVisible) return null;
    return (
        <>
            <div className='fixed bottom-35 left-5 p-2 shadow-md flex gap-2 w-90 bg-white border-gray-50 rounded'>
                <div>
                    <img src="/images/sm.jpg" alt="salesimg"/>
                </div>
                <div>
                    {salesData.map((item) => (
                        <div key={item.id}>
                            <span className='font-semibold text-sm'>{item.title}</span>
                            <p className='text-sm text-[#ec8951]'>{item.description}</p>
                            <span className='text-xs text-[#333]'>{item.time}</span>
                        </div>
                    ))}
                </div>
                <span onClick={closeToast} className='text-black/50'>< RiCloseFill size={14} /></span>
            </div>
        </>
    )
}

export default SalesToast
