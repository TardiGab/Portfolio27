import CaseLayoutWrapper from "../components/case/CaseLayoutWrapper/case-layout-wrapper";
import Footer from "../components/ui/Footer/footer";
import Navigation from "../components/ui/Navigation/navigation";

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CaseLayoutWrapper>
      <header className="case-header fixed top-0 left-0 z-50 w-full">
        <Navigation />
      </header>
      <main className="case h-full">
        <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
        <div className="relative z-10 mb-[10%]">{children}</div>
      </main>
      <Footer className="footer" />
    </CaseLayoutWrapper>
  );
}
