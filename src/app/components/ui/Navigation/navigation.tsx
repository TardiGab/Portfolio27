import styles from "./navigation.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function RollingButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const openMenu = () => {
    // gsap code here...
    gsap.to(".nav", {
      width: "100vw",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      className={`${styles.button} ${className || ""}`}
      data-label={label}
      onClick={openMenu}
    >
      <span className="inline-block">{label}</span>
    </button>
  );
}

export default function Navigation({ className }: { className?: string }) {
  return (
    <div
      className={`nav fixed top-8 left-1/2 z-50 flex w-sm max-w-sm -translate-x-1/2 items-center justify-between rounded-4xl border border-blue-950 bg-black p-3 sm:w-1/2 ${className || ""}`}
    >
      <div className="left flex items-center gap-1">
        <img src="/images/logo.svg" alt="Logo" height={16} />
        <span>Gabriel Manciu</span>
      </div>
      <div className="flex">
        <RollingButton
          label="Menu"
          className="relative inline-block cursor-pointer overflow-hidden"
        />
      </div>
    </div>
  );
}
