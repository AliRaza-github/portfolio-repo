import Image from "next/image";
import React from "react";

const projectData = [
  {
    projectImage: "/images/project.jpeg",
    projectName: "Christian",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus commodi qui ea obcaecati corporis sequi adipisci fuga officia sunt. Necessitatibus eos quae at, animi veritatis vero et dolores eligendi, adipisci consectetur incidunt blanditiis architecto aperiam. Minima, tenetur maxime. Neque qui iure quos animi, soluta labore reiciendis repellendus fuga dolore.",
  },
  {
    projectImage: "/images/project.jpeg",
    projectName: "Frontend",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus commodi qui ea obcaecati corporis sequi adipisci fuga officia sunt. Necessitatibus eos quae at, animi veritatis vero et dolores eligendi, adipisci consectetur incidunt blanditiis architecto aperiam. Minima, tenetur maxime. Neque qui iure quos animi, soluta labore reiciendis repellendus fuga dolore.",
  },
  {
    projectImage: "/images/project.jpeg",
    projectName: "Backend ",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus commodi qui ea obcaecati corporis sequi adipisci fuga officia sunt. Necessitatibus eos quae at, animi veritatis vero et dolores eligendi, adipisci consectetur incidunt blanditiis architecto aperiam. Minima, tenetur maxime. Neque qui iure quos animi, soluta labore reiciendis repellendus fuga dolore.",
  },
];

const Work = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <button className="bg-gray-300 py-1 px-4 rounded-full">Work</button>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, natus!</p>
      </div>
      {/* grid */}
      <div className="container  grid gap-10 ">
        {projectData.map((data, index) => (
          <div key={index} className="shadow-md  dark:outline dark:rounded-xl dark:overflow-hidden outline-slate-700 grid sm:grid-cols-2 mobile:grid-cols-1">
            <div className={`p-10 bg-gray-100 dark:bg-slate-700 flex items-center sm:${index % 2 === 0 ? "order-1" : "order-2"}`}>
              <div className=" relative w-full rounded-2xl overflow-hidden shadow-sm aspect-square">
                <Image src={data.projectImage} fill alt="image" />
              </div>
            </div>
            <div className={` mobile:p-5 lg:p-20 flex flex-col gap-5  sm:${index % 2 === 0 ? "order-2" : "order-1"}`}>
              <h1 className="text-2xl font-semibold">{data.projectName}</h1>
              <p className="mobile:text-sm ">{data.description}</p>
              <div className="flex justify-start gap-3 flex-wrap">
                {data.skills.map((skill, skillIndex) => (
                  <p key={skillIndex} className="text-sm  bg-gray-300  rounded-full px-3 h-[fit-content] m-0  text-black">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* grid */}
    </div>
  );
};

export default Work;
