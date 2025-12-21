import ReviewSkeleton from "@/components/skeletons/ReviewSkeleton";

const ReviewLoading = () => {
  return (
    <div className="grid my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[...Array(12)].map((_, index) => (
        <ReviewSkeleton key={index} />
      ))}
    </div>
  );
};

export default ReviewLoading;
