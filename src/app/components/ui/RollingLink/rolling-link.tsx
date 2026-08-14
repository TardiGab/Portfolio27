// import Link from "next/link";
// import styles from "./rolling-link.module.scss";

// export default function RollingLink({
//   href,
//   label,
//   className,
//   target,
//   icon,
//   iconPosition,
//   color,
// }: {
//   href: string;
//   label: string;
//   className?: string;
//   target?: string;
//   icon?: React.ReactNode;
//   iconPosition?: "left" | "right";
//   color?: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className={`${styles.link} ${className || ""} flex items-center overflow-hidden`}
//       data-label={label}
//       data-icon={icon ? "true" : "false"}
//       data-icon-position={iconPosition}
//       style={{ "--link-color": color || "inherit" } as React.CSSProperties}
//       target={target}
//       rel={target === "_blank" ? "noopener noreferrer" : undefined}
//     >
//       {iconPosition === "left" && icon && (
//         <span className="m-auto mr-2 inline-block">{icon}</span>
//       )}
//       <span className="inline-block">{label}</span>
//       {iconPosition === "right" && icon && (
//         <span className="ml-2 inline-block">{icon}</span>
//       )}
//     </Link>
//   );
// }

import Link from "next/link";
import styles from "./rolling-link.module.scss";
import ArrowRight from "../../icons/arrow-right";
import ArrowBack from "../../icons/arrow-back";
import ArrowOutwards from "../../icons/arrow-outwards";

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
      default:
        return null;
    }
  };

  const content = (
    <span className="inline-flex items-center leading-[1.2]">
      {iconPosition === "left" && arrow && (
        <span className="mr-2 inline-flex items-center">
          {renderIcon(arrow)}
        </span>
      )}
      <span className="">{label}</span>
      {iconPosition === "right" && arrow && (
        <span className="ml-2 inline-flex items-center">
          {renderIcon(arrow)}
        </span>
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
