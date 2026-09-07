"use client";

import { useRouter } from "next/navigation";

import RollingButton from "../RollingButton/rolling-button";

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <RollingButton
      className={className}
      label="Retour"
      arrow="back"
      iconPosition="right"
      onClick={() => router.back()}
    />
  );
}
