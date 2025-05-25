import { Link } from "react-router-dom";

function Card({ item, type = "movies" }) {
  if (!item || !item.id) return null;

  const id = item.id;
  const title = type === "tv" ? item.name : item.title;
  const date = type === "tv" ? item.first_air_date : item.release_date;
  const linkPath = type === "tv" ? `/content/tv/${id}` : `/content/movies/${id}`;

  return (
    <Link to={linkPath} className="block">
      <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-shadow">
        <img
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Poster"
          }
          alt={title || "No Title"}
          className="w-full h-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title || "Unknown"}</h3>
          <p className="text-sm text-gray-400">{date || "N/A"}</p>
          <p className="mt-2 text-sm">{item.overview ? item.overview.slice(0, 100) + "..." : "No description available"}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;