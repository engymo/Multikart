"use client"
import React from 'react'
import Link from 'next/link'
import Topbar from './Topbar'
import { RiBarChartHorizontalLine } from "@remixicon/react";
import { navIcons } from '@/data/navIcons';
import NavbarLinks from './NavbarLinks';
import { useCartSidebar } from '@/hooks/useCartSidebar';
import CartDrawer from './Cart/CartDrawer';
import Sidebar from "@/components/common/Sidebar/SidebarDesktop";
import useSidebar from "@/hooks/useSidebar";

const Navbar = () => {
    const { isCartOpen, closeCart, handleIconClick } = useCartSidebar();
    const { isOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <>
            <Topbar />
            <nav className='container mx-auto px-4 lg:px-20 relative'>
                <div className='flex items-center justify-between '>

                    {/* Left Section */}
                    <div className='flex items-center cursor-pointer '>
                        <div className="text-[#222] py-[30px] pr-[25px] pl-0 cursor-pointer" onClick={openSidebar}>
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

                    {/* Right Icons Section */}
                    <div className="flex items-center">
                        <div>
                            <NavbarLinks />
                        </div>

                        {navIcons.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={`nav-icon-${item.id}-${index}`} className="relative group py-[30px]">
                                    <button
                                        className={`${item.className} relative flex items-center`}
                                        onClick={() => handleIconClick(item.name)}
                                    >
                                        <Icon style={{ color: item.color, fontWeight: "400" }} size={28} />

                                        {item.badge !== undefined && (
                                            <span className="absolute -top-1 -right-1.5
                                             bg-[#ec8951] text-white text-[12px] font-bold w-[20px] h-[20px]
                                              rounded-full flex items-center justify-center">
                                                {item.badge}
                                            </span>
                                        )}
                                    </button>

                                    {item.dropdown && (
                                        <div className="absolute right-0 top-full w-[170px] bg-white shadow-xl border border-gray-100 p-5 
                                                        opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible 
                                                        group-hover:translate-y-0 transition-all duration-300 z-50">
                                            {item.dropdown.map((section, secIndex) => (
                                                <div
                                                    key={`sec-${section.id}-${secIndex}`}
                                                    className={secIndex > 0 ? "mt-4" : ""}
                                                >
                                                    <h5 className="text-[16px] font-bold text-[#333333] mb-2 uppercase tracking-wide">
                                                        {section.title}
                                                    </h5>
                                                    <ul className="space-y-1.5">
                                                        {section.options.map((opt, optIndex) => (
                                                            <li key={`opt-${opt.id}-${optIndex}`}>
                                                                <Link
                                                                    href={opt.href || "#"}
                                                                    className="text-[16px] ps-[17px] text-[#333] transition-colors block"
                                                                >
                                                                    {opt.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
                <Sidebar
                    isOpen={isOpen}
                    closeSidebar={closeSidebar}
                />
            </nav>
        </>
    )
}

export default Navbar