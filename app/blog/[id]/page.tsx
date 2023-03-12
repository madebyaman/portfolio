import { getAllBlogPostIds, getBlogData } from 'lib/blog';
import { MDXRemote } from 'next-mdx-remote';

export default async function Post({ params }: { params: { id: string } }) {
  const blog = await getBlogData(params.id);
  return (
    <article>
      <h1 style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
        {blog.title}
      </h1>
      <MDXRemote {...blog.contentHtml} />{' '}
    </article>
  );
}
export async function generateStaticParams() {
  const paths = getAllBlogPostIds();
  paths.map((path) => ({ id: path }));
}
