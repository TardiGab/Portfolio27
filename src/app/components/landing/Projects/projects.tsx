import styles from "./projects.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects({ className }: { className?: string }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap code here...
    let title = SplitText.create(".title", { type: "words, chars" });

    gsap.from(title.words, {
      scrollTrigger: {
        trigger: ".title",
        start: "top 90%",
        markers: true,
      },
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.inOut(2)",
    });
  });

  return (
    <section className={`${className} min-h-[200vh] p-4 sm:p-28`}>
      <h2
        className={`${styles.title} title font-display sticky top-28 inline-block overflow-hidden text-2xl leading-[.9] font-medium tracking-tight uppercase`}
      >
        Mes petites fiertés
      </h2>
    </section>
  );
}
