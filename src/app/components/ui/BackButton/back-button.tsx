import { useRouter } from "next/navigation";

import RollingLink from "../RollingLink/rolling-link";

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <RollingLink
      label="Retour"
      href="/"
      arrow="back"
      iconPosition="right"
      className={`${className} font-display font-medium text-neutral-50 uppercase *:**:leading-none *:**:text-nowrap`}
      color="var(--color-neutral-50)"
    />
  );
}
