"use client";

import { CardContext } from "@/context/CardProvider";
import { use, useState } from "react";

const AddCardBtn = ({ food }) => {
  const [inCard, setInCard] = useState(false);
  const { addToCard } = use(CardContext);

  const handleAddToCard = () => {
    addToCard(food);
    setInCard(true);
  };
  return (
    <button
      onClick={handleAddToCard}
      disabled={inCard}
      className="

        w-full bg-[#fd4c00] text-white py-2 rounded-xl font-semibold
        transition-all duration-300
        hover:scale-105 active:scale-95


        disabled:border disabled:border-orange-500 disabled:text-orange-400
        disabled:bg-[#18181b]
      "
    >
      {inCard ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddCardBtn;
