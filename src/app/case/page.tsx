import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

import type { Metadata } from "next";
import type { MDXType } from "@/src/types/mdx";

import ProjectsCard from "@/src/app/components/ui/ProjectCard/project-card";

export const metadata: Metadata = {
  title: "Études de cas & Projets",
  description:
    "Découvrez les différents projets et études de cas réalisés par Gabriel Manciu, développeur front-end junior.",
  openGraph: {
    title: "Études de cas & Projets | Gabriel Manciu",
    description:
      "Découvrez les différents projets et études de cas réalisés par Gabriel Manciu, développeur front-end junior.",
    url: "/case",
  },
  robots: { index: false, follow: false },
};

export default async function Projects() {
  const fileNames = await fs.readdir(
    path.join(process.cwd(), "src/app/case/(cases)"),
    "utf-8",
  );

  const projects = await Promise.all(
    fileNames.map(async (fileName) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "src/app/case/(cases)", fileName),
        "utf-8",
      );
      const { frontmatter } = await compileMDX<MDXType>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });
      return {
        fileName,
        slug: fileName.replace(".mdx", ""),
        ...frontmatter,
      };
    }),
  );
  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project.slug}>
            <ProjectsCard
              title={project.title}
              description={project.description}
              year={project.year}
              projectType={project.projectType}
              link={`/case/${project.slug}`}
              image={`/images/case/${project.slug}/${project.slug}.webp`}
              tags={project.tags}
            />
          </li>
        );
      })}
    </ul>
  );
}
