import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-Red mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Sorry, the page you're looking for doesn't exist.</p>
        <Link
          to="/content/movies"
          className="bg-Orange hover:bg-orange-600 text-white px-6 py-2 rounded-md"
        >
          Back to Movies
        </Link>
      </div>
    </div>
  );
}

export default NotFound;