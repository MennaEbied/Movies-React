import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchContentDetails } from "../util/API";

function ContentDetails() {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const validType = ["movies", "tv"].includes(type) ? type : "movies";
        const data = await fetchContentDetails(validType, id);
        setItem(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getDetails();
  }, [type, id]);

  if (loading) {
    return <div className="text-center text-white min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 min-h-screen flex items-center justify-center">Error: {error}</div>;
  }

  if (!item) {
    return <div className="text-center text-white min-h-screen flex items-center justify-center">No details available</div>;
  }

  const isTV = type === "tv";
  const title = isTV ? item.name : item.title;
  const date = isTV ? item.first_air_date : item.release_date;
  const extraInfo = isTV ? `Number of Seasons: ${item.number_of_seasons || "N/A"}` : `Runtime: ${item.runtime || "N/A"} minutes`;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 pt-20 md:pt-24">
      <div className="container mx-auto">
        <Link
          to={`/content/${type}`}
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md mb-6"
        >
          Back to {isTV ? "TV Shows" : "Movies"}
        </Link>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Poster"
            }
            alt={title || "No Title"}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-Orange mb-4">{title || "Unknown"}</h1>
            <p className="text-sm text-gray-400 mb-2">
              <span className="font-semibold">{isTV ? "First Air Date" : "Release Date"}:</span> {date || "N/A"}
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <span className="font-semibold">Rating:</span> {item.vote_average || "N/A"}/10 ({item.vote_count || 0} votes)
            </p>
            <p className="text-sm text-gray-400 mb-4">
              <span className="font-semibold">Genres:</span>{" "}
              {item.genres && item.genres.length > 0 ? item.genres.map(g => g.name).join(", ") : "N/A"}
            </p>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-base mb-4">{item.overview || "No description available"}</p>
            <p className="text-sm text-gray-400 mb-4">{extraInfo}</p>
            <a
              href={`https://www.themoviedb.org/${isTV ? "tv" : "movie"}/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-Orange hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
            >
              View on TMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDetails;