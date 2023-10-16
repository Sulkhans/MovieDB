import { useEffect, useState } from "react";
import { Home } from "./Home";
import { Trending } from "./Trending";

export const Main = () => {
  const [latestMovies, setLatestMovies] = useState([{}]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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
      .then((json) => setLatestMovies(json.results.slice(0, 5)))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <main
      id="home"
      className="w-screen h-screen text-white bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(10, 10, 10, 0.3), transparent ), linear-gradient(to top, rgb(10, 10, 10) 20%, transparent), url('https://image.tmdb.org/t/p/original/${latestMovies[index].backdrop_path}`,
      }}
    >
      <Home latestMovies={latestMovies} index={index} setIndex={setIndex} />
      <Trending />
    </main>
  );
};
