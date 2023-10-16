import React from "react";

export const Header = () => {
  return (
    <header className="w-screen h-12 flex justify-between align-middle items-center absolute text-white">
      <h1
        className="ml-6 text-lg tracking-widest border-2 rounded-md px-2 cursor-pointer"
        onClick={() => {
          location.reload();
        }}
      >
        MovieDB
      </h1>
      <nav>
        <a href="#home" className="mr-6">
          Home
        </a>
        <a href="" className="mr-6">
          Trending
        </a>
      </nav>
    </header>
  );
};
