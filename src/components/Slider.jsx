import { Link } from "react-router-dom";
import Star from "../assets/star.svg?react";
import { useEffect } from "react";

export const Slider = ({ latestMovies, index, setIndex }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-[55%] flex justify-between items-end">
      <div className="flex flex-col mb-8">
        <h1 className="text-4xl font-medium mb-6 sm:text-7xl">
          {latestMovies[index].title}
        </h1>
        <div className="flex items-center">
          <div className="flex items-center border-2 rounded-full border-white bg-white text-black font-medium px-3 py-2 mr-3">
            <Star className="w-3.5 h-3.5 mr-1 mb-0.5" />
            {latestMovies[index].vote_average &&
              latestMovies[index].vote_average.toFixed(1)}
          </div>
          <Link to={`/MovieDB/movie/${latestMovies[index].id}}`}>
            <button className="px-6 py-2 border-2 rounded-full border-white border-opacity-30 hover:bg-white hover:text-black transition-all">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
