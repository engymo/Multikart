import React from "react";

interface RatingBadgeProps {
  rating: number;
}

const RatingBadge = ({ rating }: RatingBadgeProps) => {
  return (
    <div className="absolute left-3 bottom-3 bg-white px-2 py-1 shadow-sm flex items-center gap-1 text-sm z-20">
      <i className="ri-star-fill text-[#ffb321]"></i>

      <span className="text-gray-700">
        {rating}
      </span>
    </div>
  );
};

export default RatingBadge;