import { Link } from "react-router-dom";

export const Button = (props) => {
  return (
    <Link
      to={props.path}
      className="flex items-center px-4 py-1 bg-[#252422] rounded-full fill-white hover:bg-white hover:text-black hover:fill-black transition-all duration-500"
    >
      <span>See more</span>
    </Link>
  );
};
