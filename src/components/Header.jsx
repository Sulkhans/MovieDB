import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "./Box";
import Search from "../assets/search.svg?react";
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY5ZmY2YTMwOGRlOWRlNDBlMmMwMDlmYTlkMGFhYSIsInN1YiI6IjY1Mjk3NDJkMWYzZTYwMDBmZjg1MTRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7zkmF3jayq5zSMH3TS2TsU9bvQNABU0myOj-lUjHkEk",
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
      <div className="flex items-center relative group">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none leading-4 bg-transparent rounded-none border-b-2 py-2 pr-7 w-36 sm:w-40 placeholder:text-white placeholder:opacity-70 focus:placeholder:opacity-0 sm:hover:w-60 sm:focus:w-60 transition-all"
        />
        <Link className="flex items-center">
          <Search className="w-4 h-4 fill-white absolute right-0" />
        </Link>
        {result && <Box result={result} search={search} focused={false} />}
      </div>
    </header>
  );
};
