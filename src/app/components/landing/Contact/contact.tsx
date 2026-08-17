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
            className={`${styles.title} font-display mb-8 text-4xl font-medium uppercase`}
          >
            Une opportunité ?
          </h2>
          <p className={`mb-4 max-w-[90vw] leading-[1.4] ${styles.content}`}>
            Je suis actuellement à la recherche d’une nouvelle aventure en tant
            que développeur frontend junior dans la province de Namur ou en
            hybride.
          </p>
          <p className={`mb-8 max-w-[90vw] leading-[1.4] ${styles.content}`}>
            C’est un match ? Alors discutons en sur LinkedIn ou par mail.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <RollingLink
              href="https://www.linkedin.com/in/gabriel-manciu/"
              label="LinkedIn"
              arrow="outwards"
              iconPosition="right"
              className={`${styles.links} font-display font-medium uppercase`}
            />
            <span className="hidden text-4xl text-gray-400 md:inline-block">
              •
            </span>
            <RollingLink
              href="mailto:gabriel@manciu.be"
              label={
                <>
                  gabriel<span className="text-green-600">@</span>manciu.be
                </>
              }
              className={`${styles.links} font-display font-medium uppercase`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
