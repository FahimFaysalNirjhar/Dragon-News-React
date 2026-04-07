import React, { use } from "react";
import { NavLink } from "react-router";
import "../../App.css";

const categoryPromise = fetch(
  "https://raw.githubusercontent.com/FahimFaysalNirjhar/categories-data/refs/heads/main/categories.json",
).then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-2 p-2">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.id}`}
          className={({ isActive }) =>
            `btn btn-sm md:btn-md w-full justify-start font-medium rounded-lg
             ${isActive ? "btn-secondary text-white" : "btn-ghost bg-white hover:btn-secondary"}`
          }
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
