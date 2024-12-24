import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Category = () => {
  const [categories, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };
  const nextSlide = () => {
    if (categories.length - 8 === slide) return false;
    setSlide(slide + 3);
  };

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center my-5 justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft onClick={prevSlide} />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              style={{
                transform: `TranslateX(-${slide * 100}%)`,
              }}
              key={index}
              className="w-[200px] shrink-0 duration-500"
            >
              <img
                src={"http://localhost:5000/images/" + cat.image}
                alt=""
              ></img>
            </div>
          );
        })}
      </div>
      <hr className="my-6 border border-[1px]" />
    </div>
  );
};

export default Category;
