"use client";

const AddFeedbackPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    // alert(message);

    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    if (data.insertedId) {
      alert("success");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-zinc-900 p-6 rounded-2xl">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <textarea
          // value={message}
          required
          name="message"
          placeholder="Write your feedback..."
          className="w-full h-32 bg-zinc-800 text-white p-3 rounded-xl outline-none"
        />

        <button
          type="submit"
          className="w-full bg-[#fd4c00] text-white py-2 rounded-xl font-semibold"
        >
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default AddFeedbackPage;
