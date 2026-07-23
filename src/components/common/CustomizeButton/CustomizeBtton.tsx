import { RiSoundModuleLine } from '@remixicon/react'
import React from 'react'

const CustomizeButton = () => {
  return (
    <div className="fixed top-1/2 right-0 z-30 -translate-y-1/2 font-semibold text-[14px] text-[#fff]">
      <button
        className="bg-[#333333] py-2 px-2 
                   flex flex-col items-center cursor-pointer"
      >
        <RiSoundModuleLine size={20} />
        <span
          className="tracking-wider capitalize"
          style={{ writingMode: 'vertical-rl' }}
        >
          Customize
        </span>
      </button>
    </div>
  )
}

export default CustomizeButton