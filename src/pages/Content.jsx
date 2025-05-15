import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchContent } from "../util/API";
import Card from "../components/Card/Card"

function Content() {
  const { type = "movies" } = useParams(); // Default to movies if no type
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const contentTypes = [
    { id: "movies", label: "Movies", apiType: "movies" },
    { id: "tv", label: "TV Shows", apiType: "tv" },
    { id: "animatedMovies", label: "Animated Movies", apiType: "animatedMovies" },
    { id: "animatedTV", label: "Animated TV Shows", apiType: "animatedTV" },
  ];

  useEffect(() => {
    const getContent = async () => {
      try {
        setLoading(true);
        const validType = contentTypes.find(ct => ct.id === type)?.apiType || "movies";
        const data = await fetchContent(validType);
        setContent(data.results.filter(item => item && item.id));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getContent();
  }, [type]);

  const handleTabChange = (newType) => {
    navigate(`/content/${newType}`);
  };

  if (loading) {
    return <div className="text-center text-white min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 min-h-screen flex items-center justify-center">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen mx-auto px-4 py-8 bg-gray-900 pt-20 md:pt-24">
      <h1 className="text-3xl font-bold text-Orange mb-6">Explore Content</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {content.length === 0 ? (
          <p className="text-white">No content found.</p>
        ) : (
          content.map((item) => (
            <Card
              key={item.id}
              item={item}
              type={type === "tv" || type === "animatedTV" ? "tv" : "movies"}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Content;