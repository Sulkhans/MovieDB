import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";

export const Info = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id, type } = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;
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
      .then((json) => setItem(json))
      .catch((err) => console.error("error:" + err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="text-white">
      <Header />
      {loading ? (
        <></>
      ) : (
        <div
          className="bg-center bg-no-repeat bg-cover pt-16 px-6 min-h-screen flex xl:pt-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgb(10, 10, 10, 0.3), transparent ), linear-gradient(to top, rgb(10, 10, 10) 30%, transparent), url('https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          }}
        >
          <div className="flex flex-col mt-6 lg:flex-row lg:items-center xl:px-28 2xl:px-56">
            <img
              loading="lazy"
              className="w-60 rounded-lg self-center lg:w-80 lg:mx-12 2xl:w-1/3"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
            <div className="flex flex-col items-center lg:items-start 2xl:pl-16">
              <h1 className="text-2xl py-6 text-center lg:text-start lg:text-5xl 2xl:text-8xl">
                {item.title || item.name}
              </h1>
              <div className="flex gap-4 justify-center flex-wrap">
                {item.genres.map((genre) => (
                  <h2
                    key={genre.id}
                    className="px-4 py-2 border rounded-full self-center 2xl:text-2xl"
                  >
                    {genre.name}
                  </h2>
                ))}
              </div>
              <div className="w-80 grid grid-rows-2 grid-cols-2 justify-items-center gap-y-2 my-6 text-lg lg:justify-items-start 2xl:text-2xl 2xl:w-96 2xl:py-4">
                <h2>Release date:</h2>
                <h2>{item.release_date || item.first_air_date}</h2>
                <h2>Runtime:</h2>
                <h2>
                  {item.runtime
                    ? `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m`
                    : `${item.last_episode_to_air.runtime}m`}
                </h2>
                {type === "tv" && (
                  <>
                    <h2>Episodes:</h2>
                    <h2>{item.number_of_episodes}</h2>
                  </>
                )}
                <h2>Rating:</h2>
                <h2>{item.vote_average.toFixed(1)}</h2>
              </div>
              <h2 className="italic opacity-60 2xl:text-4xl">{item.tagline}</h2>
              <div className="self-start py-6 sm:px-16 lg:px-0 2xl:text-2xl">
                <h2 className="font-medium text-xl pb-2 2xl:text-4xl 2xl:py-4">
                  Overview
                </h2>
                <p>{item.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
