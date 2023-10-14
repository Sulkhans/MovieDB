import React, { useEffect, useState } from "react";

export const Main = () => {
  const [latestMovies, setLatestMovies] = useState([]);

  //   useEffect(() => {
  //     const url =
  //       "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY5ZmY2YTMwOGRlOWRlNDBlMmMwMDlmYTlkMGFhYSIsInN1YiI6IjY1Mjk3NDJkMWYzZTYwMDBmZjg1MTRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7zkmF3jayq5zSMH3TS2TsU9bvQNABU0myOj-lUjHkEk",
  //       },
  //     };
  //     fetch(url, options)
  //       .then((res) => res.json())
  //       .then((json) => setLatestMovies(json.results.slice(0, 5)))
  //       .catch((err) => console.error("error:" + err));
  //   }, []);

  return (
    <div className="w-screen h-screen">
      <div></div>
      <div>trending</div>
    </div>
  );
};
