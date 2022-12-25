import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';
import { getBlogExcerpt } from '../../lib/blog';

type BlogsData = {
  title: string;
  id: string;
  date: string;
}[];

export default function BlogPostIndex({ blogData }: { blogData: BlogsData }) {
  return (
    <Layout home={false} pageTitle={'Blog posts'}>
      <Head>
        <title>Blog posts</title>
      </Head>
      <Script src="/prism.js" />
      <h1>All blog posts</h1>
      {blogData.map((post) => (
        <article key={post.id}>
          <Link
            style={{ marginBottom: '2rem', marginTop: '0.5rem' }}
            href={`/blog/${post.id}`}
          >
            {post.title}
          </Link>
        </article>
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const blogExcerpts = await getBlogExcerpt();
  console.log(blogExcerpts);
  return {
    props: {
      blogData: JSON.parse(JSON.stringify(blogExcerpts)),
    },
  };
}
