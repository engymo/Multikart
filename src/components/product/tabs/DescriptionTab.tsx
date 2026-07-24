import React from 'react';
import { productDescriptionData } from '@/data/productTabsData';

export const DescriptionTab: React.FC = () => {
    const { mainText, fabric, sizeAndFit, materialAndCare } = productDescriptionData;

    return (
        <div className="text-[#777777] text-[15px] leading-relaxed">
            <p>{mainText}</p>

            <div>
                <h4 className="font-bold text-[#333333] mb-2">Fabric:</h4>
                <p>{fabric}</p>
            </div>

            <div>
                <h4 className="font-bold text-[#333333] mb-2">Size & Fit:</h4>
                <p>{sizeAndFit}</p>
            </div>

            <div>
                <h4 className="font-bold text-[#333333] mb-2">Material & Care:</h4>
                {materialAndCare.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};