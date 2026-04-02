import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png";
import "../../App.css";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-4 py-2 overflow-hidden max-w-11/12 mx-auto p-3 my-8 justify-between items-center">
      <div></div>
      <nav className="flex gap-4 text-base-300">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>
      <div className="flex items-center gap-3">
        <img src={user} alt="user avatar" className="w-8 h-8 rounded-full" />
        <button className="btn btn-primary text-white px-6 py-2 text-sm font-medium">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
