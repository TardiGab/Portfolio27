import Navigation from "../components/ui/Navigation/navigation";

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="case-header fixed top-0 left-0 z-50 w-full">
        <Navigation />
      </header>
      <main className="case h-full">{children}</main>
    </>
  );
}
