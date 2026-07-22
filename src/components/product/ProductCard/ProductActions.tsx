"use client";

const actions = [
  "ri-shopping-cart-2-line",
  "ri-heart-line",
  "ri-search-line",
  "ri-loop-right-line",
];

const ProductActions = () => {
  return (
    <div
      className="
      absolute
      top-4
      right-4
      flex
      flex-col
      gap-3

      lg:opacity-0
      lg:translate-x-5

      transition-all
      duration-300

      group-hover:opacity-100
      group-hover:translate-x-0
      "
    >
      {actions.map((icon) => (
        <button
          key={icon}
          className="
          w-9
          h-9

          rounded-full

          bg-white

          shadow-sm

          flex
          items-center
          justify-center

          text-gray-600

          hover:bg-[#ff4c3b]
          hover:text-white

          transition
          "
        >
          <i className={`${icon} text-lg`} />
        </button>
      ))}
    </div>
  );
};

export default ProductActions;