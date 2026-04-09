import React from "react";
import NavLinks from "../components/NavLinks/NavLinks";
import Login from "../pagees/Login/Login";
import { Outlet } from "react-router";

const Authentication = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <NavLinks></NavLinks>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Authentication;
