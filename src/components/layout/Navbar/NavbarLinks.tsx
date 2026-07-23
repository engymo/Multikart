import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/data/navLinks'
import { RiArrowDropDownLine } from "@remixicon/react";


const NavbarLinks = () => {
    return (
        <>
            <div className="hidden lg:flex items-center h-full relative" >
                {navLinks.map((item) => (
                    <div
                        key={item.id}
                        className="relative group h-full flex items-center">

                        <Link
                            href={item.href || "#"}
                            className="px-[20px] py-[35px] text-[14px] uppercase flex items-center gap-1
                            text-[#6a6a6a] font-semibold">

                            {item.badge && (
                                <span className="absolute top-[10px] right-[40px] bg-[#ec8951] text-white
                                 text-[9px] font-bold px-[7px] py-[2px] flex items-center text-center uppercase">
                                    {item.badge}

                                    <span className="absolute -bottom-[4px] left-1/2 
                                    -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent 
                                    border-r-[4px] border-r-transparent border-t-[4px] border-t-[#ec8951]"></span>
                                </span>
                            )}

                            {item.title} {item.title.toLowerCase() !== 'home' && item.href !== '/' && (
                                <RiArrowDropDownLine />
                            )}
                        </Link>

                        {/* Dropdown */}
                        {item.dropdown && (
                            <div
                                className="absolute left-1/2 -translate-x-1/2 top-full min-w-[200px] 
                                bg-white shadow-md opacity-0 invisible group-hover:opacity-100
                                group-hover:visible transition-all duration-300 z-50"
                            >
                                <ul className="py-4">
                                    {item.dropdown.map((link) => (
                                        <li key={link.id}>
                                            <Link
                                                href={link.href || "#"}
                                                className="block px-6 py-[8px] text-[14px] text-[#6a6a6a]">
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {item.megaMenu && (
                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 w-[950px] max-w-[calc(100vw-40px)]
        bg-white shadow-md border border-gray-100 opacity-0 invisible translate-y-5 group-hover:opacity-100 group-hover:visible
        group-hover:translate-y-0 transition-all duration-300 z-50">
                                <div className="grid grid-cols-4 gap-10 p-10">

                                    {item.megaMenu.map((section) => (

                                        <div key={section.id}>
                                            <h4 className="mb-5 uppercase text-[15px] font-semibold text-[#222]" >
                                                {section.title}
                                            </h4>

                                            <ul className="space-y-3">

                                                {section.links.map((link) => (

                                                    <li key={link.id}>

                                                        <Link
                                                            href={link.href || "#"}
                                                            className="text-[14px] text-gray-500">
                                                            {link.title}
                                                        </Link>

                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default NavbarLinks
