import styles from "./projects.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../../ui/ProjectCard/project-card";

export default function Projects({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let title = SplitText.create(".title", { type: "words" });

    gsap.from(title.words, {
      scrollTrigger: {
        trigger: ".title",
        start: "top 90%",
      },
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.inOut(2)",
    });

    gsap.from(".projects-container", {
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      yPercent: 5,
      duration: 0.5,
      ease: "back.inOut(2)",
    });
  });

  return (
    <section className={`${className} min-h-[200vh] p-4 sm:p-28`}>
      <h2
        className={`${styles.title} title font-display sticky top-28 inline-block overflow-hidden text-2xl leading-[.9] font-medium tracking-tight uppercase`}
        id={id || "projects"}
      >
        Mes petites fiertés
      </h2>
      <div className="projects-container sticky top-1/4">
        <ProjectCard
          title="Reins"
          description="Réalisé dans le cadre de mon Travail de Fin d’Études, Reins est un tracker de montures pour World of Warcraft exploitant l’API officielle de Blizzard. L’enjeu était de concevoir un outil immersif, doté d'une interface sur-mesure qui reprend fidèlement les codes visuels du jeu. Développé avec Nuxt, Neon, BetterAuth et SASS."
          year={2026}
          projectType="Web app"
          image="/images/landing/projects/reins.webp"
          link="/projects/reins"
          className="project-card"
        />
      </div>
    </section>
  );
}
