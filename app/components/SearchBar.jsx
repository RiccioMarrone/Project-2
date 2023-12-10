import React from "react";

const SearchBar = ({ searchBar }) => {
  return (
    <div
      className={`${
        searchBar ? "opacity-100" : "opacity-0"
      } text-[17px] md:text-[20px] bg-[#010202]  w-full h-screen z-10 fixed top-[120px] flex flex-col`}
    >
      <div className="bg-[#141519] h-auto  py-[3.4em] px-10 flex flex-col items-center justify-start">
        <input
          type="text"
          placeholder="Cerca ..."
          className=" relative focus:outline-none text-[2.5em] w-full  bg-[#141519] text-[#A0A0A0] border-none "
        />
        <span className="relative w-full border-b-2 border-b-orange-500"></span>
      </div>
    </div>
  );
};

export default SearchBar;
