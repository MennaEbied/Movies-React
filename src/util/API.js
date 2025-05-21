const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchContent = async (contentType) => {
  if (!API_KEY) throw new Error("API key is missing");
  let url;
  switch (contentType) {
    case "movies":
      url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      break;
    case "tv":
      url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
      break;
    case "animatedMovies":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16&page=1`;
      break;
    default:
      throw new Error("Invalid content type");
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${contentType}: ${res.status}`);
  const data = await res.json();
  return data.results ? data : { results: [] };
};

export const fetchContentDetails = async (contentType, id) => {
  if (!API_KEY) throw new Error("API key is missing");
  if (!["movies", "tv"].includes(contentType)) throw new Error("Invalid content type for details");
  const type = contentType === "movies" ? "movie" : "tv";
  const res = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error(`Failed to fetch ${type} details: ${res.status}`);
  return res.json();
};

export const fetchSearchResults = async (query) => {
  if (!query) throw new Error("Search query is required");
  if (!API_KEY) throw new Error("API key is missing");
  const [movieRes, tvRes] = await Promise.all([
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`),
    fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`),
  ]);
  if (!movieRes.ok || !tvRes.ok) throw new Error(`Failed to fetch search results: ${movieRes.status}, ${tvRes.status}`);
  const [movies, tvShows] = await Promise.all([movieRes.json(), tvRes.json()]);
  return {
    movies: movies.results || [],
    tvShows: tvShows.results || [],
  };
};