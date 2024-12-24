import React, { useEffect, useState } from "react";

import Card from "./Card";
const Category = () => {
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mb-[100px]">
      <div className="flex items-center my-5 justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Noida
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((d, i) => {
          return <Card {...d} key={i}></Card>;
        })}
      </div>
      <hr className="my-6 border border-[1px]" />
    </div>
  );
};

export default Category;
