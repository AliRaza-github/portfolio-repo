"use client";
import Image from "next/image";
import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { ModeToggle } from "../ui/ThemeProvider";
import { Link } from "react-scroll";

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
            <Image src="/images/Nav_logo_black.svg" width={30} height={30} alt="logo"/>
          </div>
          <VscThreeBars className="block  md:hidden cursor-pointer" onClick={handleClick} />
        </div>
        <div className={`${show ? "max-h-screen" : "max-h-0"} md:max-h-screen md:flex overflow-hidden transition-max-height duration-700 ease-linear gap-10 w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row gap-5  items-center text-lg capitalize text-gray-900 dark:text-white">
            <div className="text-center cursor-pointer">
              <Link activeClass="active" to="home_section "  smooth={true} offset={300} duration={500}>
                Home
              </Link>
            </div>
            <div className="text-center cursor-pointer">
              <Link activeClass="active" to="skills_section" spy={true} smooth={true} offset={0} duration={1000}>
                Skills
              </Link>
            </div>
            <div className="text-center cursor-pointer">
              {" "}
              <Link activeClass="active" to="footer_section" spy={true} smooth={true} offset={0} duration={3000}>
                Contact
              </Link>
            </div>
            <div className="text-center cursor-pointer">
              <Link activeClass="active" to="projects_section" spy={true} smooth={true} offset={0} duration={1500}>
                Projects
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center md:items-center mt-3 md:mt-0">
            <ModeToggle />
            {/* <button className="bg-black rounded-lg text-white px-2 py-1 capitalize">download cV</button> */}
            <a href="/images/AliRaza.FullStackDeveloper.pdf" download className="bg-black rounded-lg text-white px-2 py-1 capitalize">
              download cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
