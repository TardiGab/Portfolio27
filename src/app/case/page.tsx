// import { promises as fs } from "fs";
// import { compileMDX } from "next-mdx-remote/rsc";
// import path from "path";

// import type { MDXType } from "@/src/types/mdx";

// import ProjectsCard from "@/src/app/components/ui/ProjectCard/project-card";

// export default async function Projects() {
//   const fileNames = await fs.readdir(
//     path.join(process.cwd(), "src/app/case/(cases)"),
//     "utf-8",
//   );

//   const projects = await Promise.all(
//     fileNames.map(async (fileName) => {
//       const content = await fs.readFile(
//         path.join(process.cwd(), "src/app/case/(cases)", fileName),
//         "utf-8",
//       );
//       const { frontmatter } = await compileMDX<MDXType>({
//         source: content,
//         options: {
//           parseFrontmatter: true,
//         },
//       });
//       return {
//         fileName,
//         slug: fileName.replace(".mdx", ""),
//         ...frontmatter,
//       };
//     }),
//   );
//   return (
//     <ul>
//       {projects.map((project) => {
//         return (
//           <li key={project.slug}>
//             <ProjectsCard
//               title={project.title}
//               description={project.description}
//               year={project.year}
//               projectType={project.projectType}
//               link={`/case/${project.slug}`}
//               image={`/images/case/${project.slug}/${project.slug}.webp`}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
