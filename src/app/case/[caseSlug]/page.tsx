import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXType } from "@/src/types/mdx";
import { useMDXComponents } from "@/src/app/components/mdx/mdx-components";

import styles from "./page.module.scss";
import Image from "next/image";
import ArrowRight from "../../components/icons/arrow-right";
import RollingLink from "../../components/ui/RollingLink/rolling-link";
import ArrowOutwards from "../../components/icons/arrow-outwards";
import ArrowBack from "../../components/icons/arrow-back";

type CaseStudyPageProps = {
  params: Promise<{ caseSlug: string }>;
};

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { caseSlug } = await params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/case/(cases)", `${caseSlug}.mdx`),
    "utf-8",
  );
  const { frontmatter } = await compileMDX<MDXType>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });
  return {
    title: frontmatter.title,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { caseSlug } = await params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/case/(cases)", `${caseSlug}.mdx`),
    "utf-8",
  );
  const data = await compileMDX<MDXType>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: useMDXComponents({}),
  });
  return (
    <article
      className={`${styles.case} m-auto mt-[15vh] max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]`}
    >
      <div className={`${styles.case__header} text-center`}>
        <h1
          className={`${styles.case__h1} font-display text-center leading-[.9] font-bold uppercase`}
        >
          {data.frontmatter.title}
        </h1>
        <span
          className={`${styles.case__type} font-sans text-blue-300 lowercase`}
        >
          {data.frontmatter.projectType}
        </span>
        <Image
          src={`/images/case/${caseSlug}/${caseSlug}.webp`}
          alt={data.frontmatter.title}
          className="mt-16 mb-8 h-auto w-full rounded-2xl object-cover"
          width={800}
          height={600}
        />
        <div className="flex flex-row justify-between text-left">
          <div className="flex flex-col gap-8 text-left lg:flex-row">
            <div>
              <h3
                className={`${styles.case__infosTitle} font-display mb-4 leading-none font-medium text-neutral-300 uppercase`}
              >
                Stack
              </h3>
              <ul>
                {data.frontmatter.tags.map((tag) => (
                  <li key={tag} className="text-white">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className={`${styles.case__infosTitle} font-display mb-4 leading-none font-medium text-neutral-300 uppercase`}
              >
                Réalisation
              </h3>
              <div className="flex items-center gap-2 text-white">
                <span>{data.frontmatter.startDate}</span>
                <ArrowRight size={"1.5em"} />
                <span>{data.frontmatter.endDate}</span>
              </div>
            </div>
            <div>
              <h3
                className={`${styles.case__infosTitle} font-display mb-4 leading-none font-medium text-neutral-300 uppercase`}
              >
                Rôle
              </h3>
              <ul>
                {data.frontmatter.roles.map((role) => (
                  <li key={role} className="text-white">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <RollingLink
              label="Voir le projet"
              href={data.frontmatter.link}
              target="_blank"
              icon={<ArrowOutwards size={"1em"} />}
              iconPosition="right"
              className={`${styles.case__cta} font-display leading-none font-medium uppercase *:text-blue-300`}
              color="var(--color-blue-300)"
            />
            <RollingLink
              label="Retour"
              href={data.frontmatter.link}
              target="_blank"
              icon={<ArrowBack size={"1em"} />}
              iconPosition="right"
              className={`${styles.case__cta} font-display leading-none font-medium text-neutral-50 uppercase`}
              color="var(--color-neutral-50)"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.case__content}`}>{data.content}</div>
    </article>
  );
}
