import FoodCard from "@/components/cards/FoodCard ";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  return (
    <div className="mt-6">
      <h1 className="text-2xl ">
        Total foods :{" "}
        <span className="text-orange-400 text-2xl">{foods.length}</span>
      </h1>
      <div className="grid my-5 grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
