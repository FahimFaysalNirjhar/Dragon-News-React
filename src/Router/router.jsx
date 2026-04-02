import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pagees/Home/Home";
import About from "../pagees/About/About";
import Career from "../pagees/Career/Career";

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
