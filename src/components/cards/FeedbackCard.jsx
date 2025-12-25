"use client";

import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback, onDelete, onUpdate }) => {
  const { _id, message, date } = feedback;

  return (
    <div
      className="
        bg-zinc-900 border border-zinc-800
        rounded-2xl p-5
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40
      "
    >
      {/* Message */}
      <p className="text-gray-200 text-sm leading-relaxed">
        {message}
      </p>

      {/* Date */}
      <p className="text-xs text-gray-400 mt-3">
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </p>

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onUpdate(feedback)}
          className="
            flex-1 py-2 rounded-xl
            bg-blue-600/20 text-blue-400
            border border-blue-500/40
            font-semibold text-sm
            transition-all
            hover:bg-blue-600 hover:text-white
          "
        >
          Update
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="
            flex-1 py-2 rounded-xl
            bg-red-600/20 text-red-400
            border border-red-500/40
            font-semibold text-sm
            transition-all
            hover:bg-red-600 hover:text-white
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
