import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

import type { MDXType } from "@/src/types/mdx";

import ProjectsCard from "@/src/app/components/ui/ProjectCard/project-card";

export default async function ProjectsList() {
  const fileNames = await fs.readdir(
    path.join(process.cwd(), "src/app/case/(cases)"),
    "utf-8",
  );

  const projects = (
    await Promise.all(
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
    )
  ).sort((a, b) => Date.parse(b.date!) - Date.parse(a.date!));
  return (
    <ul className="sticky top-1/4 flex flex-col gap-40">
      {projects.map((project) => {
        return (
          <li key={project.slug} className="sticky top-1/4">
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
