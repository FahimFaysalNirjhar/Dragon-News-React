import React, { use } from "react";
import { Link, NavLink } from "react-router";
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

  const getInitial = (email) => email?.charAt(0).toUpperCase() ?? "?";

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 py-3 max-w-11/12 mx-auto px-4 justify-between items-center">
      {/* Logo placeholder */}
      <div className="hidden md:block" />

      {/* Nav links */}
      <nav className="flex gap-4 md:gap-7 text-sm md:text-base text-base-300 flex-wrap justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold border-b-2 border-indigo-500 pb-0.5"
              : "hover:text-base-content transition-colors duration-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold border-b-2 border-indigo-500 pb-0.5"
              : "hover:text-base-content transition-colors duration-200"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold border-b-2 border-indigo-500 pb-0.5"
              : "hover:text-base-content transition-colors duration-200"
          }
        >
          Career
        </NavLink>
      </nav>

      {/* User actions */}
      <div className="flex items-center gap-3">
        {user ? (
          <>
            {/* Styled email badge */}
            <div className="flex items-center gap-2 bg-base-200 border border-base-300 rounded-full pl-1 pr-3 py-1">
              <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700 flex-shrink-0">
                {getInitial(user.email)}
              </div>
              <span className="text-sm text-base-content font-normal max-w-[160px] truncate">
                {user.email}
              </span>
            </div>

            {/* Logout button */}
            <button
              onClick={handleLogOut}
              className="btn btn-primary text-white px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Guest avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-base-200 border border-base-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-base-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>

            {/* Login link */}
            <Link
              to="/auth/login"
              className="btn btn-primary text-white px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
