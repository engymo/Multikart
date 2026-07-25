import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { reviewsSummaryData, productReviewsData } from '@/data/productTabsData';

export const ReviewTab: React.FC = () => {
  const { averageRating, totalRatings, breakdown } = reviewsSummaryData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Summary */}
      <div className="lg:col-span-5">
        <div className='flex items-start gap-2'>
          <span className="text-4xl font-bold text-[#333333]">
            {averageRating.toFixed(2)}
          </span>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <div className="flex text-amber-400 gap-0.5 text-lg">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-line text-amber-400" />
              </div>
            </div>
            <p className="text-sm text-[#777777] mt-1">Based on {totalRatings} Rating</p>
          </div>

        </div>

        <hr className="border-gray-100 my-2" />

        {/* Rating Bars */}
        <div className="space-y-2">
          <h4 className="font-bold text-[rgb(33,37,41)] text-lg">Review this product</h4>
          <p className="text-sm text-[rgba(74,85,104,0.88)]">Let other customers know what you think</p>

          <div className="space-y-3">
            {breakdown.map((item) => (
              <div key={item.stars} className="flex items-center text-base text-[#777777] gap-2">
                <span className="w-5 font-semibold">{item.stars}</span>
                <i className="ri-star-fill text-[rgb(35,35,35)] text-base shrink-0" />
                <div className="flex-1 bg-gray-100 h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${item.stars >= 3
                        ? 'bg-[rgb(25,163,64)]'
                        : item.stars === 2
                          ? 'bg-[rgb(255,165,59)]'
                          : 'bg-[rgb(255,79,79)]'
                      }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="w-3 text-right text-[rgba(74,85,104,0.88)] font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-3 bg-[#E27C49] text-white
         font-medium text-base transition-colors shadow-sm mt-5">
          Write Review
        </button>
      </div>

      {/* Right Column: Review List */}
      <div className="lg:col-span-7 space-y-4">
        {productReviewsData.map((review) => (
          <div key={review.id} className="bg-[#FAFAFA] p-5 border border-gray-100 flex gap-4">
            <div className="w-[13%] h-15 bg-white flex items-center 
            justify-center font-bold text-[rgb(35,35,35)] text-3xl shrink-0">
              {review.avatarLetter}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="font-bold text-[rgb(35,35,35)] lg:text-xl text-sm">{review.author}</h5>
                  <span className="text-base text-[#999999]">{review.date}</span>
                </div>
                <div className="flex text-amber-400 gap-0.5 lg:text-base text-xs">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={
                        i < review.rating
                          ? 'ri-star-fill text-amber-400'
                          : 'ri-star-line text-gray-300'
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-base text-[#777777] leading-relaxed">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};