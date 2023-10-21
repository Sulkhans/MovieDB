import React from "react";
import { Link } from "react-router-dom";

export const Box = ({ result, search, focused }) => {
  return (
    <div
      className="absolute z-10 top-16 right-0 w-72 rounded-lg flex flex-wrap gap-4 p-4 sm:w-[25rem] bg-gradient-to-tl from-neutral-950 to-neutral-800 ... transition-all"
      style={{
        visibility: search.length > 3 && focused ? "visible" : "hidden",
        opacity: search.length > 3 && focused ? 1 : 0,
      }}
    >
      {result.map((item) => (
        <div
          key={item.id}
          className="flex scale-[0.97] hover:scale-100 transition-all"
        >
          <Link to={`/MovieDB/${item.media_type}/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              className="w-28 rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
