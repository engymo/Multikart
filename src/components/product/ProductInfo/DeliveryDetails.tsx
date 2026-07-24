import React from "react";
import { deliveryData } from "@/data/DeliverData";

const DeliveryDetails = () => {
  return (
    <div className="">
      <div className='border border-dashed border-[rgb(221,221,221)] '></div>
      <h3 className="font-semibold text-[16px] text-[#232323] text-center lg:text-left mt-2">
        Delivery Details
      </h3>

      <div className="">
        {deliveryData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-2 text-[#777]"
            >
              <Icon
                size={16}
                className="mt-[3px] shrink-0 text-[#777]"
              />

              <p className="text-[15px] leading-7">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryDetails;