import React, { useEffect, useState } from "react";
import { PageNav } from "./PageNav";
import { Link } from "react-router-dom";

export const List = (props) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${props.media}/${props.search}?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_ACCESS_TOKEN,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setList(json.results);
        setTotalPages(json.total_pages);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [page]);

  return (
    <div className="bg-gradient-to-tl from-neutral-950 to-neutral-800 ... text-white min-h-screen">
      <div className="pt-16 px-6">
        <h1 className="text-2xl my-6">{props.name}</h1>
        <section className="flex flex-wrap justify-center gap-4 sm:gap-11 py-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="w-36 sm:w-60 scale-[0.98] hover:scale-105 transition-all"
            >
              <Link to={`/MovieDB/${props.media}/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  loading="lazy"
                  className="rounded-lg"
                />
                <h2 className="sm:text-lg mt-4">{item.title || item.name}</h2>
              </Link>
            </div>
          ))}
        </section>
      </div>
      <PageNav page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
