// components/MovieCard.jsx
function MovieCard({ movie }) {
    return (
      <div className="bg-dark text-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <p className="text-sm text-gray-400">{movie.release_date}</p>
          <p className="mt-2 text-sm">{movie.overview.slice(0, 100)}...</p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  