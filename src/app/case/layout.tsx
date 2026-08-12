export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(children);
  return <main className="case h-full">{children}</main>;
}
