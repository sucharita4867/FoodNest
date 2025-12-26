import FeedbackCard from "@/components/cards/FeedbackCard";
import { Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "feedback",
};

const getFeedback = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return await res.json();
};

const FeedbackPage = async () => {
  const feedback = await getFeedback();
  return (
    <div>
      <h1 className="text-2xl ">
        Total Feedback :{" "}
        <span className="text-orange-400 text-2xl">{feedback.length}</span>
      </h1>
      <div className="my-4">
        <Link className="btn" href={"/feedback/add"}>
          Add Feedback
        </Link>
      </div>
      <div className="grid my-5 grid-cols-3 gap-5">
        {feedback.map((fd) => (
          <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
