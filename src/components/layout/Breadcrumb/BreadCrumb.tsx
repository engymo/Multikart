import React from 'react'
import { fluidFont } from "@/utils/fluidFont";
const breadcrumblinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Product" },
    { id: 3, title: "Gym Coords Set" }
]
const BreadCrumb = () => {
    return (
        <div className="bg-[#f5f5f5] ">
            <header className="container mx-auto px-3 flex flex-col justify-center text-center py-[30px]">
                <h1 className='text-[#222]' style={{ fontSize: fluidFont(18, 32), fontWeight: 500 }}>Gym Coords Set</h1>

                <div className="flex items-center text-center justify-center
                 text-[#555] pt-[12px] uppercase" style={{ fontSize: fluidFont(14, 16),fontWeight: 600 }}>
                    {breadcrumblinks.map((link) => (
                        <div key={link.id}>
                            <a href={link.href}>
                                {link.title}
                            </a>
                            {link !== breadcrumblinks[breadcrumblinks.length - 1] && (
                                <span className="px-2">/</span>
                            )}
                        </div>
                    ))}
                </div>
            </header>
        </div>

    )
}

export default BreadCrumb
