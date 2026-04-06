import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import NavLinks from "../components/NavLinks/NavLinks";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <NavLinks></NavLinks>
          <Outlet></Outlet>
        </nav>
      </header>
    </>
  );
};

export default HomeLayout;
