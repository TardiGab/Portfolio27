"use client";

import styles from "./hero.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function Hero() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    // gsap code here...
    let gabriel = SplitText.create(".gabriel", { type: "words, chars" });
    let manciu = SplitText.create(".manciu", { type: "words, chars" });
    let role = SplitText.create(".role", { type: "words" });
    let location = SplitText.create(".location", { type: "words" });
    let music = SplitText.create(".music", { type: "words" });

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
      )
      .from(
        music.words,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.inOut(2)",
        },
        "-=1",
      )
      .from(
        location.words,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.inOut(2)",
        },
        "-=1",
      );
  });
  return (
    <div className="relative flex h-dvh w-dvw flex-col items-center justify-center">
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
        className={`${styles.role} role inline-block overflow-hidden bg-linear-to-r from-blue-300 to-blue-400 bg-clip-text text-center text-transparent lowercase`}
      >
        Développeur frontend junior
      </span>
      <div className="bottom absolute bottom-0 flex w-full justify-between p-8">
        <span className="music inline-block overflow-hidden font-sans text-base">
          Écouté récemment :{" "}
          <span className="text-blue-300">Titre • Artiste</span>
        </span>
        <span className="location inline-block overflow-hidden font-sans text-base">
          Basé à <span className="text-blue-300">Dinant</span>, Belgique
        </span>
      </div>
    </div>
  );
}
