import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full h-14 flex justify-between align-middle items-center absolute text-white">
      <Link to={"/MovieDB/"}>
        <h1 className="ml-6 text-lg tracking-widest border-2 rounded-md px-2 cursor-pointer">
          MovieDB
        </h1>
      </Link>
    </header>
  );
};
