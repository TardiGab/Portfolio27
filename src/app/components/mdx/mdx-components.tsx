import type { MDXComponents } from "mdx/types";
import styles from "./mdx-components.module.scss";

import RollingLink from "../ui/RollingLink/rolling-link";
import ArrowRight from "../icons/arrow-right";
import ArrowOutwards from "../icons/arrow-outwards";
import ArrowBack from "../icons/arrow-back";
import Image from "next/image";
import Carousel from "../ui/Caroussel/carousel";
import CaseImage from "../ui/CaseImage/case-image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className={` ${styles.h1} font-display text-center text-4xl font-bold uppercase`}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className={` ${styles.h2} font-display mt-14 mb-10 leading-[.9] font-medium uppercase md:mt-14 md:mb-10`}
        {...props}
      />
    ),
    p: (props) => (
      <p
        className={` ${styles.p} mb-4 text-lg leading-[1.4] text-slate-200`}
        {...props}
      />
    ),
    ul: (props) => (
      <ul className={`${styles.ul} mb-4 list-disc pl-6 text-lg`} {...props} />
    ),
    li: (props) => <li className={` ${styles.li} mb-2 text-lg`} {...props} />,

    ...components,
    RollingLink: (props) => <RollingLink {...props} />,
    ArrowRight: (props) => <ArrowRight {...props} />,
    ArrowOutwards: (props) => <ArrowOutwards {...props} />,
    ArrowBack: (props) => <ArrowBack {...props} />,
    Image: (props) => (
      <Image width={1920} height={1080} {...props} className="rounded-lg" />
    ),
    Carousel: (props) => (
      <Carousel
        images={props.images}
        alt={props.alt}
        slidesPerView={props.slidesPerView}
      />
    ),
    CaseImage: (props) => (
      <CaseImage
        src={props.src}
        alt={props.alt}
        caption={props.caption}
        link={props.link}
        className={props.className}
      />
    ),
  };
}
