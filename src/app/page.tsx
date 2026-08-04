"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/landing/Hero/hero";

export default function Home() {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".background", {
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <>
      <header></header>
      <main className="relative">
        <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
        <Hero className="relative z-10" />
      </main>
      <footer></footer>
    </>
  );
}
