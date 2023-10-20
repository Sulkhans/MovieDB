import React, { useEffect, useState } from "react";
import { Header } from "./Header";

export const List = (props) => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${props.media}/${props.search}?language=en-US&page=${page}`;
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
      .then((json) => setList(json.results))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="bg-gradient-to-tl from-neutral-950 to-neutral-800 ... text-white">
      <Header />
      <div className="pt-16 px-6">
        <h1 className="text-2xl my-6">{props.name}</h1>
        <section className="flex flex-wrap justify-center gap-11 py-4">
          {list.map((item) => (
            <div key={item.id} className="w-60">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                loading="lazy"
                className="rounded-lg"
              />
              <h2 className="text-lg mt-4">{item.title}</h2>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
