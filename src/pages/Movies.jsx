/* eslint-disable no-unused-vars */
import MovieCard from "../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import { fetchPopularMovies } from "../util/API";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchPopularMovies();
        setMovies(data.results); // TMDB API returns movies in a `results` array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getMovies();
  }, []);
  if (loading) {
    return <div className="text-center text-white">Loading movies...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-Orange mb-6">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default Movies;
