import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Loader } from "./Loader";

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
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_ACCESS_TOKEN,
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
      {loading ? (
        <Loader />
      ) : (
        <div
          className="bg-center bg-no-repeat bg-cover pt-16 lg:pt-0 px-6 min-h-screen flex justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgb(10, 10, 10, 0.3), transparent ), linear-gradient(to top, rgb(10, 10, 10) 30%, transparent), url('https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          }}
        >
          <div className="flex flex-col mt-6 lg:flex-row lg:items-center xl:px-28">
            <img
              loading="lazy"
              className="w-60 rounded-lg self-center lg:w-80 lg:mx-12"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-2xl py-6 text-center lg:text-start lg:text-5xl">
                {item.title || item.name}
              </h1>
              <div className="flex gap-4 justify-center flex-wrap">
                {item.genres.map((genre) => (
                  <h2
                    key={genre.id}
                    className="px-4 py-2 bg-[#252422] rounded-full self-center text-sm"
                  >
                    {genre.name}
                  </h2>
                ))}
              </div>
              <div className="w-80 grid grid-rows-2 grid-cols-2 justify-items-center gap-y-2 my-6 lg:justify-items-start">
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
              <h2 className="italic opacity-60">{item.tagline}</h2>
              <div className="self-start pt-6 sm:px-16 lg:px-0">
                <h2 className="font-medium text-xl pb-2">Overview</h2>
                <p>{item.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
