import styles from "./rolling-button.module.css";

export default function RollingButton({
  className,
  onClick,
  label,
}: {
  className?: string;
  label?: string;
  onClick: () => void;
}) {
  const content = (
    <span className="inline-flex items-center leading-[1.2]">
      <span>{label}</span>
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
