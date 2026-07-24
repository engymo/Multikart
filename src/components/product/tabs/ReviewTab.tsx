import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { reviewsSummaryData, productReviewsData } from '@/data/productTabsData';

export const ReviewTab: React.FC = () => {
  const { averageRating, totalRatings, breakdown } = reviewsSummaryData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Summary */}
      <div className="lg:col-span-5">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-[#333333]">
              {averageRating.toFixed(2)}
            </span>
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

        <hr className="border-gray-100 my-2" />

        {/* Rating Bars */}
        <div className="space-y-2">
          <h4 className="font-bold text-[#333333] text-base">Review this product</h4>
          <p className="text-xs text-[#777777]">Let other customers know what you think</p>

          <div className="space-y-3">
            {breakdown.map((item) => (
              <div key={item.stars} className="flex items-center text-xs text-[#777777] gap-2">
                <span className="w-3 font-semibold">{item.stars}</span>
                <i className="ri-star-fill text-gray-600 text-xs shrink-0" />
                <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      item.stars >= 3
                        ? 'bg-emerald-500'
                        : item.stars === 2
                        ? 'bg-amber-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="w-3 text-right font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-3 bg-[#E27C49] hover:bg-[#d06b3a] text-white
         font-medium text-sm rounded transition-colors shadow-sm mt-2">
          Write Review
        </button>
      </div>

      {/* Right Column: Review List */}
      <div className="lg:col-span-7 space-y-4">
        {productReviewsData.map((review) => (
          <div key={review.id} className="bg-[#FAFAFA] p-5 rounded border border-gray-100 flex gap-4">
            <div className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center font-bold text-gray-700 text-lg shrink-0">
              {review.avatarLetter}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="font-bold text-[#333333] text-sm">{review.author}</h5>
                  <span className="text-xs text-[#999999]">{review.date}</span>
                </div>
                <div className="flex text-amber-400 gap-0.5 text-sm">
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
              <p className="text-xs text-[#777777] leading-relaxed">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};