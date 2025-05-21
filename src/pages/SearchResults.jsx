import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchResults } from "../util/API";
import MovieCard from "../components/Card/Card";

function SearchResults() {
  const [results, setResults] = useState({ movies: [], tvShows: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        setLoading(true);
        const data = await fetchSearchResults(query);
        setResults({
          movies: data.movies.filter(item => item && item.id),
          tvShows: data.tvShows.filter(item => item && item.id),
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    if (query) getSearchResults();
    else {
      setError("No search query provided");
      setLoading(false);
    }
  }, [query]);

  if (loading) return <div className="text-center text-white min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="text-center text-Red min-h-screen flex items-center justify-center">Error: {error}</div>;

  return (
    <div className="min-h-screen mx-auto px-4 py-8 bg-gray-900">
      <h1 className="text-3xl font-bold text-Orange mb-6 mt-10">Search Results for "{query}"</h1>
      <h2 className="text-2xl font-semibold text-Orange mb-4">Movies</h2>
      {results.movies.length === 0 ? (
        <p className="text-white mb-6">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {results.movies.map((movie) => (
            <MovieCard key={movie.id} item={movie} type="movies" />
          ))}
        </div>
      )}
      <h2 className="text-2xl font-semibold text-orange-400 mb-4">TV Shows</h2>
      {results.tvShows.length === 0 ? (
        <p className="text-white">No TV shows found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.tvShows.map((show) => (
            <MovieCard key={show.id} item={show} type="tv" />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;