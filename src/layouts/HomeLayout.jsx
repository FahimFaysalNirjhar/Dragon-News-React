import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import NavLinks from "../components/NavLinks/NavLinks";
import { Outlet, useNavigation } from "react-router";
import LeftAside from "../pagees/LeftAside/LeftAside";
import RightAside from "../pagees/RightAside/RightAside";
import Loading from "../components/Loading/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <header>
        <Header />
        <section>
          <LatestNews />
        </section>
        <nav>
          <NavLinks />
        </nav>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-11/12 mx-auto my-8 px-4">
        <aside className="md:col-span-3 order-1 md:order-1 md:sticky md:top-0 md:h-fit">
          <LeftAside />
        </aside>

        <section className="md:col-span-6 order-2 md:order-2">
          {state === "loading" ? <Loading></Loading> : <Outlet />}
        </section>

        <aside className="md:col-span-3 order-3 md:order-3 md:sticky md:top-0 md:h-fit">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
