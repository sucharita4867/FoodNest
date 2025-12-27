import { connect } from "@/app/lib/dbConnect";
import AddFeedbackPage from "@/components/AddFeedbackPage";
import React from "react";

export const metadata = {
  title: "Add Feedback",
};

const AddFeeds = () => {
  const postFeedback = async (message) => {
    "use server";
    const result = await connect("feedbacks").insertOne({
      message,
      date: new Date(),
    });
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  };
  return (
    <div>
      <h1 className="text-2xl text-center mt-4">Add Feedback</h1>
      <AddFeedbackPage postFeedback={postFeedback}></AddFeedbackPage>
    </div>
  );
};

export default AddFeeds;
