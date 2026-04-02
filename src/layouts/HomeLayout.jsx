import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import NavLinks from "../components/NavLinks/NavLinks";

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
    </>
  );
};

export default HomeLayout;
