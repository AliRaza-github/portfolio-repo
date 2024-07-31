import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialFacebook } from "react-icons/sl";
import { PiLinkedinLogoThin } from "react-icons/pi";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className=" container py-28 mobile:py-10 mobile:px-10">
        <div className="grid sm:grid-cols-4 gap-2 mobile:gap-10 ">
          <div className=" mobile:col-span-4 sm:col-span-3  text-start order-2 sm:order-1">
            <div className="flex items-center gap-2 ">
              <h1 className="sm:text-5xl font-bold capitalize mobile:text-2xl">{`hi, i'm ali raza`}</h1>
              <Image src="/images/waving-hand.gif" width={0} height={0} alt="GIF" responsive className="w-10 sm:w-12" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-200">
                {" "}
               {` I'm Ali Raza, a Full Stack Developer specializing in the MERN stack. I build scalable web apps with React, Next.js, Redux, Node.js, Express, and MongoDB. Proficient in Tailwind CSS, Bootstrap, SCSS, JWT, JOI, RESTful APIs, Socket.IO,
                AWS, Vercel, Git, and Agile methodologies.`}
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 py-1">
              <IoLocationOutline />
              <p>RYK, punjab, Pakistan </p>
            </div>
            <div className="flex items-center gap-3 ps-1  ">
              <FaCircle className="text-[8px] text-green-600 ps-0" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex gap-3 pt-10 hover:">
              <VscGithubAlt />
              <SlSocialFacebook />
              <PiLinkedinLogoThin />
            </div>
          </div>
          <div className=" mobile:col-span-4 flex  justify-center sm:col-span-1 text-center items-center order-1 sm:order-2 ">
            <div className="profile">
              <Image src="/images/profile_light.png" width={250} height={0} className="profile_image" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
