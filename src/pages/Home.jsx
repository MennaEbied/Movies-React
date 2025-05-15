import { Link } from "react-router-dom";
import background from"../assets/background.jpg"

function Home() {
  return (
    <div className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={background} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-80"/> 
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 max-w-2xl">
          Free Movies to Watch, Anytime, Anywhere.
        </h1>
        <p className="text-xl md:text-2xl max-w-xl text-gray-300 mb-3 ">
          Start browsing top trending movies, powered by TMDB API. No signup required.
        </p>
        <Link
          to="/movies"
          className="mt-8 px-6 py-3 hover:bg-Orange bg-orange-600 text-white rounded-lg font-semibold transition text-lg"
        >
          Browse Movies
        </Link>
      </div>
    </div>
  );
}

export default Home;
