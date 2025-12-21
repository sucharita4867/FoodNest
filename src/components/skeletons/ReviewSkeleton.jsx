const ReviewSkeleton = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 space-y-4 animate-pulse">
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-zinc-800 rounded-full" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-zinc-800 rounded" />
          <div className="h-3 w-24 bg-zinc-800 rounded" />
        </div>
      </div>

      {/* Rating */}
      <div className="h-5 w-28 bg-zinc-800 rounded" />

      {/* Review Text */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-zinc-800 rounded" />
        <div className="h-4 w-full bg-zinc-800 rounded" />
        <div className="h-4 w-2/3 bg-zinc-800 rounded" />
      </div>

      {/* Like Button */}
      <div className="flex gap-3 pt-2">
        <div className="h-10 w-24 bg-zinc-800 rounded-xl" />
        <div className="h-4 w-16 bg-zinc-800 rounded" />
      </div>
    </div>
  );
};

export default ReviewSkeleton;
