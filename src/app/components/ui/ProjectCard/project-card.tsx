"use client";

import Image from "next/image";
import styles from "./project-card.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({
  className,
  title,
  year,
  projectType,
  description,
  image,
  link,
  tags,
}: {
  className?: string;
  title: string;
  year: number;
  projectType: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}) {
  const card = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      className={`${className || ""} ${styles.card} grid h-full min-h-[65dvh] grid-cols-1 gap-6 rounded-4xl bg-[#350F13] p-4 transition-colors duration-300 hover:bg-[#350F13] sm:bg-[#0F0000] lg:min-h-[300px] lg:grid-cols-2`}
      href={link || "#"}
      ref={card}
      data-cursor="project"
    >
      {/* Image desktop */}
      <div className="hidden overflow-hidden rounded-2xl border border-red-950 lg:block">
        <Image
          src={image}
          alt={title || "Project Title"}
          width={1920}
          height={1080}
          className="h-auto w-full object-fill"
        />
      </div>
      {/* Image mobile */}
      <Image
        src={image}
        alt={title || "Project Title"}
        width={1920}
        height={1080}
        className="block h-auto w-full rounded-2xl border border-red-950 object-cover lg:hidden"
      />
      <div className="flex flex-col justify-between">
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
          <p className={`mt-6 text-[1rem] leading-[1.4]`}>
            {description || "Project Description"}
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-red-500/20 bg-white/10 px-2 py-1 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
