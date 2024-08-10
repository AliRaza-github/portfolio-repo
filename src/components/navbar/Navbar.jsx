"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { ModeToggle } from "../ui/ThemeProvider";
import { Link } from "react-scroll";
import { gsap } from "gsap";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const logoRef = useRef(null); // Reference for the logo

  const outerCircleRef = useRef(null); // Reference for the outer circle

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

   
    if (outerCircleRef.current) {
      // Animate outer circle around the logo
      tl.to(outerCircleRef.current, {
        rotation: 360,
        duration: 15,
        ease: "none",
        transformOrigin: "center center"
      });
    }
  }, []);



  return (
    <div className="py-1 pt-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex justify-between w-full md:w-auto items-center relative">
          <div className="relative dark:bg-white dark:p-1 dark:rounded-md">
            <div ref={logoRef} className="relative z-10">
              <Image src="/images/Nav_logo_black.svg" width={30} height={30} alt="logo" />
            </div>
            {/* Rotating dotted line */}
           
            <div
              ref={outerCircleRef}
              className="absolute"
              style={{
                width: "50px",  // Adjust size to make it larger than the dotted line
                height: "50px",
                border: "2px dashed #000", // Change color and border style if needed
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                boxSizing: "border-box"
              }}
            />
          </div>
          <VscThreeBars className="block md:hidden cursor-pointer" onClick={handleClick} />
        </div>
        <div className={`${show ? "max-h-screen" : "max-h-0"} md:max-h-screen md:flex overflow-hidden transition-max-height duration-700 ease-linear gap-10 w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row gap-5 items-center text-lg capitalize text-gray-900 dark:text-white">
            <div className="text-center cursor-pointer hover:bg-violet-400 hover:rounded-sm px-2 bg-gray-200 rounded-sm">
              <Link activeClass="active" to="home_section" smooth={true} offset={300} duration={500}>
                Home
              </Link>
            </div>
            <div className="text-center cursor-pointer hover:bg-violet-400 hover:rounded-sm px-2 bg-gray-200 rounded-sm">
              <Link activeClass="active" to="skills_section" spy={true} smooth={true} offset={0} duration={1000}>
                Skills
              </Link>
            </div>
            <div className="text-center cursor-pointer hover:bg-violet-400 hover:rounded-sm px-2 bg-gray-200 rounded-sm">
              <Link activeClass="active" to="footer_section" spy={true} smooth={true} offset={0} duration={3000}>
                Contact
              </Link>
            </div>
            <div className="text-center cursor-pointer hover:bg-violet-400 hover:rounded-sm px-2 bg-gray-200 rounded-sm">
              <Link activeClass="active" to="projects_section" spy={true} smooth={true} offset={0} duration={1500}>
                Projects
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center md:items-center mt-3 md:mt-0">
            <ModeToggle />
            <a href="/images/AliRaza.FullStackDeveloper.pdf" download className="bg-black rounded-lg text-white px-2 py-1 capitalize hover:bg-violet-400 hover:rounded-lg">
              download cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

