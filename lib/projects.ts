import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

const projectsDirectory = path.join(process.cwd(), 'projects');

// Returns an array that looks like this:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''))

}
export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await serialize(matterResult.content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  return {
    id,
    contentHtml: processedContent,
    ...matterResult.data,
  };
}
