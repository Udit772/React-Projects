import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      icons: <IoSearch />,
      name: "Search",
    },
    {
      icons: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
    },
    {
      icons: null,
      name: "Help",
    },
    {
      icons: null,
      name: "Sign In",
    },
    {
      icons: null,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay z-10 w-full h-full fixed duration-500"
        onClick={() => {
          setToggle(false);
        }}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] h-full  bg-white absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl sticky top-0 z-40 bg-white text-[#3d4152] text-[14px]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" className="w-full" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b border-b-[3px] border-[black]">
              Crossings Republ...
            </span>{" "}
            Crossings Republik Rd,
            <RxCaretDown
              onClick={() => setToggle(true)}
              fontSize={25}
              className="inline text-[#ff5200] cursor-pointer"
            />
          </div>
          <nav className="flex list-none gap-5 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex hover:text-[#ff5200] items-center gap-2"
                >
                  {link.icons}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
