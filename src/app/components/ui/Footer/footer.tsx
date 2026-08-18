"use client";
import { useState, useEffect } from "react";

import RollingLink from "../RollingLink/rolling-link";
import DigitalClock from "../DigitalClock/digital-clock";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col gap-4 md:flex-row">
          <div>
            <h4 className="font-display mb-4 text-2xl font-medium text-gray-300 uppercase">
              Navigation
            </h4>
            <nav>
              <ul>
                <li className="mb-2 text-xl">
                  <RollingLink href="#about" label="À propos" />
                </li>
                <li className="mb-2 text-xl">
                  <RollingLink href="#projets" label="Projets" />
                </li>
                <li className="text-xl">
                  <RollingLink href="#contact" label="Contact" />
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-display mb-4 text-2xl font-medium text-gray-300 uppercase">
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
                  />
                </li>
                <li className="text-xl">
                  <RollingLink
                    href="https://www.linkedin.com/in/gabriel-manciu/"
                    label="LinkedIn"
                    arrow="outwards"
                    iconPosition="right"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <RollingLink
            href="#top"
            label="Retour en haut"
            arrow="upwards"
            iconPosition="right"
            className="text-xl"
          />
          <span className="text-right text-xl">
            <span className="text-blue-300">Dinant</span>, Belgique
          </span>
          <span className="text-right text-xl">
            Il est
            <DigitalClock />
            chez moi
          </span>
        </div>
      </div>
      <div className="relative z-10">
        <p className="text-center">
          <span className="text-blue-300"> &copy;</span> 2027 Gabriel Manciu
        </p>
      </div>
    </footer>
  );
}
