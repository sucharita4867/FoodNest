"use client";

import { useState } from "react";

const ReviewCard = ({ reviewData }) => {
  const { user, photo, rating, review, likes, date } = reviewData;

  const [likeCount, setLikeCount] = useState(likes.length);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-2xl p-6 space-y-4 shadow-lg">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-white">{user}</h3>
          <p className="text-sm text-gray-400">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="text-orange-400 text-lg">
        {"★".repeat(rating)}
        <span className="text-gray-600">{"★".repeat(5 - rating)}</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 leading-relaxed">{review}</p>

      {/* Like Button */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={handleLike}
          className={`
            px-4 py-2 rounded-xl font-semibold transition
            ${
              liked
                ? "bg-orange-500 text-white"
                : "border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
            }
          `}
        >
          👍 Like
        </button>

        <span className="text-gray-400 text-sm">{likeCount} likes</span>
      </div>
    </div>
  );
};

export default ReviewCard;
