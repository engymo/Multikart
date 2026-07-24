import React from 'react'
import Accordion from "@/components/product/ProductAccordion/Accordion"
import {infoData} from "@/data/ProductInfo"
import DeliveryDetails from './DeliveryDetails'
import SecureCheckout from './SecureCheckout'
import SafeCheckout from './SafeCheckout'

const Information = () => {
    return (
        <>
            <Accordion title={'information'} children={
                <div>
                    <h3 className='text-center lg:text-left font-semibold text-[16px] text-[rgb(33,37,41)]'>product Info</h3>
                    <div className='grid grid-cols-2'>
                        {infoData.map((item) => (
                            <div key={item.id} className='flex items-start gap-1 text-[rgb(125,125,125)]'>
                                <span className=" text-[25px] font-bold">•</span>
                                <h5 className="text-[13px]">{item.tittle}</h5>
                            </div>
                        ))}
                    </div>
                     <DeliveryDetails/>
                     <SecureCheckout/>
                     <SafeCheckout/>
                </div>
            } />
        </>
    )
}

export default Information
