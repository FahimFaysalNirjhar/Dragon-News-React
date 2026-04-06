import React, { use } from "react";
import { NavLink } from "react-router";
import "../../App.css";

const categoryPromise = fetch(
  "https://raw.githubusercontent.com/FahimFaysalNirjhar/categories-data/refs/heads/main/categories.json",
).then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div className="flex flex-col">
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          className={({ isActive }) =>
            `btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full
     ${isActive ? "btn-secondary text-white" : ""}`
          }
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
