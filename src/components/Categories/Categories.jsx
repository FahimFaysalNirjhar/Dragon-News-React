import React, { use } from "react";

const categoryPromise = fetch(
  "https://raw.githubusercontent.com/FahimFaysalNirjhar/categories-data/refs/heads/main/categories.json",
).then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div className="flex flex-col">
      {categories.map((category) => (
        <button
          key={category.id}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
