import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/search.svg?react";
import { Box } from "./Box";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [focused, setFocused] = useState(false);

  const handleChange = (event) => setSearch(event.target.value);

  useEffect(() => {
    if (search.length > 3) {
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
    }
  }, [search]);

  return (
    <header className="w-full h-14 flex justify-between align-middle items-center absolute px-6 text-white">
      <Link to={"/MovieDB/"}>
        <h1 className="text-xl tracking-widest border-2 rounded-md px-2 cursor-pointer">
          MovieDB
        </h1>
      </Link>
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="outline-none bg-transparent border-b-2 py-2 pr-7 w-40 text-lg placeholder:text-white placeholder:opacity-70 focus:placeholder:opacity-0 sm:hover:w-60 sm:focus:w-60 transition-all"
        />
        <Link className="flex items-center">
          <Search className="w-5 h-5 fill-white absolute right-0" />
        </Link>
        <Box result={result} search={search} focused={focused} />
      </div>
    </header>
  );
};
