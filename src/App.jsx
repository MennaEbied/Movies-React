import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Content from "./pages/Content";
import ContentDetails from "./pages/ContentDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "content/:type", element: <Content /> },
      { path: "content/:type/:id", element: <ContentDetails /> },
      { path: "movies", element: <Navigate to="/content/movies" replace /> },
      { path: "tvshows", element: <Navigate to="/content/tv" replace /> }, 
      { path: "animations", element: <Navigate to="/content/animatedMovies" replace /> },
  
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;