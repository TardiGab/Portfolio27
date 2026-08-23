"use client";

import styles from "./hero.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import RollingLink from "../../ui/RollingLink/rolling-link";

export default function Hero({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    // gsap code here...
    let gabriel = SplitText.create(".gabriel", { type: "words, chars" });
    let manciu = SplitText.create(".manciu", { type: "words, chars" });
    let role = SplitText.create(".role", { type: "words" });
    let location = SplitText.create(".location", { type: "words" });
    let coords = SplitText.create(".coords", { type: "words" });

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
        coords.words,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.inOut(2)",
        },
        "-=0.8",
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
    <div
      id={id}
      className={`relative flex h-dvh flex-col items-center justify-center ${className || ""}`}
    >
      <div className={`${styles.name} relative`}>
        <h1
          className={`${styles.name__h1} z-1 text-center leading-[.8] font-bold uppercase`}
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
          className={`${styles.image} pointer-events-none absolute top-[50%] left-[50%] z-0 h-full w-[40vw] -translate-x-1/2 -translate-y-full transform rounded-2xl sm:w-[10vw] sm:-translate-y-1/2`}
        ></div>
      </div>
      <span
        className={`${styles.role} role inline-block overflow-hidden text-center text-blue-300 lowercase`}
      >
        Développeur frontend
      </span>
      <div className="bottom absolute bottom-0 flex w-full flex-col justify-between gap-2 p-8 sm:flex-row">
        <span
          className={`location inline-block overflow-hidden font-sans text-base`}
        >
          Basé à <span className="text-blue-300">Dinant</span>, Belgique
        </span>
        <RollingLink
          href="https://maps.app.goo.gl/SAcuGtGvVvqohwzb7"
          target="_blank"
          label="50°15′42″N, 4°54′48″E"
          className="coords"
        />
      </div>
    </div>
  );
}
