"use client"
import React from 'react'
import Topbar from './Topbar'
import { RiBarChartHorizontalLine } from "@remixicon/react";
import { navIcons } from '@/data/navIcons';
import NavbarLinks from './NavbarLinks';
import { useCartSidebar } from '@/hooks/useCartSidebar';
import CartDrawer from './Cart/CartDrawer';


const Navbar = () => {
    const { isCartOpen, closeCart, handleIconClick } = useCartSidebar();

    return (
        <>
            <Topbar />
            <nav className='container mx-auto px-3 relative'>
                <div className='flex items-center justify-between '>

                    {/* Left Section */}
                    <div className='flex items-center cursor-pointer '>
                        <div className="text-[#222] py-[30px] pr-[25px] pl-0">
                            <RiBarChartHorizontalLine size={28} />
                        </div>
                        <div>
                            <img src="images/logo/logo.png" alt="Logo" className='w-40 hidden lg:block md:block' />
                        </div>
                    </div>

                    {/* Mobile Centered Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2 md:hidden lg:hidden">
                        <img src="images/logo/logo.png" alt="Logo" className='w-40' />
                    </div>

                    {/* Links Center */}
                    <div className="flex justify-center">
                        <NavbarLinks />
                    </div>

                    {/* Right Icons Section */}
                    <div className="flex items-center">
                        {navIcons.map((item) => {
                            const Icon = item.icon;
                            const isCartItem = item.name === "cart";

                            return (
                                <div key={item.id} className="relative">
                                    <button
                                        className={`${item.className} relative`}
                                        onClick={() => handleIconClick(item.name)}
                                    >
                                        <Icon style={{ color: item.color, fontWeight: "400" }} size={28} />

                                        {item.badge !== undefined && (
                                            <span className="absolute -top-1 -right-1.5
                                             bg-[#ec8951] text-white text-[12px] font-bold w-[20px] h-[20px]
                                              rounded-full flex items-center justify-center"style={{fontWeight: "600"}}>
                                                {item.badge}
                                            </span>
                                        )}
                                    </button>

                                    {/*  Drawer  */}
                                  <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar