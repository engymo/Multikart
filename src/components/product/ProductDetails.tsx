import React from 'react'
import GallerySlider from './ProductGallery/GallerySlider'
import ProductPurchase from './ProductPurchase/ProductPurchase'
import ProductInfo from './ProductInfo/ProductInfo'

const ProductDetails = () => {
    return (
        <>
            <section className='container lg:px-30 mx-auto px-4 lg:pt-[56.45px] pt-[34.15px]' >
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
                    <GallerySlider />
                    <ProductInfo/>
                    <ProductPurchase/>
                </div>
            </section >
        </>
    )
}

export default ProductDetails
