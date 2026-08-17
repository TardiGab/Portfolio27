"use client";

export default function About({ className }: { className?: string }) {
  return (
    <div className={`${className} h-screen`}>
      <h1>About Us</h1>
      <p>Welcome to our company!</p>
    </div>
  );
}
