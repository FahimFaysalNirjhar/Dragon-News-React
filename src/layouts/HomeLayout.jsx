import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
    </>
  );
};

export default HomeLayout;
