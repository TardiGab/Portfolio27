"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/landing/Hero/hero";
import Navigation from "./components/ui/Navigation/navigation";
import Projects from "./components/landing/Projects/projects";

export default function Home() {
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
  });

  return (
    <>
      <header>
        <Navigation className="navigation" />
      </header>
      <main className="relative">
        <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
        <Hero className="relative z-10" />
        <Projects className="relative z-10" />
      </main>
      <footer></footer>
    </>
  );
}
