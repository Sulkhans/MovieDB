import React from "react";
import Prev from "../assets/prev.svg?react";
import Next from "../assets/next.svg?react";

export const PageNav = ({ page, setPage, totalPages }) => {
  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="flex justify-center items-center py-6 fill-white">
      <button disabled={page === 1} onClick={handlePrev}>
        <Prev className="w-10 h-10" />
      </button>
      <h1 className="text-lg mx-2">{page}</h1>
      <button disabled={page === totalPages} onClick={handleNext}>
        <Next className="w-10 h-10" />
      </button>
    </nav>
  );
};
