import Hero from "./components/landing/Hero/hero";
import Navigation from "./components/ui/Navigation/navigation";
import Projects from "./components/landing/Projects/projects";
import ProjectsList from "./components/ui/ProjectsList/projects-list";
import LandingWrapper from "./components/landing/LandingWrapper/landing-wrapper";
import About from "./components/landing/About/about";
import Contact from "./components/landing/Contact/contact";
import Footer from "./components/ui/Footer/footer";
import CustomCursor from "./components/ui/CustomCursor/custom-cursor";

export default function Home() {
  return (
    <LandingWrapper>
      <header>
        <Navigation className="navigation" />
      </header>
      <main className="relative">
        <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
        <CustomCursor />
        <div className="relative z-10">
          <Hero />
          <Projects className="projects relative z-12">
            <ProjectsList />
          </Projects>
          <About className="about relative z-11" />
          <Contact className="contact relative z-12" />
        </div>
      </main>
      <Footer className="footer" />
    </LandingWrapper>
  );
}
