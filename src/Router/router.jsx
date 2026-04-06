import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pagees/Home/Home";
import Career from "../pagees/Career/Career";
import About from "../pagees/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      // renders at "/dashboard"
      { index: true, path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

export default router;
