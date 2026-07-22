interface ProductPriceProps {
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
}

const ProductPrice = ({
  price,
  oldPrice,
  discountPercentage,
}: ProductPriceProps) => {
  return (
    <div className="flex items-center gap-2 mt-1">
      <span className="text-[28px] font-medium text-gray-800">
        $
      </span>

      <span className="text-[30px] font-semibold text-gray-900 leading-none">
        {price.toFixed(2)}
      </span>

      {oldPrice && (
        <span className="line-through text-gray-400">
          ${oldPrice.toFixed(2)}
        </span>
      )}

      {discountPercentage && (
        <span className="text-[#ff4c3b]">
          {discountPercentage}% Off
        </span>
      )}
    </div>
  );
};

export default ProductPrice;