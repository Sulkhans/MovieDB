import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import { List } from "./components/List.jsx";

const router = createBrowserRouter([
  {
    path: "/MovieDB/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/MovieDB/Trending",
    element: <List name="Trending now" media="movie" search="popular" />,
  },
  {
    path: "/MovieDB/Upcoming",
    element: <List name="Upcoming" media="movie" search="upcoming" />,
  },
  {
    path: "/MovieDB/TopMovies",
    element: <List name="Top Rated Movies" media="movie" search="top_rated" />,
  },
  {
    path: "/MovieDB/TopTV",
    element: <List name="Top Rated TV Shows" media="tv" search="top_rated" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
