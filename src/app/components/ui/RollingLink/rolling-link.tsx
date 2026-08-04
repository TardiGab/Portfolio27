import styles from "./rolling-link.module.scss";

export default function RollingLink({
  href,
  label,
  className,
  target,
}: {
  href: string;
  label: string;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      className={`${styles.link} ${className || ""}`}
      data-label={label}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <span className="inline-block">{label}</span>
    </a>
  );
}
