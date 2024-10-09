import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "./Box";
import Search from "../assets/search.svg?react";
import Cancel from "../assets/cancel.svg?react";
import Icon from "../assets/icon.svg?react";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (search.length >= 3) {
      const url = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_ACCESS_TOKEN,
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((json) =>
          setResult(
            json.results
              .filter((item) => item.media_type != "person")
              .slice(0, 6)
          )
        )
        .catch((err) => console.error("error:" + err));
    } else setResult(null);
  }, [search]);

  return (
    <header className="w-full h-12 flex justify-between align-middle items-end absolute px-6 text-white">
      <Link to={"/MovieDB/"}>
        <Icon className="w-8 h-8 fill-white" />
      </Link>
      <div className="flex items-center bg-[#252422] rounded-full relative group">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none indent-4 leading-4 bg-transparent rounded-none py-2.5 pr-7 w-36 sm:w-48 placeholder:text-white placeholder:opacity-70 focus:placeholder:opacity-0 sm:hover:w-60 sm:focus:w-60 transition-all"
        />
        {search.length < 1 ? (
          <Search className="w-4 h-4 fill-white absolute right-4 mb-0.5" />
        ) : (
          <Cancel
            onClick={() => setSearch("")}
            className="w-6 h-6 fill-white absolute right-3 cursor-pointer"
          />
        )}
        {result && <Box result={result} />}
      </div>
    </header>
  );
};
