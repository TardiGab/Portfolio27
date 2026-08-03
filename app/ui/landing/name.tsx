"use client";

import styles from "./name.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function Name() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    // gsap code here...
    let gabriel = SplitText.create(".gabriel", { type: "words, chars" });
    let manciu = SplitText.create(".manciu", { type: "words, chars" });
    let role = SplitText.create(".role", { type: "words" });

    gsap
      .timeline()
      .from(gabriel.words, {
        yPercent: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "back.inOut(2)",
      })
      .from(
        manciu.words,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.7,
          stagger: 0.05,
          ease: "back.inOut(2)",
        },
        "-=0.5",
      )
      .from(
        role.words,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.inOut(2)",
        },
        "-=0.7",
      );
  });
  return (
    <>
      <div className={`${styles.name} relative`}>
        <h1
          className={`${styles.name__h1} z-1 text-center leading-[.9] font-bold uppercase`}
          aria-label="Gabriel Manciu"
          role="heading"
        >
          <span
            className={`${styles.left} gabriel inline-block overflow-hidden`}
          >
            Gabriel
          </span>{" "}
          <span
            className={`${styles.right} manciu inline-block overflow-hidden`}
          >
            Manciu
          </span>
        </h1>
        <div
          className={`${styles.image} pointer-events-none absolute top-[50%] left-[50%] z-0 h-full w-[10vw] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl`}
        ></div>
      </div>
      <span
        className={`${styles.role} role inline-block overflow-hidden bg-linear-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent lowercase`}
      >
        Développeur frontend junior
      </span>
    </>
  );
}
