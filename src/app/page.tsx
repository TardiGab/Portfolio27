import Hero from "./components/landing/Hero/hero";
import Navigation from "./components/ui/Navigation/navigation";
import Projects from "./components/landing/Projects/projects";
import ProjectsList from "./components/ui/ProjectsList/projects-list";
import LandingWrapper from "./components/landing/LandingWrapper/landing-wrapper";
import About from "./components/landing/About/about";

export default function Home() {
  return (
    <LandingWrapper>
      <header>
        <Navigation className="navigation" />
      </header>
      <main className="relative">
        <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
        <div className="relative z-10">
          <Hero />
          <Projects className="projects">
            <ProjectsList />
          </Projects>
          <About className="about" />
        </div>
      </main>
      <footer></footer>
    </LandingWrapper>
  );
}
