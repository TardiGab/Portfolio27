import Link from "next/link";
import styles from "./rolling-link.module.scss";
import ArrowRight from "../../icons/arrow-right";
import ArrowBack from "../../icons/arrow-back";
import ArrowOutwards from "../../icons/arrow-outwards";
import ArrowUpwards from "../../icons/arrow-upwards";

export default function RollingLink({
  href,
  label,
  className,
  target,
  arrow,
  iconPosition = "right",
  color,
}: {
  href: string;
  label: string;
  className?: string;
  target?: string;
  arrow?: string;
  iconPosition?: "left" | "right";
  color?: string;
}) {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "right":
        return <ArrowRight size="1em" />;
      case "back":
        return <ArrowBack size="1em" />;
      case "outwards":
        return <ArrowOutwards size="1em" />;
      case "upwards":
        return <ArrowUpwards size="1em" />;
      default:
        return null;
    }
  };

  const content = (
    <span className="inline-flex items-center leading-[1.2]">
      {iconPosition === "left" && arrow && (
        <span className="mr-[.125em] items-center">{renderIcon(arrow)}</span>
      )}
      <span className="">{label}</span>
      {iconPosition === "right" && arrow && (
        <span className="ml-[.125em] items-center">{renderIcon(arrow)}</span>
      )}
    </span>
  );

  return (
    <Link
      href={href}
      className={`${styles.link} ${className || ""} relative inline-flex overflow-hidden`}
      style={{ "--link-color": color || "inherit" } as React.CSSProperties}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <span className={styles.row}>{content}</span>
      <span className={styles.row} aria-hidden="true">
        {content}
      </span>
    </Link>
  );
}
