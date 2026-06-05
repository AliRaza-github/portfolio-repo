'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./about.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutPara = useRef();

  const headingAnimation = (textToSplitted) => {
    if (textToSplitted) {
      // Get the text content and split it into letters
      // const text = textToSplitted.innerText;
      // const splittedText = text.split(" ");

      // // Wrap each letter in a span and update the inner HTML
      // textToSplitted.innerHTML = splittedText.map((letter) => ` <span class='heading-letter' style="display: inline-block; position: relative;">${letter === " " ? "&nbsp;" : letter}</span>`).join("");

      // Apply GSAP animation to each letter
      gsap.fromTo(
       textToSplitted,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#about_section",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            end: "top 20%",
            scrub: true, // Smoothly animate with scrolling
          },
        }
      );
    }
  };
  useEffect(()=>{
    headingAnimation(aboutPara.current);
  })

  return (
    <div className="bg-gray-100 sm:py-20  py-10 dark:bg-slate-700" id="about_section">
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

            <p className="text-black text-start pt-5 dark:text-white " ref={aboutPara}>
              {`Hi, I'm Ali Raza, a Full Stack Web Developer based in Pakistan with a Computer Science degree from PMAS Arid Agriculture University, Rawalpindi. I specialize in the MERN stack and have spent the last 2 years building and shipping real-world web applications across healthcare, AI, and e-commerce — moving quickly from intern to full stack developer by staying curious and closing my own skill gaps along the way. On the frontend I work primarily with React.js and Next.js, leveraging server-side rendering and static site generation to build fast, SEO-friendly applications, and managing complex client-side state with Redux Toolkit and Zustand depending on what the project needs. I build dynamic, responsive interfaces with Tailwind CSS and Material UI that look sharp and perform consistently across all devices and browsers. On the backend I design and secure RESTful APIs with Node.js and Express.js, handle authentication with JWT, manage data with MongoDB, and follow HIPAA-compliant security patterns when working with sensitive healthcare data — always with an eye on scalability and clean architecture. I've integrated third-party services like OpenAI, Stripe, and Socket.IO into production applications, containerize and manage services with Docker, and automate workflows using n8n for efficient backend process orchestration. I collaborate and ship using GitHub for version control and Jira for project tracking, and I deploy confidently through Vercel, Netlify, and GitHub Actions CI/CD pipelines. Beyond the technical side, I care deeply about writing code that the next developer can actually understand, contributing meaningfully in team settings, and communicating clearly whether that's in a code review, a standup, or a written brief. I do my best work when I'm building something that matters, alongside people who hold themselves to a high standard.`}
             
            </p>
            <lottie-player src="https://lottie.host/179d30ca-5ed4-44cd-85a9-46bf4a7f6984/ZHZhIo2kvJ.json" background="##FFFFFF" speed="1" style={{ width: "100px", height: "100px" }} loop autoplay direction="1" mode="normal"></lottie-player>
          </div>
        </div>
      </div>
      {/*  grid start end */}
    </div>
  );
};

export default About;
