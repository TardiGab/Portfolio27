import RollingLink from "../RollingLink/rolling-link";
import DigitalClock from "../DigitalClock/digital-clock";
import styles from "./footer.module.scss";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`${styles.footer} ${className} relative m-auto min-h-[80vh] max-w-[90vw] rounded-t-[4rem] pt-[15vh] pr-4 pl-4 md:pr-[5%] md:pl-[5%]`}
    >
      <div className="flex flex-col justify-between md:flex-row md:items-end">
        <div className="flex flex-col gap-6 md:flex-row">
          <div>
            <h4 className="font-display mb-3 text-2xl font-medium text-gray-300 uppercase md:mb-4">
              Navigation
            </h4>
            <nav>
              <ul>
                <li className="mb-2 text-xl">
                  <RollingLink href="/#about" label="À propos" />
                </li>
                <li className="mb-2 text-xl">
                  <RollingLink href="/#projets" label="Projets" />
                </li>
                <li className="text-xl">
                  <RollingLink href="/#contact" label="Contact" />
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-display mb-3 text-2xl font-medium text-gray-300 uppercase md:mb-4">
              Liens
            </h4>
            <nav>
              <ul>
                <li className="mb-2 text-xl">
                  <RollingLink
                    href="mailto:gabriel@manciu.be"
                    label="gabriel@manciu.be"
                  />
                </li>
                <li className="mb-2 text-xl">
                  <RollingLink
                    href="https://github.com/TardiGab"
                    label="Github"
                    arrow="outwards"
                    iconPosition="right"
                    target="_blank"
                  />
                </li>
                <li className="text-xl">
                  <RollingLink
                    href="https://www.linkedin.com/in/gabriel-manciu/"
                    label="LinkedIn"
                    arrow="outwards"
                    iconPosition="right"
                    target="_blank"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-6 mb-6 flex flex-col gap-2 md:mt-0 md:mb-0 md:items-end">
          <RollingLink
            href="#top"
            label="Retour en haut"
            arrow="upwards"
            iconPosition="right"
            className="text-xl"
          />
          <span className="text-xl md:text-right">
            <span className="text-blue-300">Dinant</span>, Belgique
          </span>
          <span className="text-xl md:text-right">
            Il est
            <DigitalClock />
            chez moi
          </span>
        </div>
      </div>
      <div className="relative z-10 mt-8">
        <p className="text-center text-xl">
          <span className="text-blue-300"> &copy;</span>{" "}
          {new Date().getFullYear()} Gabriel Manciu
        </p>
      </div>
      <div className={styles.logo}></div>
    </footer>
  );
}
