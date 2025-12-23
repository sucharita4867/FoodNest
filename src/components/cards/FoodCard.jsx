"use client";

import Link from "next/link";
import AddCardBtn from "../buttons/AddCardBtn";
import Image from "next/image";

const FoodCard = ({ food, onAddToCart, onViewDetails }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div
      className="
        group bg-zinc-900 rounded-2xl overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50
      "
    >
      {/* Image Wrapper */}
      <div className="overflow-hidden">
        {/* <img
          src={foodImg}
          alt={title}
          className="
            w-full h-48 object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        /> */}
        <Image
          src={foodImg}
          alt={title}
          className="
            w-full h-48 object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
          width={300}
          height={150}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <span className="text-sm text-orange-400 font-semibold">
          {category}
        </span>

        <h2 className="text-lg font-bold text-white line-clamp-2">{title}</h2>

        <p className="text-xl font-bold text-orange-500">₹{price}</p>

        {/* Buttons */}
        <div className="flex flex-nowrap gap-3 pt-2">
          <div className="flex-1">
            <AddCardBtn food={food} />
          </div>

          <Link
            href={`/foods/${id}`}
            className="
      flex-1 text-center
      border border-orange-500 text-orange-400
      py-2 rounded-xl font-semibold
      transition-all duration-300
      hover:bg-orange-500 hover:text-white
      hover:scale-105 active:scale-95
    "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
