import React from "react";

export const Header = () => {
  return (
    <div className="w-screen h-12 flex justify-between align-middle items-center absolute text-neutral-100">
      <h1 className="ml-6">MovieDB</h1>
      <nav>
        <a href="" className="mr-6">
          Home
        </a>
        <a href="" className="mr-6">
          Trending
        </a>
      </nav>
    </div>
  );
};
