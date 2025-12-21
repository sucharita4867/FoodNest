import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="border rounded-xl p-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-44 bg-zinc-800 rounded-lg" />

      {/* Content Skeleton */}
      <div className="space-y-2 mt-3">
        <div className="h-4 w-3/4  bg-zinc-800 rounded" />
        <div className="h-3 w-1/2 bg-zinc-800 rounded" />
        <div className="h-6 w-20 mt-2 bg-zinc-800 rounded" />

        <div className="flex gap-3 mt-2">
          <div className="h-10 flex-1 bg-zinc-800 rounded-lg" />
          <div className="h-10 flex-1 bg-zinc-800 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
