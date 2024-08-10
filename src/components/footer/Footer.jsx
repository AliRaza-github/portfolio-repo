import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import AlternatingTextAnimation from "../gsap/TextAnimation";

const data = {
  email :[
    "aliraza.email512@gmail.com","ar0005535@gmail.com"
  ]
  ,
  number :[
    "+92 303 3997540","+92 327 1590800"
  ]
}

const Footer = () => {
  return (
    <div className="bg-gray-200  dark:bg-slate-700" id="footer_section">
      <div className="container pb-28">
        <div className="text-center  py-10">
          <button className="capitalize bg-gray-300 w-28 rounded-full py-1  transition-transform transform hover:scale-105 duration-300 dark:text-black">footer</button>
          <p className="py-5 mobile:text-sm"></p>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-5">
          <FaRegMessage className="sm:text-2xl mobile:text-sm" />
          <h1 className="sm:text-3xl  mobile:text-sm font-semibold text-center text-violet-400">
            <AlternatingTextAnimation text ={data.email}  />
          </h1>
          <FaMailBulk className="sm:text-2xl  mobile:text-sm" />
        </div>

        <div className="flex justify-center flex-wrap items-center gap-5">
          <IoCallOutline className="sm:text-2xl  mobile:text-sm" />
          <h1 className="sm:text-3xl font-semibold  mobile:text-sm text-center text-violet-400">  <AlternatingTextAnimation text={data.number}/></h1>
          <FaMailBulk className="sm:text-2xl  mobile:text-sm" />
        </div>
      </div>
      <div className="bg-gray-300 text-center  mobile:text-sm dark:text-black dark:bg-slate-400">
        <p className="font-semibold"> &copy; Ali Raza fullStack developer</p>
      </div>
    </div>
  );
};

export default Footer;
