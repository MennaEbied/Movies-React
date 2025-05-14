// App.jsx
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
            path: "movies",
            children: [
              { index: true, element: <Movies /> },
              { path: ":id", element: <MovieDetails /> }
            ]
          }
      ],
    },
  ]);
  
  function App() {
    return <RouterProvider router={router} />;
  }
  
  export default App;
  