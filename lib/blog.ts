import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

const blogDirectory = path.join(process.cwd(), 'blog');

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
export function getAllBlogPostIds() {
  const fileNames = fs.readdirSync(blogDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getBlogData(id: string) {
  const fullPath = path.join(blogDirectory, `${id}.md`);
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

export async function getBlogExcerpt() {
  const fileNames = fs.readdirSync(blogDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    return {
      id: fileName.replace(/\.md$/, ''),
      date: matterResult.data.date,
      title: matterResult.data.title,
    };
  });
}
