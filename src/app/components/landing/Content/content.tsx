"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Content({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".background", {
      opacity: 0,
      duration: 1,
    });
    gsap.from(".navigation", {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(2)",
      // Deletes all inline styles applied by GSAP after the animation completes
      clearProps: "all",
    });

    gsap.to(".background", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top 30%",
        end: "top top",
        toggleActions: "play none none reverse",
      },
      backgroundImage:
        "radial-gradient(75% 15% at 50% 100%, #6B0000 0%, #0F0000 100%)",
    });

    gsap.to(".navigation", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top 30%",
        end: "top top",
        toggleActions: "play none none reverse",
      },
      border: "1px solid #460809",
    });
  });
  return <>{children}</>;
}
