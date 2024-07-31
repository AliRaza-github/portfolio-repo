"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TbBrightnessUp } from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import { ModeToggle } from "../ui/ThemeProvider";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="py-1 pt-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between  items-start md:items-center ">
        <div className="flex justify-between w-full md:w-auto items-center">
          <div className="dark:bg-white dark:p-1 dark:rounded-md">
            <Image src="/images/Nav_logo_black.svg" width={30} height={30} alt="logo" />
          </div>
          <VscThreeBars className="block  md:hidden cursor-pointer" onClick={handleClick} />
        </div>
        <div className={`${show ? "max-h-screen" : "max-h-0"} md:max-h-screen md:flex overflow-hidden transition-max-height duration-700 ease-linear gap-10 w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row gap-5  text-lg capitalize text-gray-900 dark:text-white">
            <div className="text-center ">about</div>
            <div className="text-center ">home</div>
            <div className="text-center ">contact</div>
            <div className="text-center ">projects</div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center md:items-center mt-3 md:mt-0">
            <ModeToggle />
            <button className="bg-black rounded-lg text-white px-2 py-1 capitalize">download cV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
