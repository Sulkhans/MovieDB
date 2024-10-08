import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { List } from "./components/List.jsx";
import { Info } from "./components/Info.jsx";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/MovieDB/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "Trending",
        element: <List name="Trending now" media="movie" search="popular" />,
      },
      {
        path: "Upcoming",
        element: <List name="Upcoming" media="movie" search="upcoming" />,
      },
      {
        path: "TopMovies",
        element: (
          <List name="Top Rated Movies" media="movie" search="top_rated" />
        ),
      },
      {
        path: "TopTV",
        element: (
          <List name="Top Rated TV Shows" media="tv" search="top_rated" />
        ),
      },
      { path: ":type/:id", element: <Info /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
