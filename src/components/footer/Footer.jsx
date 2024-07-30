import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-gray-200 pt-10 dark:bg-slate-700">
      <div className="container pb-28">
        <div className="text-center pt-20 py-5">
          <button className="capitalize bg-gray-300 w-28 rounded-full py-1  transition-transform transform hover:scale-105 duration-300 dark:text-black">footer</button>
          <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet? lorem20</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <FaRegMessage className="text-2xl mobile:text-xl" />
          <h1 className="text-3xl  mobile:text-xl font-semibold">Lorem ipsum dolor sit amet.</h1>
          <FaMailBulk className="text-2xl  mobile:text-xl" />
        </div>
        <div className="flex justify-center items-center gap-5">
          <IoCallOutline className="text-2xl  mobile:text-xl" />
          <h1 className="text-3xl font-semibold  mobile:text-xl">+92 303 3997540</h1>
          <FaMailBulk className="text-2xl  mobile:text-xl" />
        </div>
      </div>
      <div className="bg-gray-300 text-center  mobile:text-sm dark:text-black dark:bg-slate-400">
        <p>@ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, voluptates!</p>
        </div>
    </div>
  );
};

export default Footer;



