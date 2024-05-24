import React from "react";
import { Link } from "react-router-dom";

export const Box = ({ result }) => {
  return (
    <div className="hidden group-focus-within:flex absolute z-10 top-14 right-0 rounded-lg flex-wrap gap-4 p-4 w-[17rem] sm:w-[25rem] bg-gradient-to-tl from-neutral-950 to-neutral-800 ... transition-all">
      {result.length > 0 ? (
        result.map((item) => (
          <div
            key={item.id}
            className="flex scale-[0.97] hover:scale-100 transition-all"
          >
            <Link to={`/MovieDB/${item.media_type}/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                className="w-28 h-40 rounded-lg"
              />
            </Link>
          </div>
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
};
