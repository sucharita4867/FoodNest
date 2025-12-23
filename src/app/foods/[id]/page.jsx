import Link from "next/link";

export function generateStaticParams() {
  return [{ id: "52949" }, { id: "52924" }, { id: "52964" }];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const { details = {} } = await res.json();
  return {
    title: details.title,
  };
}

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.details;
};

const FoodsDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);
  //   if (!food) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center bg-black text-white">
  //         <h2 className="text-2xl font-bold">Food Not Found</h2>
  //       </div>
  //     );
  //   }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="w-11/12 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden">
          <img
            src={foodImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Details */}
        <div className="space-y-5">
          <span className="text-orange-400 font-semibold">{category}</span>

          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="text-gray-400">
            Origin: <span className="text-white">{area}</span>
          </p>

          <p className="text-3xl font-bold text-orange-500">₹{price}</p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              className="bg-[#fd4c00] px-6 py-3 rounded-xl font-semibold
                         hover:scale-105 transition"
            >
              Add to Cart
            </button>

            {video && (
              <Link
                href={video}
                target="_blank"
                className="border border-orange-500 text-orange-400
                           px-6 py-3 rounded-xl font-semibold
                           hover:bg-orange-500 hover:text-white transition"
              >
                Watch Video
              </Link>
            )}
          </div>

          <Link
            href="/foods"
            className="inline-block text-gray-400 hover:text-orange-400 pt-6"
          >
            ← Back to Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodsDetails;
