import { useEffect, useState } from "react";
import { Slider } from "./Slider";
import { Trending } from "./Trending";
import { Section } from "./Section";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [latestMovies, setLatestMovies] = useState([{}]);
  const [topMovies, setTopMovies] = useState([]);
  const [topShows, setTopShows] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

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
    const url4 =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=us";

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

    fetch(url4, options)
      .then((res) => res.json())
      .then((json) => setUpcoming(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <main className="text-white">
      <section
        className="h-screen bg-center bg-no-repeat bg-cover px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(10, 10, 10, 0.3), transparent ), linear-gradient(to top, rgb(10, 10, 10) 30%, transparent), url('https://image.tmdb.org/t/p/original/${latestMovies[index].backdrop_path}`,
        }}
      >
        <Slider latestMovies={latestMovies} index={index} setIndex={setIndex} />
        <Trending />
      </section>
      <section className="bg-neutral-950 px-6">
        <Section data={upcoming} name="Upcoming" path="/MovieDB/Upcoming" />
        <Section
          data={topMovies}
          name="Top Rated Movies"
          path="/MovieDB/TopMovies"
        />
        <Section
          data={topShows}
          name="Top Rated TV Shows"
          path="/MovieDB/TopTV"
        />
      </section>
    </main>
  );
};
