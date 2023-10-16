import React, { useEffect, useState } from "react";

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
    <section className="h-2/5 mx-6">
      <h2 className="mb-4 text-lg">Trending now</h2>
      <div className="flex  overflow-x-scroll h-3/4">
        {trendingMovies.map((movie) => (
          <div key={movie.id}>
            <div
              className="w-60 border h-4/5 mr-4 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
              }}
            ></div>
            <h2 className="my-2">
              {movie.original_title.length > 25
                ? movie.original_title.slice(0, 25) + "..."
                : movie.original_title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};
