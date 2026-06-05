import React from "react";

const experiences = [
  {
    companyName: "OHS Technologies",
    position: "Full Stack MERN Developer",
    startDate: "Sep 2024",
    endDate: "Present",
    description: [
      "Work remotely on enterprise healthcare EMR/EHR software with real users and regulated data.",
      "Design MongoDB schemas, build Express APIs, and implement security aligned with healthcare standards.",
      "Deliver React frontend features for patient records, appointments, billing, and clinical workflows.",
      "Communicate clearly and manage work independently as a core developer on a high-stakes platform.",
    ],
  },
  {
    companyName: "DEVIX.AI",
    position: "Frontend React Developer",
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    description: [
      "Owned 5+ full applications built from Figma designs and integrated OpenAI API-driven AI features.",
      "Set up CI/CD pipelines independently and wrote tests targeting 80% code coverage.",
      "Built a shared component library consumed by 3 concurrent projects.",
      "Delivered clean, documented, and reliable frontend code used by other developers.",
    ],
  },
  {
    companyName: "CodeZac Pvt Ltd",
    position: "React Developer Intern",
    startDate: "Nov 2023",
    endDate: "Jan 2024",
    description: [
      "Built real React.js components, TypeScript features, and Redux Toolkit flows for admin dashboards used by a live team.",
      "Fixed 20+ bugs across dashboard modules and participated in professional Agile sprints.",
      "Consumed REST APIs with Axios and learned how Git workflows work in a team setting.",
      "Delivered production-ready code in a fast-paced, on-site internship environment.",
    ],
  },
];

const Exp = () => {
  return (
    <div className="bg-gray-200 py-10 dark:bg-slate-700" id="experience_section">
      <div className="text-center">
        <button className="bg-gray-300 rounded-full py-1 px-3 dark:text-black">Experience</button>
        <p className="py-3"></p>
      </div>

      <div className="grid grid-cols-1   container lg:w-1/2  mobile:w-full gap-6 cursor-pointer">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-md p-6 grid sm:grid-cols-4   mobile:grid-cols-1 gap-2 hover:scale-105 duration-500">
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
