import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import "../../App.css";
import { AuthContext } from "../../Provider/AuthProvider";

const NavLinks = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout successful.");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 py-2 max-w-11/12 mx-auto px-4  justify-between items-center">
      {/* Logo placeholder */}
      <div className="hidden" />
      {user && user.email}
      {/* Nav links */}
      <nav className="flex gap-3 md:gap-6 text-sm md:text-base text-base-300 flex-wrap justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold border-b-2 border-indigo-500"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold border-b-2 border-indigo-500"
              : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold border-b-2 border-indigo-500"
              : ""
          }
        >
          Career
        </NavLink>
      </nav>

      {/* User actions */}
      <div className="flex items-center gap-2 md:gap-3">
        <img
          src={userIcon}
          alt="user avatar"
          className="w-8 h-8 rounded-full"
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary text-white px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary text-white px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
