import React, { useEffect, useState } from "react";
import { Button } from "./Button";

export const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY5ZmY2YTMwOGRlOWRlNDBlMmMwMDlmYTlkMGFhYSIsInN1YiI6IjY1Mjk3NDJkMWYzZTYwMDBmZjg1MTRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7zkmF3jayq5zSMH3TS2TsU9bvQNABU0myOj-lUjHkEk",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setTrendingMovies(json.results.slice(0, 15)))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="h-2/5 mx-6">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg">Trending now</h2>
        <Button />
      </div>
      <div className="flex  overflow-x-scroll overflow-y-visible h-3/4 gap-x-4">
        {trendingMovies.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer scale-[0.98] hover:scale-100 transition-all"
          >
            <div
              className="w-60 h-4/5 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
              }}
            ></div>
            <h2 className="mt-2">
              {movie.title.length > 30
                ? movie.title.slice(0, 30) + "..."
                : movie.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
