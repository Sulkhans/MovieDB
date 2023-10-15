import React, { useEffect, useState } from "react";
import Arrow from "../assets/arrow.svg?react";
import Next from "../assets/angle.svg?react";
import Star from "../assets/star.svg?react";

export const Main = () => {
  const [latestMovies, setLatestMovies] = useState([[]]);
  const [index, setIndex] = useState(0);
  const handleNext = () => setIndex((prevIndex) => (prevIndex + 1) % 5);

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
      className="w-screen h-screen text-white bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(10, 10, 10, 0.3), transparent ), linear-gradient(to top, rgb(10, 10, 10) 20%, transparent), url('https://image.tmdb.org/t/p/original/${latestMovies[index].backdrop_path}`,
      }}
    >
      <div className="h-2/3 flex justify-between items-end ">
        <div className=" flex flex-col ml-6 mb-8">
          <h1 className="text-4xl font-medium mb-6 sm:text-7xl">
            {latestMovies[index].original_title}
          </h1>
          <div className="flex items-center">
            <div className="flex items-center border-2 rounded-full bg-white text-black font-medium px-3 py-2 mr-3">
              <Star className="w-4 h-4 mr-1 mb-[3px]" />
              {latestMovies[index].vote_average}
            </div>
            <button className="flex items-center w-fit px-6 py-2 border-2 rounded-full border-white border-opacity-30">
              More Info <Arrow className="w-5 h-5 ml-1 fill-white" />
            </button>
          </div>
        </div>
        <div className="mr-5 self-center">
          <button onClick={handleNext}>
            <Next className="w-6 h-6 fill-neutral-200" />
          </button>
        </div>
      </div>
      <div className="h-1/3 ">trednding</div>
    </main>
  );
};
