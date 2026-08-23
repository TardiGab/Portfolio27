"use client";

import styles from "./navigation.module.scss";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollToPlugin);

export function RollingButton({
  className,
  isOpen,
  onClick,
}: {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const label = isOpen ? "Fermer" : "Menu";
  const content = (
    <span className="inline-flex items-center leading-[1.2]">
      <span>{label}</span>
    </span>
  );

  return (
    <button
      type="button"
      className={`${styles.button} ${className || ""}`}
      data-label={label}
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <span className={styles.wrapper}>
        <span className={styles.row}>{content}</span>
        <span className={styles.row} aria-hidden="true">
          {content}
        </span>
      </span>
    </button>
  );
}

export default function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (forceClose: boolean = false) => {
    const nextOpen = forceClose ? false : !isOpen;
    if (isOpen === nextOpen) return;

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    toggleMenu(true);
    if (pathname === "/") {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, autoKill: false, offsetY: 50 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div
      className={`fixed top-8 left-1/2 z-50 origin-center -translate-x-1/2 rounded-3xl border border-gray-900 bg-black ${className || ""}`}
    >
      <div
        className={`${styles.container} nav-panel flex w-[70vw] flex-col items-center justify-between overflow-hidden sm:w-[50vw] md:w-[50vw] lg:w-[50vw] xl:w-[20vw]`}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="left flex items-center gap-1 p-3">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              height={22}
              width={48}
              fetchPriority="high"
            />
            <span className="hidden sm:inline">Gabriel Manciu</span>
          </div>
          <div className="flex">
            <RollingButton
              isOpen={isOpen}
              onClick={() => toggleMenu(false)}
              className="p-3"
            />
          </div>
        </div>
        <nav className="nav-element w-full p-3">
          <ul className="flex flex-col justify-center gap-2 text-xs sm:flex-row sm:items-end">
            <li className="w-full">
              <a
                href="/#projects"
                onClick={(e) => handleLinkClick(e, "#projects")}
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
                href="/#about"
                onClick={(e) => handleLinkClick(e, "#about")}
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
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
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
