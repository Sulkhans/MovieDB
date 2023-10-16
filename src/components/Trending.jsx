import React, { useEffect, useState } from "react";

export const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([{}]);

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
      .then((json) => setTrendingMovies(json.results.splice(0, 10)))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <section className="h-2/5 mx-6">
      <h2 className="mb-2">Trending now</h2>
      <div className="flex  overflow-x-scroll h-3/4">
        {trendingMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="w-56 border"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
