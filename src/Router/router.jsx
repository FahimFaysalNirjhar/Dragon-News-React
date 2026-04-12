import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pagees/Home/Home";
import Career from "../pagees/Career/Career";
import About from "../pagees/About/About";
import CategoryNews from "../pagees/CategoryNews/CategoryNews";
import Authentication from "../layouts/Authentication";
import Login from "../pagees/Login/Login";
import Register from "../pagees/Login/Register/Register";
import NewsDetails from "../pagees/NewsDetails/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    HydrateFallback: () => (
      <span className="loading loading-dots loading-xl"></span>
    ),
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
  {
    path: "/auth",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    element: <NewsDetails></NewsDetails>,
    loader: () =>
      fetch(
        "https://raw.githubusercontent.com/FahimFaysalNirjhar/news-data/refs/heads/main/news.json",
      ).then((res) => res.json()),
    HydrateFallback: () => (
      <span className="loading loading-dots loading-xl"></span>
    ),
  },
]);

export default router;
