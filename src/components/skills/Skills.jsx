import React from "react";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoSass, IoLogoCss3, IoLogoGithub } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiBootstrap, SiSocketdotio, SiHtml5, SiRedux, SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="py-20">
      <div className="text-center  ">
        <button className="capitalize bg-gray-300 w-28 rounded-full py-1   dark:text-black ">Skills</button>
        <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet?</p>
      </div>
      <div className="grid  sm:grid-cols-8 py-10 container gap-2 text-lg mobile:grid-cols-2 ">
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <IoLogoReact className="text-blue-500 text-5xl " />
          <p>React JS</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <IoLogoNodejs className="text-green-400 text-5xl " />
          <p>Node JS</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiExpress className="text-black text-5xl   dark:text-white" />
          <p>Express JS</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiMongodb className="text-green-500 text-5xl bg-black p-2 rounded-full   dark:bg-white " />
          <p>MongoDB</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiNextdotjs className="text-black text-5xl dark:text-white " />

          <p>Next JS</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiTailwindcss className="text-blue-500 text-5xl " />
          <p>TailWind CSS</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiBootstrap className="text-violet-500 text-5xl " />
          <p>Bootstarp </p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiSocketdotio className="text-black text-5xl dark:text-white  " />
          <p>Socket.io</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <IoLogoSass className="text-pink-500 text-5xl " />
          <p>Sass/Scss</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiHtml5 className="text-orange-600 text-5xl " />
          <p>HTML</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <IoLogoCss3 className="text-blue-500 text-5xl " />
          <p>CSS</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <IoLogoJavascript className="text-yellow-300 text-5xl " />
          <p>JavaScript</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <IoLogoGithub className="text-black text-5xl dark:text-white  " />
          <p>GitHub</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiRedux className="text-violet-500 text-5xl " />
          <p>Redux</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <SiMysql className="text-blue-500 text-5xl " />
          <p>MySql</p>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center justify-center ">
          <FaAws className=" text-5xl text-orange-500"  />
          <p>AWS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
