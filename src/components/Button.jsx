import Arrow from "../assets/arrow.svg?react";

export const Button = () => {
  return (
    <button className="flex items-center px-4 py-1 border-2 rounded-full border-white border-opacity-30 fill-white font-medium hover:bg-white hover:text-black hover:fill-black transition-all">
      See more <Arrow className="w-5 h-5 ml-1 -mr-1" />
    </button>
  );
};