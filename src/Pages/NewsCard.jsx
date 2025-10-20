// components/NewsCard.jsx
import React, { useState } from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

/**
 * NewsCard
 * Props:
 *  - news: the news object (structure you provided)
 */
export default function NewsCard({ news }) {
  const [expanded, setExpanded] = useState(false);
  if (!news) return null;

  const {
    id,
    title,
    author = {},
    thumbnail_url,
    rating = {},
    total_view,
    details,
    tags = [],
    others = {},
  } = news;

  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  const ratingNumber = Math.max(0, Math.min(5, Math.round(rating.number || 0)));
  const shortDesc = details && details.length > 220 ? details.slice(0, 220) + "…" : details;

  return (
    <article className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Header: author + share */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img
            src={author.img}
            alt={author.name || "author"}
            className="w-10 h-10 rounded-full object-cover mr-3 border"
          />
          <div className="text-sm">
            <div className="font-medium text-gray-800">{author.name}</div>
            <div className="text-xs text-gray-500">{formatDate(author.published_date)}</div>
          </div>
        </div>
        <div>
        <button
          aria-label="Share"
          title="Share"
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
        >
          <FaRegBookmark  size={18} />
        </button>
        <button
          aria-label="Share"
          title="Share"
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
        >
          <FiShare2 size={18} />
        </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 pb-3 text-gray-900 font-semibold text-lg md:text-xl leading-tight">
        {title}
      </h2>

      {/* Image */}
      <div className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 md:h-64 object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Body: meta, details */}
      <div className="px-4 py-3 text-sm text-gray-600">
        <p className="text-sm leading-relaxed">
          {expanded ? details : shortDesc}
          {details && details.length > 220 && (
            <Link to={`/news-details/${id}`}
              onClick={() => setExpanded((s) => !s)}
              className="ml-2 text-orange-500 font-medium hover:underline"
            >
              {expanded ? "Show less" : "Read More"}
            </Link>
          )}
        </p>

        {/* Tag cloud */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.slice(0, 6).map((t) => (
            <span
              key={t}
              className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: rating + views */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Stars */}
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`mr-1 ${i < ratingNumber ? "text-orange-400" : "text-gray-300"}`}
                size={14}
                aria-hidden
              />
            ))}
          </div>
          {/* numeric rating */}
          <div className="text-sm font-semibold text-gray-800">{rating.number ?? "-"}</div>
        </div>

        <div className="flex items-center text-sm text-gray-600 space-x-3">
          <div className="flex items-center">
            <FaEye className="mr-2 text-gray-500" />
            <span>{(total_view || 0).toLocaleString()}</span>
          </div>

          {/* small badge (optional) */}
          {others.is_trending && (
            <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full">
              Trending
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
