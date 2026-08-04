"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/landing/hero/hero";

export default function Home() {
  useGSAP(() => {
    // gsap code here...
  });

  return (
    <>
      <header></header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
