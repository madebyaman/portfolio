import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'blog');

export function getAllBlogPostIds() {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getBlogData(id: string) {
  const fullPath = path.join(blogDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
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
      date: matterResult.data.date.toString(),
      title: matterResult.data.title,
    };
  });
}
