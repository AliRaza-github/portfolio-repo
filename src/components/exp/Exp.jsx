import React from "react";

const experiences = [
  {
    companyName: "CodeZac",
    position: "Mern Stack developer intern",
    startDate: "May 2023",
    endDate: "August",
    description: [
      "Developed and maintained web applications using MERN stack.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
      "Implemented responsive design to improve user experience.",
      "Optimized performance of applications, reducing load time by 30%.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    companyName: "CodeSoft",
    position: "Frontend Developer intern",
    startDate: "september 2023",
    endDate: "November 2023",
    description: [
      "Designed and developed user interfaces using html  CSS JavaScript and Bootstrap.",
      "Worked closely with UX/UI designers to create visually appealing websites.",
      "Implemented state management using Redux to streamline data flow.",
      "Ensured cross-browser compatibility and mobile responsiveness. ",    
    ],
  },
  {
    companyName: "Hello world",
    position: "React js developer",
    startDate: "June 2024",
    endDate: "present",
    description: [
      "Develop and maintain web applications using React.js",
     " Create reusable components and front-end libraries",
     " Manage application state with Redux or similar state management libraries",
     " Ensure the technical feasibility of UI/UX designs",
    "  Write clean, maintainable, and efficient code",
     " Perform code reviews and provide constructive feedback",
     " Collaborate with back-end developers and web designers to improve usability",
     " Implement responsive design principles to ensure applications work on all screen sizes",
    ],
  },
];

const Exp = () => {
  return (
    <div className="bg-gray-200 py-10 dark:bg-slate-700">
      <div className="text-center">
        <button className="bg-gray-300 rounded-full py-1 px-3 dark:text-black">Experience</button>
        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a!</p>
      </div>

      <div className="grid grid-cols-1   container lg:w-1/2  mobile:w-full gap-6  ">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-md p-6 grid sm:grid-cols-4   mobile:grid-cols-1 gap-2">
            <div className="col-span-1">
              <h2 className="text-xl font-bold text-violet-400  ">{exp.companyName}</h2>
            </div>
            <div className=" sm:col-span-3 mobile:col-span-1 ">
              <div className="flex justify-between mobile:flex-col sm:flex-row">
                <h3 className="text-md font-semibold dark:text-black">{exp.position}</h3>
                <p className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <ul className="list-disc pl-5 mt-2 sm:w-3/4">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-sm dark:text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exp;
