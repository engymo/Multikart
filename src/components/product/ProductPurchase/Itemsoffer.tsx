import React from 'react'
import { PurchaseImg } from "@/data/PurchaseData"

const Itemsoffer = () => {
  return (
    <div className='flex flex-wrap gap-3 items-center justify-center w-fit mx-auto'>
      {PurchaseImg.map((img, index) => (
        <div 
          key={img.id} 
          className={`p-1 border transition-colors duration-300 cursor-pointer ${
            index === 0 ? "border-[#ff4c3b]" : "border-[#eee]"
          }`}
        >
          <img
            src={img.img}
            alt='PurchaseImage'
            className='w-[70px] h-[90px] object-cover block'
          />
        </div>
      ))}
    </div>
  )
}

export default Itemsoffer