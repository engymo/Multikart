"use client"
import React from 'react'
import Topbar from './Topbar'
import Sidebar from '@/components/common/Sidebar/Sidebar'
import { RiMenu2Line } from '@remixicon/react'



const Navbar = () => {
    return (
        <>
            <Topbar />
            <nav className='container mx-auto px-3'>
                <div className='flex items-center justify-between '>
                    <div className='flex items-center '>
                        < RiMenu2Line size={30} />
                        <div>
                            <img src="images/logo/logo.png" alt="Logo" className='w-40' />
                        </div>
                    </div>

                    <div>

                        <div>
                            <span>

                            </span>
                        </div>
                    </div>

                </div>
            </nav>

            {/* < Sidebar isOpen={false} closeSidebar={function (): void {
              throw new Error('Function not implemented.')
          } } /> */}

        </>
    )
}

export default Navbar
