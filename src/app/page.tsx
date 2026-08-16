import Hero from "./components/landing/Hero/hero";
import Navigation from "./components/ui/Navigation/navigation";
import Projects from "./components/landing/Projects/projects";
import ProjectsList from "./components/ui/ProjectsList/projects-list";
import LandingWrapper from "./components/landing/LandingWrapper/landing-wrapper";

export default function Home() {
  return (
    <LandingWrapper>
      <header>
        <Navigation className="navigation" />
      </header>
      <main className="relative">
        <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
        <Hero className="relative z-10" />
        <Projects className="projects relative z-10">
          <ProjectsList />
        </Projects>
      </main>
      <footer></footer>
    </LandingWrapper>
  );
}
