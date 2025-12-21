const FoodDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-black py-12 animate-pulse">
      <div className="w-11/12 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="h-96 bg-zinc-900 rounded-2xl" />

        {/* Content Skeleton */}
        <div className="space-y-5">
          <div className="h-4 w-24 bg-zinc-800 rounded" />
          <div className="h-8 w-full bg-zinc-800 rounded" />
          <div className="h-4 w-40 bg-zinc-800 rounded" />
          <div className="h-10 w-32 bg-zinc-800 rounded" />

          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-zinc-800 rounded-xl" />
            <div className="h-12 w-40 bg-zinc-800 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
