"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const COLORS = {
  base: "radial-gradient(75% 15% at 50% 100%, #0e3258 0%, #040915 100%)",
  projects: "radial-gradient(75% 15% at 50% 100%, #6B0000 0%, #0F0000 100%)",
  about: "radial-gradient(75% 15% at 50% 100%, #0e3258 0%, #040915 100%)",
  contact: "radial-gradient(75% 15% at 50% 100%, #0E581E 0%, #020D07 100%)",
};

export default function LandingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    gsap.from(".background", {
      opacity: 0,
      duration: 1,
    });
    gsap.from(".navigation", {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(2)",
      clearProps: "all",
    });

    // Transition base <-> projects
    ScrollTrigger.create({
      trigger: ".projects",
      start: "top 30%",
      end: "top top",
      onEnter: () =>
        gsap.to(".background", {
          backgroundImage: COLORS.projects,
          duration: 1,
        }),
      onLeaveBack: () =>
        gsap.to(".background", { backgroundImage: COLORS.base, duration: 1 }),
    });

    // Transition projects <-> about
    ScrollTrigger.create({
      trigger: ".about",
      // 30% pour que le dégradé change quand on commence à voir le texte
      start: "top 30%",
      end: "top top",
      onEnter: () =>
        gsap.to(".background", { backgroundImage: COLORS.about, duration: 1 }),
      onLeaveBack: () =>
        gsap.to(".background", {
          backgroundImage: COLORS.projects,
          duration: 1,
        }),
    });

    ScrollTrigger.create({
      trigger: ".contact",
      start: "top bottom",
      end: "top top",
      onEnter: () =>
        gsap.to(".background", {
          backgroundImage: COLORS.contact,
          duration: 1,
        }),
      onLeaveBack: () =>
        gsap.to(".background", {
          backgroundImage: COLORS.about,
          duration: 1,
        }),
    });
  });

  return <>{children}</>;
}
