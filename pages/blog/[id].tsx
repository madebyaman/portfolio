import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllBlogPostIds, getBlogData } from '../../lib/blog';
import Script from 'next/script';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type BlogData = {
  title: string;
  date: string;
  contentHtml: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export default function Post({ blogData }: { blogData: BlogData }) {
  return (
    <Layout
      home={false}
      pageTitle={blogData.title}
      back={{ link: '/blog', name: 'Blog' }}
    >
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <Script src="/prism.js" />
      <article>
        <h1 style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
          {blogData.title}
        </h1>
        <MDXRemote {...blogData.contentHtml} />{' '}
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllBlogPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const blogData = await getBlogData(params.id);
  return {
    props: { blogData: JSON.parse(JSON.stringify(blogData)) },
  };
}
