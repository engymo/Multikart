import { RiSoundModuleLine } from '@remixicon/react'
import React from 'react'

const CustomizeBtton = () => {
  return (
    <>
      <div className='fixed top-1/2 right-0 z-50 transform -translate-y-1/2'>
        <span>< RiSoundModuleLine  /></span>
        <button className='bg-[#ff6e4] px-4 py-2 text-white'>
            Customize
        </button>
      </div>
    </>
  )
}

export default CustomizeBtton
