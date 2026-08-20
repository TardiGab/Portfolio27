"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CaseLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".footer",
      start: "top bottom",
      end: "top top",
      onEnter: () =>
        gsap.to(".background", {
          opacity: 0,
          duration: 0.5,
        }),
      onLeaveBack: () =>
        gsap.to(".background", {
          opacity: 1,
          duration: 0.5,
        }),
    });
  });
  return <>{children}</>;
}
