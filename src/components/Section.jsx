import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Section = (props) => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">{props.name}</h2>
        <Button path={props.path} />
      </div>
      <div className="flex overflow-x-scroll gap-x-4">
        {props.data.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center mb-2 scale-[0.98] hover:scale-100 transition-all"
          >
            <Link to={`/MovieDB/${props.media}/${item.id}}`}>
              <div
                className="w-72 h-96 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.poster_path}')`,
                }}
              />
              <h3 className="mt-3 text-lg">
                {(item.name || item.title).length > 33
                  ? (item.name || item.title).slice(0, 33) + "..."
                  : item.name || item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
