"use client";

import styles from "./projects.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const title = SplitText.create(".title", { type: "words" });

    gsap.from(title.words, {
      scrollTrigger: {
        trigger: ".title",
        start: "top 90%",
      },
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.inOut(2)",
    });

    gsap.from(".projects-container", {
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      yPercent: 5,
      duration: 0.5,
      ease: "back.inOut(2)",
    });
  });

  return (
    <section className={`${className} min-h-[200vh] p-4 sm:p-28`}>
      <h2
        className={`${styles.title} title font-display top-28 mb-8 inline-block overflow-hidden text-2xl leading-[.9] font-medium tracking-tight uppercase md:sticky`}
        id={id || "projects"}
      >
        Mes fiertés
      </h2>
      <div className="projects-container">{children}</div>
    </section>
  );
}
