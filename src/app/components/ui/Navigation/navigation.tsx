"use client";

import styles from "./navigation.module.scss";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

export function RollingButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    const mm = gsap.matchMedia();
    if (nextOpen) {
      mm.add(
        {
          isLargeDesktop: "(min-width: 1280px)",
          isDesktop: "(min-width: 1024px) and (max-width: 1279px)",
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 1024px)",
        },
        (context) => {
          const { isDesktop, isMobile, isTablet, isLargeDesktop } =
            context.conditions ?? {};
          gsap
            .timeline()
            .to(".nav-element ul li", {
              yPercent: isDesktop ? 100 : 300,
            })
            .to(
              ".nav-panel",
              {
                width: isLargeDesktop
                  ? "40vw"
                  : isDesktop
                    ? "70vw"
                    : isTablet
                      ? "90vw"
                      : "90vw",
                duration: 0.5,
                ease: "back.inOut(1)",
              },
              "-=0.5",
            )
            .to(
              ".nav-panel",
              {
                height: "auto",
                duration: 0.5,
                ease: "back.inOut(1)",
              },
              "-=0.2",
            )
            .to(
              ".nav-element ul li",
              {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
                stagger: {
                  each: isDesktop ? 0.03 : 0.05,
                  from: isMobile ? "end" : "start",
                },
                ease: isDesktop ? "back.inOut(1.5)" : "back.inOut(.5)",
              },
              isDesktop ? "-=0.3" : "-=0.6",
            );
        },
      );
    } else {
      mm.add(
        {
          isLargeDesktop: "(min-width: 1280px)",
          isDesktop: "(min-width: 1024px) and (max-width: 1279px)",
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 1024px)",
        },
        (context) => {
          const { isDesktop, isMobile, isTablet, isLargeDesktop } =
            context.conditions ?? {};
          gsap
            .timeline()
            .to(".nav-panel", {
              height: "50px",
              duration: 0.5,
              ease: "back.inOut(1)",
            })
            .to(
              ".nav-element ul li",
              {
                opacity: isDesktop ? 0 : 1,
                yPercent: isDesktop ? 100 : 300,
                duration: 0.5,
                stagger: {
                  each: isDesktop ? 0.03 : 0.05,
                  from: "end",
                },
                ease: isDesktop ? "back.inOut(1.5)" : "back.inOut(.5)",
              },
              "-=0.5",
            )
            .to(
              ".nav-panel",
              {
                width: isLargeDesktop
                  ? "20vw"
                  : isDesktop
                    ? "50vw"
                    : isTablet
                      ? "50vw"
                      : "70vw",
                duration: 0.5,
                ease: "back.inOut(1)",
              },
              "-=0.2",
            );
        },
      );
    }
  };

  return (
    <button
      className={`${styles.button} ${className || ""}`}
      data-label={isOpen ? "Fermer" : "Menu"}
      aria-expanded={isOpen}
      onClick={openMenu}
    >
      <span className="inline-block">{isOpen ? "Fermer" : "Menu"}</span>
    </button>
  );
}

export default function Navigation({ className }: { className?: string }) {
  return (
    <div
      className={`fixed top-8 left-1/2 z-50 origin-center -translate-x-1/2 ${className || ""}`}
    >
      <div
        className={`${styles.container} nav-panel flex w-[70vw] flex-col items-center justify-between overflow-hidden rounded-3xl border border-blue-950 bg-black p-3 sm:w-[50vw] md:w-[50vw] lg:w-[50vw] xl:w-[20vw]`}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="left flex items-center gap-1">
            <Image src="/images/logo.svg" alt="Logo" height={22} width={48} />
            <span className="hidden sm:inline">Gabriel Manciu</span>
          </div>
          <div className="flex">
            <RollingButton className="relative inline-block cursor-pointer overflow-hidden" />
          </div>
        </div>
        <nav className="nav-element w-full">
          <ul className="flex flex-col justify-center gap-2 pt-4 text-xs sm:flex-row sm:items-end">
            <li className="w-full">
              <a
                href="#about"
                className="flex flex-col rounded-2xl border border-red-700 bg-red-950 p-3 pt-[20%] opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                <span className="font-display text-2xl font-medium uppercase">
                  Projets
                </span>{" "}
                <span className="opacity-80">Ce dont je suis fier</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#projects"
                className="flex flex-col rounded-2xl border border-blue-700 bg-blue-950 p-3 pt-[20%] opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                <span className="font-display text-2xl font-medium uppercase">
                  À propos
                </span>{" "}
                <span className="opacity-80">Apprenez à me connaître</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#contact"
                className="flex flex-col rounded-2xl border border-green-700 bg-green-950 p-3 pt-[20%] opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                <span className="font-display text-2xl font-medium uppercase">
                  Contact
                </span>{" "}
                <span className="opacity-80">Discutons ensemble</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
