import RollingLink from "../../ui/RollingLink/rolling-link";
import Image from "next/image";

import styles from "./contact.module.scss";

export default function Contact({ className }: { className?: string }) {
  return (
    <div className={className || "contact-container"}>
      <div className="contact-wrapper m-auto flex h-screen max-w-[80vw] flex-col items-center justify-center gap-8 md:flex-row">
        <Image
          src="/images/landing/gabriel-manciu.webp"
          alt="Contact"
          width={400}
          height={400}
          className="rounded-2xl border border-green-900"
        />
        <div>
          <h2
            className={`${styles.title} font-display text-4xl font-medium uppercase`}
          >
            Une opportunité ?
          </h2>
          <p className="mt-4 max-w-[90vw] text-lg leading-[1.2] opacity-80">
            Je suis actuellement à la recherche d’une nouvelle aventure en tant
            que développeur frontend junior dans la province de Namur ou en
            hybride.
          </p>
          <p className="mt-4 max-w-[90vw] text-lg leading-[1.2] opacity-80">
            C’est un match ? Alors discutons en sur LinkedIn ou par mail.{" "}
          </p>
          <div>
            <RollingLink
              href="https://www.linkedin.com/in/gabriel-manciu/"
              label="LinkedIn"
              arrow="outwards"
              iconPosition="right"
              className={`font-display uppercase`}
            />{" "}
            •{" "}
            <RollingLink
              href="mailto:gabriel@manciu.be"
              label="gabriel@manciu.be"
              className={`font-display uppercase`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
