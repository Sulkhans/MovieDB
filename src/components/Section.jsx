import React from "react";
import { Button } from "./Button";

export const Section = (props) => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">{props.name}</h2>
        <Button />
      </div>
      <div className="flex overflow-x-scroll gap-x-4">
        {props.data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center mb-2 cursor-pointer scale-[0.98] hover:scale-100 transition-all"
          >
            <div
              className="w-72 h-96 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.poster_path}')`,
              }}
            />
            <h3 className="mt-3 text-lg">{item.name || item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
