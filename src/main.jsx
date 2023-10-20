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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
