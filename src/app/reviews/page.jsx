import React from "react";
import ReviewsPage from "./ReviewsPage";

export const metadata = {
  // title: "All Reviews",
  title: {
    absolute: "satiesfied users",
  },
  description: "Best FastFood in India",
};

const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;
