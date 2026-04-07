import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pagees/Home/Home";
import Career from "../pagees/Career/Career";
import About from "../pagees/About/About";
import CategoryNews from "../pagees/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    HydrateFallback: () => <div>Loading...</div>,
    children: [
      // renders at "/dashboard"
      { index: true, path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/category/:id",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/news-data/refs/heads/main/news.json",
          ).then((res) => res.json()),
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
]);

export default router;
