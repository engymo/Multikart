import React from 'react'
import Counter from './Counter';
import Progressbar from './Progressbar';
import Buttonoffer from './Buttonoffer';
import Itemsoffer from './Itemsoffer';
import ProductActions from './productActions';


const ProductPurchase = () => {
  return (
    <>
      <div className='border border-[rgb(238,238,238)] p-5 h-fit'>
        <h4 className='text-center text-base font-semibold text-[rgb(33, 37, 41)]'>Colour:</h4>
        <Itemsoffer />
        <Counter />
        <Buttonoffer />
        <h6 className='text-[rgb(125,125,125)] text-[14px] text-center mt-2'>Please Hurry Only 10 Left In Stock</h6>

        <Progressbar />
        <ProductActions />
      </div>
    </>
  )
}

export default ProductPurchase
