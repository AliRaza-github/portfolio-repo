import Image from "next/image";
import React from "react";
import CarousalLists from "../carousal/CarousalList";
import Link from "next/link";

const projectData = [
  {
    projectImage: ["/images/project_christian.png", "/images/christian-courses.png", "/images/christian_pricing.png", "/images/christian-quiz.png", "/images/christian-result.png"],
    projectName: "Christian",
    projectLink: "https://ebananas.com/",
    skills: ["React", "Next", "Bootstrap", "OAuth", "Axios"],
    description: `The "Christian" web app is a sophisticated project developed with Next.js, leveraging server-side rendering to enhance performance and SEO. This ensures faster page loads and better search engine visibility. The app seamlessly integrates with backend APIs, making data fetching efficient and dynamic.

Designed with Bootstrap, the app guarantees a responsive and visually appealing interface. Bootstrap's components and utilities facilitate rapid development while maintaining a polished look. Custom SCSS and utility classes add a unique and branded touch.

The app delivers a consistent experience across all devices, ensuring mobile-friendliness. Clean navigation and interactive components like modals and tooltips enhance user engagement. Security is a priority, with mechanisms like JWT tokens and OAuth integrations protecting user data. Best practices in data encryption ensure sensitive information remains secure.

Overall, the "Christian" web app combines performance, security, and aesthetic appeal, providing a high-quality user experience with its use of Next.js, Bootstrap, and custom styling. This makes the app an ideal solution for its audience.`,
  },
  {
    projectImage: ["/images/cubicle_one.png", "/images/cubicle_two.png", "/images/cubicle_three.png", "/images/cubicle_four.png"],
    projectName: "Cubicle",
    projectLink: "https://cubicle-cowork.vercel.app/",
    skills: ["React", "Next", "TailWind CSS", "Redux", "Axios" , "Node js", "JWT", "Nodemon", ""],
    description: `Cubicle is an advanced coworking space management platform designed to enhance user experience and operational efficiency. It utilizes Next.js for server-side rendering, providing a dynamic and fast front-end, while Tailwind CSS ensures a modern and responsive design. Redux Toolkit is employed for effective state management, allowing for a seamless and scalable application interface.
On the back-end, Cubicle leverages Node.js for robust server operations and uses MongoDB with Mongoose to handle flexible and efficient data storage. Nodemon facilitates automatic server restarts during development, streamlining the coding process. JWT is implemented for secure user authentication, and NodeMailer manages email communications. Additionally, the platform includes admin roles with defined rights, enabling comprehensive management and oversight of coworking space operations.
RBAC (Role-Based Access Control) is a method for managing user permissions and access rights in an application. In RBAC, access permissions are assigned to specific roles, and users are granted roles based on their job functions or responsibilities. This approach simplifies permission management by associating users with roles rather than individual permissions, ensuring that users only have access to resources necessary for their roles. For example, in an application like Cubicle, administrators might have rights to manage all aspects of coworking spaces, while regular users can only book spaces or view their own reservations. This structured approach helps in maintaining security and efficiency within the system.`,
  },
  {
    projectImage: ["/images/skrap-service.png", "/images/skrap-footer.png", "/images/skrapLogin.png"],
    projectName: "Skrap",
    skills: ["React", "Redux", "Material UI", "react-countup", "Axios", "Sass"],

    description: `The website "Skrap" was developed with a sophisticated frontend using React.js and Material-UI, ensuring a modern and responsive user interface. React.js provides a robust foundation for building dynamic and interactive web applications, while Material-UI offers a sleek and cohesive design system with pre-built components and styles.
For efficient interaction with RESTful APIs, Axios was employed to handle API calls. This library simplifies the process of making HTTP requests, enabling seamless communication between the frontend and backend services. The use of Axios ensures that data is fetched and updated efficiently, contributing to a smooth user experience.

To manage the application's state, Redux was implemented. Redux provides a predictable state container, allowing for centralized management of application state. This approach ensures consistency and reliability in data handling, making it easier to debug and maintain the application. By using Redux, the app can efficiently manage and synchronize its state across various components, enhancing overall performance.

The combination of React.js, Material-UI, Axios, and Redux in the development of "Skrap" ensures a seamless and responsive user experience. This comprehensive approach not only maintains robust data management and integration with backend services but also provides a visually appealing and user-friendly interface. The result is a high-quality web application that meets the needs of its users effectively.`,
  },
  {
    projectImage: ["/images/node.png", "/images/node-mongo.png"],
    projectName: "E-store-backend ",
    skills: ["Node", "Express", "JWT", "joi", "NodeMailer", "Multer", "Nodemon", "MongoDB", "Mongoose"],
    description: `The backend system is designed to handle various operations securely and efficiently, supporting a seamless and robust user experience. The use of JWT ensures secure authentication processes, while Joi validates incoming data to maintain the integrity and reliability of the system. NodeMailer and Multer add essential functionalities for handling emails and file uploads, respectively.

Overall, this backend API project leverages the power of Node.js and Express.js, combined with a suite of other tools, to create a reliable, secure, and efficient backend solution for web and mobile applications.

`,
  },
];

const Work = () => {
  return (
    <div className="py-10" id="projects_section">
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
