"use client";

import React from "react";

interface CategoryFilterProps {
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="px-6 py-3 rounded-lg shadow-md bg-gray-100 text-gray-800 text-base font-medium cursor-default"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
