import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Date from '../../components/Date';
import Script from 'next/script';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type ProjectDateType = {
  title: string;
  date: string;
  contentHtml: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export default function Post({
  projectData,
}: {
  projectData: ProjectDateType;
}) {
  return (
    <Layout home={false} pageTitle={projectData.title}>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <Script src="/prism.js" />
      <article>
        <h1 style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
          {projectData.title}
        </h1>
        <MDXRemote {...projectData.contentHtml} />
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const projectData = await getProjectData(params.id);
  return {
    props: { projectData },
  };
}
