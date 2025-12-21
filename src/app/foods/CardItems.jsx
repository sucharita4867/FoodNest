"use client";
import { CardContext } from "@/context/CardProvider";
import React, { use } from "react";

const CardItems = () => {
  const { card } = use(CardContext);
  return (
    <div>
      added card items
      {card.length}
    </div>
  );
};

export default CardItems;
