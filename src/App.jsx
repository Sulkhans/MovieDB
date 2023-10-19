import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

const App = () => {
  const [latestMovies, setLatestMovies] = useState([{}]);
  const [topMovies, setTopMovies] = useState([]);
  const [topShows, setTopShows] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY5ZmY2YTMwOGRlOWRlNDBlMmMwMDlmYTlkMGFhYSIsInN1YiI6IjY1Mjk3NDJkMWYzZTYwMDBmZjg1MTRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7zkmF3jayq5zSMH3TS2TsU9bvQNABU0myOj-lUjHkEk",
      },
    };
    const url1 =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const url2 =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const url3 =
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

    fetch(url1, options)
      .then((res) => res.json())
      .then((json) => setLatestMovies(json.results))
      .catch((err) => console.error("error:" + err));

    fetch(url2, options)
      .then((res) => res.json())
      .then((json) => setTopMovies(json.results))
      .catch((err) => console.error("error:" + err));

    fetch(url3, options)
      .then((res) => res.json())
      .then((json) => setTopShows(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div>
      <Header />
      <Home
        latestMovies={latestMovies}
        topMovies={topMovies}
        topShows={topShows}
      />
    </div>
  );
};

export default App;
