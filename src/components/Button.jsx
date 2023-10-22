import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg?react";

export const Button = (props) => {
  return (
    <button className="flex items-center text-lg px-5 py-1 border-2 rounded-full border-white border-opacity-30 fill-white hover:bg-white hover:text-black hover:fill-black transition-all">
      <Link to={props.path}>See more</Link>
      <Arrow className="w-5 h-5 ml-1 -mr-1" />
    </button>
  );
};
