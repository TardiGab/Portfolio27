import Link from "next/link";
import styles from "./rolling-link.module.scss";

export default function RollingLink({
  href,
  label,
  className,
  target,
  icon,
  iconPosition,
  color,
}: {
  href: string;
  label: string;
  className?: string;
  target?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  color?: string;
}) {
  return (
    <Link
      href={href}
      className={`${styles.link} ${className || ""} flex items-center overflow-hidden`}
      data-label={label}
      data-icon={icon ? "true" : "false"}
      data-icon-position={iconPosition}
      style={{ "--link-color": color || "inherit" } as React.CSSProperties}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {iconPosition === "left" && icon && (
        <span className="m-auto mr-2 inline-block">{icon}</span>
      )}
      <span className="inline-block">{label}</span>
      {iconPosition === "right" && icon && (
        <span className="ml-2 inline-block">{icon}</span>
      )}
    </Link>
  );
}
