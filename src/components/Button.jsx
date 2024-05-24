import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg?react";

export const Button = (props) => {
  return (
    <Link
      to={props.path}
      className="flex items-center sm:text-lg pl-4 pr-3 py-1 border-2 rounded-full border-white border-opacity-30 fill-white hover:bg-white hover:text-black hover:fill-black transition-all"
    >
      <span>See more</span>
      <Arrow className="w-5 h-5 ml-1" />
    </Link>
  );
};
