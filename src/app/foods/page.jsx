import FoodCard from "@/components/cards/FoodCard";
import CardItems from "./CardItems";
import InputSearch from "@/components/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  // console.log(data);
  const foods = await getFoods(search);

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl">
          Total foods :
          <span className="text-orange-400 text-2xl"> {foods.length}</span>
        </h1>

        <InputSearch />
      </div>

      <div className="flex gap-5 mt-6">
        {/* Foods */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {/* Cart */}
        <div className="w-[250px] border-2 border-gray-800  rounded-xl p-4">
          <h2 className="text-orange-400 text-2xl">Cart Items</h2>
          <hr className="my-2 border-gray-700" />
          <CardItems />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
