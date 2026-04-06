import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import NavLinks from "../components/NavLinks/NavLinks";
import { Outlet } from "react-router";
import LeftAside from "../pagees/LeftAside/LeftAside";

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
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-5 max-w-11/12 mx-auto my-8">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default HomeLayout;
