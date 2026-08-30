"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./about.module.scss";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function About({ className = "" }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const aboutText = SplitText.create(".about-text", { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "center 80%",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      tl.from(aboutText.words, {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      }).to(".about-text", {
        opacity: 0,
        duration: 1,
      });

      return () => {
        aboutText.revert();
      };
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className={`${className} about-wrapper pointer-events-none h-screen items-center justify-center`}
      id="about"
    >
      <p
        className={`${styles.text} about-text font-display m-auto max-w-[90vw] leading-[1.2] uppercase`}
      >
        Je suis un développeur front-end junior basé dans la province de Namur,
        en Belgique. Je transforme des maquettes créatives en expériences web
        soignées.
      </p>
    </div>
  );
}
