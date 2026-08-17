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
      // 1. Instanciation correcte avec 'new'
      const aboutText = SplitText.create(".about-text", { type: "words" });

      gsap.from(aboutText.words, {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: true,
          markers: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <div className={`${className} about-container`.trim()}>
      <div
        ref={container}
        className="about-wrapper flex items-center justify-center"
      >
        <p
          className={`${styles.text} about-text font-display max-w-[90vw] leading-[1.2] uppercase`}
        >
          Je suis un développeur frontend junior basé dans la province de Namur,
          en Belgique. Je transforme des maquettes créatives en expériences web
          soignées.
        </p>
      </div>
    </div>
  );
}
