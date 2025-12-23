"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div className={roboto.className}>
      <h1 className="text-2xl ">
        Total Reviews :{" "}
        <span className="text-orange-400 text-2xl">{reviews.length}</span>
      </h1>
      <div className="grid my-5 grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} reviewData={rev}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
