import Image from "next/image";
import React from "react";
import CarousalLists from "../carousal/CarousalList";
import Link from "next/link";

const projectData = [
//   {
//     projectImage: ["/images/project_christian.png", "/images/christian-courses.png", "/images/christian_pricing.png", "/images/christian-quiz.png", "/images/christian-result.png"],
//     projectName: "Christian",
//     projectLink: "https://ebananas.com/",
//     skills: ["React", "Next", "Bootstrap", "OAuth", "Axios"],
//     description: `The "Christian" web app is a sophisticated project developed with Next.js, leveraging server-side rendering to enhance performance and SEO. This ensures faster page loads and better search engine visibility. The app seamlessly integrates with backend APIs, making data fetching efficient and dynamic.

// Designed with Bootstrap, the app guarantees a responsive and visually appealing interface. Bootstrap's components and utilities facilitate rapid development while maintaining a polished look. Custom SCSS and utility classes add a unique and branded touch.

// The app delivers a consistent experience across all devices, ensuring mobile-friendliness. Clean navigation and interactive components like modals and tooltips enhance user engagement. Security is a priority, with mechanisms like JWT tokens and OAuth integrations protecting user data. Best practices in data encryption ensure sensitive information remains secure.

// Overall, the "Christian" web app combines performance, security, and aesthetic appeal, providing a high-quality user experience with its use of Next.js, Bootstrap, and custom styling. This makes the app an ideal solution for its audience.`,
//   },
  {
    projectImage: ["/images/gb1.png", "/images/gb2.png", "/images/gb3.png", "/images/gb4.png", "/images/gb5.png", ],
    projectName: "GB Meals — AI-Powered Meal Planning Platform",

    liveLink:"https://gbmeals.com/",
    skills: ["Next.js (React-based, SSR/SSG)", "TypeScript ", "TailWind CSS", "Redux" , "OpenAI API (GPT models)", "MongoDB (via Mongoose)", "Git / GitHub", ""],
    description: `A smart, personalized meal planning web app that uses AI to generate weekly and monthly meal plans tailored to individual user health profiles — diet type, calories, allergies, goals, etc. Users can export their plans as PDFs and manage their nutrition effortlessly.

AI-Powered Meal Recommendations — OpenAI API generates personalized meal plans for each user based on their health data
User Profile Management — stores 1,000+ user profiles with dietary preferences, health goals, restrictions
Automated Meal Plan Generation — weekly and monthly plans auto-generated without manual input
PDF Export — users can download their meal plans, saving ~3 hours/week of manual planning
Responsive UI — fully mobile-friendly, built with Tailwind CSS`,
  },
  {
    projectImage: ["/images/skrap-service.png", "/images/skrap-footer.png", "/images/skrapLogin.png"],
    projectName: "Skrap",
    skills: ["React", "Redux", "Material UI", "react-countup", "Axios", "Sass"],

    description: `The website "Skrap" was developed with a sophisticated frontend using React.js and Material-UI, ensuring a modern and responsive user interface. React.js provides a robust foundation for building dynamic and interactive web applications, while Material-UI offers a sleek and cohesive design system with pre-built components and styles.
For efficient interaction with RESTful APIs, Axios was employed to handle API calls. This library simplifies the process of making HTTP requests, enabling seamless communication between the frontend and backend services. The use of Axios ensures that data is fetched and updated efficiently, contributing to a smooth user experience.

To manage the application's state, Redux was implemented. Redux provides a predictable state container, allowing for centralized management of application state. This approach ensures consistency and reliability in data handling, making it easier to debug and maintain the application. By using Redux, the app can efficiently manage and synchronize its state across various components, enhancing overall performance.

The combination of React.js, Material-UI, Axios, and Redux in the development of "Skrap" ensures a seamless and responsive user experience. This comprehensive approach not only maintains robust data management and integration with backend services but also provides a visually appealing and user-friendly interface. The result is a high-quality web application that meets the needs of its users effectively.`,
liveLink: "https://skrap.co.uk/",  
},
  
   {
    projectImage: ["/images/EHRSS-1 (1).png", "/images/EHRSS-1 (3).png", "/images/EHRSS-1 (4).png", "/images/EHRSS-1 (5).png", "/images/EHRSS-1 (6).png",
      "/images/EHRSS-1 (7).png", "/images/EHRSS-1 (8).png", "/images/EHRSS-1 (9).png", "/images/EHRSS-1 (10).png", "/images/EHRSS-1 (11).png",
      "/images/EHRSS-1 (12).png",
    ],
    projectName: "Vista CPRS EHR ",
    skills: ["Next.js", "Node","Tailwind css", "SSR", 'Redux'],
    description: `Vista EHR centralizes everything about a patient — demographics, medical history, visits, and clinical data — into one unified chart, with doctors and nurses able to write, sign, and store structured clinical notes tied directly to each encounter. Appointments are managed through a drag-and-drop interactive calendar that gives staff a real-time visual overview across departments, reducing scheduling conflicts by 40%. The platform supports five distinct user roles — Admin, Doctor, Nurse, Patient, and Billing Staff — each with a completely separate interface and dataset, permissions enforced at both the API and UI level so no role ever sees what they shouldn't. Doctors can place medication, lab, and radiology orders directly inside the system, with each order tied to a specific encounter and routed to the right person for action, while a dedicated billing module connects visit records to financial entries for seamless insurance processing and invoicing. Every endpoint is protected with JWT authentication and HIPAA-aligned security patterns, ensuring sensitive patient data stays exactly where it belongs. And across all 10+ modules, a reusable DataTable component with sorting, filtering, pagination, and CSV/PDF export gives every user type a clean, fast, and actionable view of the data they need.

Overall, this backend API project leverages the power of Node.js and Express.js, combined with a suite of other tools, to create a reliable, secure, and efficient backend solution for web and mobile applications.

`,
liveLink: "https://vcehr-com.vercel.app/authentication/signIn/",
  },
];

const Work = () => {
  return (
    <div className="py-10" id="projects_section" >
      <div className="text-center">
        <button className="bg-gray-300 py-1 px-4 rounded-full">Work</button>
        <p className="py-4"></p>
      </div>
      {/* grid */}
      <div className="container  grid gap-10  ">
        {projectData.map((data, index) => (
          <div key={index} className="shadow-md  dark:outline dark:rounded-xl dark:overflow-hidden outline-slate-700 grid sm:grid-cols-2 mobile:grid-cols-1 ">
            <div className={`p-10 bg-gray-100 dark:bg-slate-700 flex items-center sm:${index % 2 === 0 ? "order-1" : "order-2"}`}>
              <div className=" relative w-full rounded-2xl overflow-hidden shadow-sm aspect-square">
                <CarousalLists images={data.projectImage} />
              </div>
            </div>
            <div className={` mobile:p-5 lg:p-20 flex flex-col gap-5  sm:${index % 2 === 0 ? "order-2" : "order-1"}`}>
              <h1 className="text-2xl font-semibold">{data.projectName}</h1>
              <p className="mobile:text-sm sm:text-lg ">{data.description}</p>
              <div className="flex justify-start gap-4 flex-wrap">
                {data.skills.map((skill, skillIndex) => (
                  <p key={skillIndex} className="text-sm  bg-gray-300  rounded-full px-3 h-[fit-content] m-0  text-black hover:scale-125 hover:duration-500 cursor-pointer">
                    {skill}                 
                  </p>
              
                  
                ))}
                     <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LIVELINK</a>
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
