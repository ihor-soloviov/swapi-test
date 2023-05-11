import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-gray-800 md:flex md:items-center md:justify-evenly">
      <nav className="p-5 shadow flex md:flex md:justify-around">
        <NavLink
          to="/"
          className="text-white text-4xl hover:text-yellow-300 duration-500 mx-4"
        >
          HOME
        </NavLink>
        <NavLink
          to="/characters"
          className="text-white text-4xl hover:text-yellow-300 duration-500 mx-4"
        >
          CHARS
        </NavLink>
      </nav>
    </div>
  );
};
