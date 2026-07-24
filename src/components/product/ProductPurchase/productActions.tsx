import React from "react";
import { productAction } from "@/data/productActions"

const ProductActions = () => {
  return (
   
        <div className='flex flex-wrap space-x-3 mt-2 items-center justify-center'>
          {productAction.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className='text-[rgb(125,125,125)] text-[14px] text-center'>
                <button className='flex items-center gap-1'>
                  <Icon size={15}/>
                  <span >{item.title}</span>
                </button>
              </div>
            );
          })}

        </div>
  );
};

export default ProductActions;