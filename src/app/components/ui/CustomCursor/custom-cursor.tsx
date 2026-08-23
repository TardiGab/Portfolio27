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

      let mousePos = { x: -1, y: -1 };

      const updateCursorState = (x: number, y: number) => {
        if (!cursor.current || x < 0 || y < 0) return;

        const target = document.elementFromPoint(x, y);
        const hoveredElement = target?.closest("[data-cursor]");

        if (hoveredElement) {
          const type = hoveredElement.getAttribute("data-cursor");
          if (type === "project") {
            gsap.to(cursor.current, {
              opacity: 1,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
            return;
          }
        }

        gsap.to(cursor.current, {
          opacity: 0,
          scale: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        mousePos = { x: e.clientX, y: e.clientY };

        if (!cursor.current) {
          return;
        }

        gsap.to(cursor.current, {
          x: e.clientX - cursor.current.offsetWidth / 2,
          y: e.clientY - cursor.current.offsetHeight / 2,
          duration: 0.2,
          ease: "power3.out",
        });

        updateCursorState(e.clientX, e.clientY);
      };

      const handleScroll = () => {
        updateCursorState(mousePos.x, mousePos.y);
      };

      const handleMouseLeave = () => {
        mousePos = { x: -1, y: -1 };
        if (!cursor.current) return;
        gsap.to(cursor.current, {
          opacity: 0,
          scale: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
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
