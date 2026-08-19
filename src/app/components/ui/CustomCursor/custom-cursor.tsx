"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./custom-cursor.module.scss";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(cursor.current, {
        rotation: -360,
        repeat: -1,
        duration: 15,
        ease: "linear",
      });

      window.addEventListener("mousemove", (e) => {
        if (!cursor.current) {
          return;
        }
        gsap.to(cursor.current, {
          x: e.clientX - cursor.current.offsetWidth / 2,
          y: e.clientY - cursor.current.offsetHeight / 2,
          duration: 0.2,
          ease: "power3.out",
        });

        const target = e.target as HTMLElement;

        const hoveredElement = target.closest("[data-cursor]");

        if (hoveredElement) {
          const type = hoveredElement.getAttribute("data-cursor");
          console.log(type);
          if (type === "project") {
            gsap.to(cursor.current, {
              opacity: 1,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        } else {
          gsap.to(cursor.current, {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });
    },
    { scope: cursor },
  );

  return (
    <div
      className={`${styles.cursor} fixed z-50 hidden lg:block`}
      ref={cursor}
    ></div>
  );
}
