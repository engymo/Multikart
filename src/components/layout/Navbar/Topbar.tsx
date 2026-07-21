import React from 'react'
import { RiPhoneFill, RiPokerHeartsFill, RiUserFill } from "@remixicon/react";
const Topbar = () => {
    return (
        <>
            <div className="bg-[#333]">

                <section className="container mx-auto px-3 flex items-center justify-between text-sm text-[#d9d9d9]">
                    <div className="hidden lg:flex items-center justify-between py-2.5">
                        <h6>Welcome to Our store Multikart</h6>
                        <div className="flex items-center ps-5">
                            <span className="mr-2.5 text-[#ec8951]">< RiPhoneFill size={16} /></span>
                            <span className="">Call Us: 123 - 456 - 7890</span>
                        </div>

                    </div>
                    <div className="group relative">
                        <div className="flex items-center lg:justify-between py-2.5 cursor-pointer">
                            <span className="py-2.5 px-6 hover:text-[#ec8951] transition-all duration-300 ease-in-out">
                                < RiPokerHeartsFill size={16} />
                            </span>
                            <span className="pr-1 hover:text-[#ec8951] transition-all duration-300 ease-in-out">
                                < RiUserFill size={16} />
                            </span>
                            <h6 >
                                My Account
                            </h6>
                        </div>
                        <div
                            className=" absolute right-[-1%] top-9 w-35 bg-white opacity-0 translate-y-3 ease-out invisible
      transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50 shadow-sm text-md duration-300
    ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                            <ul>
                                <li className="px-4 py-2 cursor-pointer text-[#333]">Login</li>
                                <li className="px-4 py-2 cursor-pointer text-[#333]">Register</li>
                            </ul>
                        </div>
                    </div>


                </section>
            </div>
        </>
    )
}

export default Topbar
