import React from 'react'
import Accordion from "@/components/product/ProductAccordion/Accordion"

const Description = () => {
    return (
        <>
            <Accordion title={'Product Description'} children={
                <p className='text-[rgb(125,125,125)]'>
                    "Gym Coords Set" offers a complete workout ensemble for the modern fitness enthusiast.
                    This coordinated set includes everything needed for a stylish and functional gym session,
                    from moisture-wicking tops to supportive leggings, ensuring both comfort and performance during workouts.
                </p>
            }
            />
        </>
    )
}

export default Description
