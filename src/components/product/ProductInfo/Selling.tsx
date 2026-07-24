import React from 'react'
import {
    RiStarFill,
    RiStarLine,
} from "@remixicon/react";

import { deliver } from "@/data/DeliverData"
import Description from './Description';
import Information from './Information';

const Selling = () => {
    return (
        <>
            <div className=' flex gap-1 text-[16px] items-center'>
                <img src="/images/trending.gif" alt='selling' className='w-8 h-8' />
                <h4 className='text-[rgb(34,34,34)]'>Selling fast! 4 people have this in their carts.</h4>
            </div>
            <h2 className="text-[rgb(51,51,51)] text-center md:text-left lg:text-left font-bold text-[21.0375px]"> Gym Coords Set (Brown) </h2>
            <div className='flex items-center justify-center md:justify-start lg:justify-start mt-3'>
                <div className='flex gap-1'>
                    {Array.from({ length: 5 }).map((_, index) =>
                        index < 4 ? (
                            <RiStarFill size={18} key={index} className="text-[rgb(255,188,55)]" />
                        ) : (
                            <RiStarLine size={18} key={index} className="text-[rgb(255,188,55)]" />
                        )
                    )}
                </div>
                <span className='text-[rgb(221,221,221)] px-1'>|</span>
                <h6 className='text-[rgb(236,137,81)] text-[16px] underline'><a href='#'>20 Reviews</a></h6>
            </div>
            <div className='text-center md:text-start lg:text-start mt-3'>
                <span className='text-[20px] text-[rgb(170,170,170)]'>MRP: </span>
                <span className='text-[20px] text-[rgb(236,137,81)] font-semibold'>$15</span>
                <h6 className='text-[rgb(170,170,170)] text-sm'>Inclusive all the text </h6>
            </div>

            <div className='border-[0.5px] border-dashed border-[rgb(221,221,221)] mt-5'></div>
            <div className="flex items-center gap-3 justify-center md:justify-start lg:justify-start text-[rgb(125,125,125)]">
                {deliver.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id} className='flex items-center my-5 space-x-2'>
                            <Icon size={18} />
                            <h6> <a href='#'>{item.tittle} </a></h6>
                        </div>
                    );
                })}
            </div>
            <div className='border border-dashed border-[rgb(221,221,221)]'></div>
            <Description />
            <Information />

        </>
    )
}

export default Selling
