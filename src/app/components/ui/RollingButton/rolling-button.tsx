import ArrowBack from "../../icons/arrow-back";
import ArrowOutwards from "../../icons/arrow-outwards";
import ArrowRight from "../../icons/arrow-right";
import ArrowUpwards from "../../icons/arrow-upwards";
import styles from "./rolling-button.module.scss";

export default function RollingButton({
  className,
  onClick,
  label,
  arrow,
  iconPosition = "right",
}: {
  className?: string;
  label?: string;
  onClick: () => void;
  arrow?: string;
  iconPosition?: "left" | "right";
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
    <button
      type="button"
      className={`${styles.button} ${className || ""}`}
      data-label={label}
      onClick={onClick}
    >
      <span className={styles.wrapper}>
        <span className={styles.row}>{content}</span>
        <span className={styles.row} aria-hidden="true">
          {content}
        </span>
      </span>
    </button>
  );
}
