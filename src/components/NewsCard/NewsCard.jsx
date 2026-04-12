import React from "react";
import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  return (
    <div className="bg-base-100 shadow-md rounded-xl p-4 space-y-4 mb-8">
      {/* 🔹 Author Section */}
      <div
        className="flex justify-between items-center p-3 
  border border-[#F3F3F3] bg-[#F3F3F3] 
  rounded-t-[5px]"
      >
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* 🔹 Title */}
      <h2 className="text-lg font-bold leading-snug">{title}</h2>

      {/* 🔹 Image */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full h-52 object-cover rounded-lg"
      />

      {/* 🔹 Details */}
      <p className="text-sm text-gray-600">
        {details.length > 150 ? details.slice(0, 150) + "..." : details}
        <Link
          to={`/newsDetails/${id}`}
          className="text-orange-500 font-semibold cursor-pointer ml-1"
        >
          Read More
        </Link>
      </p>

      {/* 🔹 Footer */}
      <div className="flex justify-between items-center border-t pt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating?.number ? "" : "opacity-30"}
            />
          ))}
          <span className="text-gray-600 ml-2">{rating?.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
