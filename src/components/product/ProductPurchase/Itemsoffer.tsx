import React from 'react'
import Image from 'next/image'
import {PurchaseImg} from "@/data/PurchaseData"

const Itemsoffer = () => {
  return (
      <div className='flex gap-1'>
          {PurchaseImg.map((img, index) => (
            <div key={img.id} className={`p-1 border transition-colors duration-300 ${index === 0
              ? "border-[#ff4c3b]"
              : "border-[rgb(238,238,238)]"
              }`}>
              <Image
                src={img.img}
                alt='PurchaseImage'
                height={200}
                width={200}
              />
            </div>
          ))}
        </div>
  )
}

export default Itemsoffer
