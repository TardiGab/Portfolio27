"use client";

import Image from "next/image";
import styles from "./project-card.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({
  className,
  title,
  year,
  projectType,
  description,
  image,
  link,
}: {
  className?: string;
  title: string;
  year: number;
  projectType: string;
  description: string;
  image: string;
  link: string;
}) {
  const cursor = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.to(".know-more-cursor", {
      rotation: -360,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });
  });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!card.current || !cursor.current) {
      return;
    }

    const rect = card.current.getBoundingClientRect();

    gsap.to(cursor.current, {
      x: e.clientX - rect.left - cursor.current.offsetWidth / 2,
      y: e.clientY - rect.top - cursor.current.offsetHeight / 2,
      duration: 0.2,
      ease: "power3.out",
    });
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    handleMouseMove(e);

    if (!cursor.current) {
      return;
    }

    gsap.to(cursor.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  }

  function handleMouseLeave() {
    if (!cursor.current) {
      return;
    }

    gsap.to(cursor.current, {
      opacity: 0,
      scale: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  }

  return (
    <a
      className={`${className || ""} ${styles.card} sticky top-1/4 mb-4 grid grid-cols-1 gap-6 rounded-4xl bg-[#0F0000] p-4 transition-colors duration-300 hover:bg-[#350F13] lg:grid-cols-2`}
      href={link || "#"}
      ref={card}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.cursor} know-more-cursor absolute z-10 hidden lg:block`}
        ref={cursor}
      ></div>
      <div className="overflow-hidden rounded-2xl border border-red-950">
        <Image
          src={image}
          alt={title || "Project Title"}
          width={1500}
          height={1300}
          className="h-auto w-full object-fill"
        />
      </div>
      <div>
        <div className="flex items-end gap-4">
          <h3
            className={`${styles.h3} font-display leading-none font-medium uppercase`}
          >
            {title || "Project Title"}
          </h3>
          <p className={`${styles.year} font-display leading-tight`}>
            {year || 2024}
          </p>
        </div>
        <div className={`${styles.type} mt-2 text-red-400 lowercase`}>
          {projectType || "Project Type"}
        </div>
        <p className={`${styles.desc} mt-6 leading-[1.4]`}>
          {description || "Project Description"}
        </p>
      </div>
    </a>
  );
}
