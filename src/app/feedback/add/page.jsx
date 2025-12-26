import AddFeedbackPage from "@/components/AddFeedbackPage";
import React from "react";

export const metadata = {
  title: "Add Feedback",
};

const AddFeeds = () => {
  return (
    <div>
      <h1 className="text-2xl text-center mt-4">Add Feedback</h1>
      <AddFeedbackPage></AddFeedbackPage>
    </div>
  );
};

export default AddFeeds;
