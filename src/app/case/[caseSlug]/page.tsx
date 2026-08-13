import { promises as fs } from "fs";
import path from "path";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";

type CaseStudyPageProps = {
  params: Promise<{ caseSlug: string }>;
};

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { caseSlug } = await params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/case/(cases)", `${caseSlug}.mdx`),
    "utf-8",
  );
  const { frontmatter } = await compileMDX<{ title: string }>({
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
  console.log(caseSlug);
  const data = await compileMDX<{ title: string }>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: {
      // Components used in the MDX files
    },
  });
  return (
    <>
      <div className="case-study">{data.content}</div>
    </>
  );
}
