import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_ACCESS_TOKEN,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setTrendingMovies(json.results))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="h-[45%] max-h-80 mt-2">
      <div className="flex justify-between items-center ">
        <h2 className="text-xl">Trending now</h2>
        <Button path="/MovieDB/Trending/1" />
      </div>
      <div className="flex overflow-x-scroll h-3/4 gap-x-4">
        {trendingMovies.slice(0, 10).map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col justify-center scale-[0.98] hover:scale-100 transition-all"
          >
            <Link to={`/MovieDB/movie/${movie.id}}`}>
              <div
                className="w-72 h-40 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
                }}
              />
              <h3 className="mt-3 text-lg">
                {movie.title.length > 30
                  ? movie.title.slice(0, 30) + "..."
                  : movie.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
