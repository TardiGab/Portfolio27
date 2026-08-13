import Navigation from "../components/ui/Navigation/navigation";

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="case h-full">
      <Navigation />
      {children}
    </main>
  );
}
