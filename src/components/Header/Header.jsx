import React from "react";
import "../../App.css";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="text-base-300 mt-5 text-lg">
          Journalism Without Fear or Favour
        </p>
        <p className="mt-3 text-xl font-medium">
          <span className="text-base-400">{format(new Date(), "EEEE")}</span>
          {", "}
          <span className="text-base-300">
            {format(new Date(), "MMMM dd, yyyy")}
          </span>
        </p>
      </div>
    </>
  );
};

export default Header;
