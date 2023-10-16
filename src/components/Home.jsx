import Arrow from "../assets/arrow.svg?react";
import Next from "../assets/angle.svg?react";
import Star from "../assets/star.svg?react";
import { useEffect } from "react";

export const Home = ({ latestMovies, index, setIndex }) => {
  const handleNext = () => setIndex((prevIndex) => (prevIndex + 1) % 5);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-3/5 flex justify-between items-end ">
      <div className=" flex flex-col ml-6 mb-8">
        <h1 className="text-4xl font-medium mb-6 sm:text-7xl">
          {latestMovies[index].original_title}
        </h1>
        <div className="flex items-center">
          <div className="flex items-center border-2 rounded-full bg-white text-black font-medium px-3 py-2 mr-3">
            <Star className="w-4 h-4 mr-1 mb-[3px]" />
            {latestMovies[index].vote_average}
          </div>
          <button className="flex items-center w-fit px-6 py-2 border-2 rounded-full border-white border-opacity-30">
            More Info <Arrow className="w-5 h-5 ml-1 fill-white" />
          </button>
        </div>
      </div>
      <div className="mr-5 self-center">
        <button onClick={handleNext}>
          <Next className="w-6 h-6 fill-neutral-200" />
        </button>
      </div>
    </div>
  );
};
