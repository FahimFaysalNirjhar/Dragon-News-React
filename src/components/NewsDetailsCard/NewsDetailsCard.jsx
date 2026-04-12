import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  if (!news) return <p className="text-center mt-10">Loading...</p>;

  const { title, image_url, details, author, tags } = news;

  return (
    <div className="max-w-4xl mx-auto bg-base-100 shadow-md rounded-lg p-6">
      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-[350px] object-cover rounded-md"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold mt-4">{title}</h2>

      {/* Author & Date */}
      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
        <img
          src={author?.img}
          alt={author?.name}
          className="w-8 h-8 rounded-full"
        />
        <p>{author?.name}</p>
        <span>•</span>
        <p>{new Date(author?.published_date).toDateString()}</p>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map((tag, i) => (
          <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <p className="mt-4 text-gray-700 leading-relaxed">{details}</p>

      {/* Button */}
      <Link to={`/category/${news.category_id}`}>
        <button className="mt-6 bg-secondary text-white px-5 py-2 rounded flex items-center gap-2">
          ← All news in this category
        </button>
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
