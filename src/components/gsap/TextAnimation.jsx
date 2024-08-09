"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AlternatingTextAnimation({ text }) {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    timeline
      .fromTo(
        text1Ref.current,
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .to(
        text1Ref.current,
        { y: -5, opacity: 0, duration: 1, ease: "power2.in" },
        "+=0.5"
      )
      .fromTo(
        text2Ref.current,
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.in" },
        "-=0.5"
      )
      .to(
        text2Ref.current,
        { y: -5, opacity: 0, duration: 1, ease: "power2.out" },
        "+=0.5"
      );
  }, []);

  return (
    <div>
  <h1 ref={text1Ref} style={{ position: "relative" }}>
    {text[0]}
  </h1>
  <h1 ref={text2Ref} style={{ position: "relative" }}>
 {text[1]}
  </h1>
</div>
  );
}
