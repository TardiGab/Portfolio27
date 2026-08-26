import type { Metadata } from "next";
import Footer from "./components/ui/Footer/footer";
import Navigation from "./components/ui/Navigation/navigation";
import RollingLink from "./components/ui/RollingLink/rolling-link";
import CaseLayoutWrapper from "./components/case/CaseLayoutWrapper/case-layout-wrapper";

export const metadata: Metadata = {
  title: "Oups ! Vous semblez perdu ?",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <CaseLayoutWrapper>
      <header>
        <Navigation className="navigation" />
      </header>
      <main>
        <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
        <div className="pointer-events-none absolute top-0 left-0 z-0 flex h-screen w-full translate-y-[60%] flex-col lg:translate-y-[-50%]">
          <span
            aria-hidden="true"
            className="font-display text-[45vw] leading-[.7] font-extrabold opacity-1"
          >
            404
          </span>
          <span
            aria-hidden="true"
            className="font-display text-[45vw] leading-[.7] font-extrabold opacity-3"
          >
            404
          </span>
          <span
            aria-hidden="true"
            className="font-display text-[45vw] leading-[.7] font-extrabold opacity-6"
          >
            404
          </span>
        </div>
        <div className="relative z-10 mx-auto mt-[30vh] mb-[60vh] flex max-w-[70vw] flex-col gap-8 lg:mt-[70vh] lg:mb-[20vh] lg:flex-row lg:gap-10 xl:gap-40">
          <h1 className="h2-404 font-display leading-[.9] font-bold text-nowrap uppercase">
            Oups !
          </h1>
          <div>
            <p className="main-size mb-8 font-sans">
              Vous semblez perdu. C’est peut-être dû à un lien mort. Venez,
              suivez moi, je vous raccompagne sur votre route, j’ai des choses à
              vous montrer.
            </p>
            <RollingLink
              href="/"
              label="Retour"
              arrow="back"
              iconPosition="right"
              className="font-display back-404 font-medium uppercase"
              color="var(--color-blue-300)"
            />
          </div>
        </div>
      </main>
      <Footer className="footer" />
    </CaseLayoutWrapper>
  );
}
