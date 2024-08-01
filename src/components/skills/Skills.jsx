"use client";
import React, { useState } from "react";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoSass, IoLogoCss3, IoLogoGithub } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiBootstrap, SiSocketdotio, SiHtml5, SiRedux, SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import "./skills.scss";

const skills = [
  { icon: <IoLogoReact />, name: "React JS", iconClass: "text-blue-500", description: "A JavaScript library for building user interfaces" },
  { icon: <IoLogoNodejs />, name: "Node JS", iconClass: "text-green-400", description: "JavaScript runtime built on Chrome's V8 engine" },
  { icon: <SiExpress />, name: "Express JS", iconClass: "text-black dark:text-white", description: "Web application framework for Node.js" },
  { icon: <SiMongodb />, name: "MongoDB", iconClass: "text-green-500 bg-black p-2 rounded-full dark:bg-white", description: "NoSQL database for modern applications" },
  { icon: <SiNextdotjs />, name: "Next JS", iconClass: "text-black dark:text-white", description: "React framework with server-side rendering" },
  { icon: <SiTailwindcss />, name: "TailWind CSS", iconClass: "text-blue-500", description: "Utility-first CSS framework for rapid UI development" },
  { icon: <SiBootstrap />, name: "Bootstrap", iconClass: "text-violet-500", description: "CSS framework for responsive web design" },
  { icon: <SiSocketdotio />, name: "Socket.io", iconClass: "text-black dark:text-white", description: "Library for real-time web applications" },
  { icon: <IoLogoSass />, name: "Sass/Scss", iconClass: "text-pink-500", description: "CSS preprocessor for more efficient styling" },
  { icon: <SiHtml5 />, name: "HTML", iconClass: "text-orange-600", description: "Standard markup language for web pages" },
  { icon: <IoLogoCss3 />, name: "CSS", iconClass: "text-blue-500", description: "Style sheet language for web design" },
  { icon: <IoLogoJavascript />, name: "JavaScript", iconClass: "text-yellow-300", description: "Programming language for the web" },
  { icon: <IoLogoGithub />, name: "GitHub", iconClass: "text-black dark:text-white", description: "Platform for version control and collaboration" },
  { icon: <SiRedux />, name: "Redux", iconClass: "text-violet-500", description: "State management library for JavaScript apps" },
  { icon: <SiMysql />, name: "MySQL", iconClass: "text-blue-500", description: "Relational database management system" },
  { icon: <FaAws />, name: "AWS", iconClass: "text-orange-500", description: "Cloud computing platform by Amazon" },
];

const commonIconStyle = "text-5xl";
const commonTextStyle = "text-center flex flex-col items-center justify-center";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="py-20" id="skills_section">
      <div className="text-center">
        <button className="capitalize bg-gray-300 w-28 rounded-full py-1 dark:text-black">Skills</button>
        <p className="py-5">Skilled in MERN stack, RESTful APIs, and modern front-end frameworks like React and Next.js.</p>
      </div>
      <div className="grid sm:grid-cols-8 py-10 container gap-2 text-lg mobile:grid-cols-2 skills">
        {skills.map((skill, index) => (
          <div key={index} className={`col-span-1 ${commonTextStyle}`} onMouseEnter={() => setHoveredSkill(skill)} onMouseLeave={() => setHoveredSkill(null)}>
            {React.cloneElement(skill.icon, { className: `${commonIconStyle} ${skill.iconClass}` })}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-black  dark:text-white relative h-16">
        {hoveredSkill ? (
          <div className="relative">
            <div className="relative z-10" >
              <h1>{hoveredSkill.name}</h1>
              <p>{hoveredSkill.description}</p>
            </div >
            <div className="absolute left-[50%]  translate-x-[-50%] top-0 z-0 text-gray-400 text-7xl opacity-30 dark:text-blue-400" >{hoveredSkill.icon}</div>
          </div>
        ) : (
          "Hover over a skill to see its description"
        )}
      </div>
    </div>
  );
};

export default Skills;
