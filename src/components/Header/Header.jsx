import React from "react";
import "../../App.css";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 md:mt-10 px-4">
      <img
        src={logo}
        alt="logo"
        className="w-48 sm:w-64 md:w-80 lg:w-auto max-w-full h-auto"
      />
      <p className="text-base-300 mt-4 text-sm sm:text-base md:text-lg text-center">
        Journalism Without Fear or Favour
      </p>
      <p className="mt-2 md:mt-3 text-base sm:text-lg md:text-xl font-medium text-center">
        <span className="text-base-400">{format(new Date(), "EEEE")}</span>
        {", "}
        <span className="text-base-300">
          {format(new Date(), "MMMM dd, yyyy")}
        </span>
      </p>
    </div>
  );
};

export default Header;
