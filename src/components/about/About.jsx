import Image from "next/image";
import React from "react";
import { MdOutlineMood } from "react-icons/md";
import "./about.scss";

const About = () => {
  return (
    <div className="bg-gray-100 sm:py-20  py-10 dark:bg-slate-700">
      <div className="text-center  ">
        <button className="capitalize bg-gray-300 w-28 rounded-full py-1 dark:text-black ">about me</button>
      </div>
      {/*  grid start */}
      <div className="grid mobile:grid-cols-1 sm:grid-cols-12  gap-2  container py-4  mobile:gap-10 ">
        <div className=" text-yellow-100 text-center sm:col-span-4 mobile:col-span-1 mobile:order-1">
          <dotlottie-player src="https://lottie.host/db5b5cba-10e4-4198-8397-395886cfa101/ZUJDWPi9DG.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></dotlottie-player>
        </div>
        <div className="sm:col-span-2 mobile:col-span-1"></div>
        <div className="text-yellow-100 text-center sm:col-span-6 mobile:col-span-1 mobile:order-2 ">
          <div>
            <h1 className=" text-black sm:text-4xl font-semibold text-start items-center gap-2 flex mobile:text-2xl dark:text-white">
              Curious about me
              <lottie-player src="https://lottie.host/c1a33ad3-9086-4d85-84b4-3656c0b4d91b/U0gwYjCACc.json" background="##fff" speed="1" style={{ width: "50px", height: "50px" }} loop autoplay direction="1" mode="normal"></lottie-player>
            </h1>

            <p className="text-black text-start pt-5 dark:text-white ">
              {`Hi, I'm Ali Raza, a Full Stack Developer with a degree in Computer Science from PMAS Arid Agriculture University Rawalpindi. I specialize in the MERN stack, creating scalable web applications with React.js and Next.js. I leverage
              React.js for building dynamic and interactive UIs, while Next.js enhances performance with server-side rendering and static site generation. I design responsive and visually appealing interfaces using Bootstrap and Tailwind CSS,
              ensuring a modern and consistent look across devices. My backend expertise includes Node.js, Express.js, and MongoDB, with experience in creating RESTful APIs and implementing secure authentication with JWT. I also utilize Socket.IO for
              real-time communication, AWS for cloud services, and Vercel for serverless deployment. Passionate about optimizing performance and enhancing user experiences, I stay current with best practices and trends in full stack development. I
              also value strong communication and enjoy contributing ideas through writing.`}
              {/* <MdOutlineMood className="text-yellow-400 font-bold text-2xl inline" /> */}
              <lottie-player
                src="https://lottie.host/179d30ca-5ed4-44cd-85a9-46bf4a7f6984/ZHZhIo2kvJ.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: "100px", height: "100px" }}
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </p>
          </div>
        </div>
      </div>
      {/*  grid start end */}
    </div>
  );
};

export default About;
