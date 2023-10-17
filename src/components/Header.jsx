import React from "react";

export const Header = () => {
  return (
    <header className="w-full h-14 flex justify-between align-middle items-center absolute text-white">
      <h1
        className="ml-6 text-lg tracking-widest border-2 rounded-md px-2 cursor-pointer"
        onClick={() => {
          location.reload();
        }}
      >
        MovieDB
      </h1>
      <nav>
        <a href=""></a>
      </nav>
    </header>
  );
};
