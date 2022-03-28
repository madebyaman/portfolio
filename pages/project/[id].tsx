import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Date from '../../components/Date';

type ProjectDateType = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function Post({
  projectData,
}: {
  projectData: ProjectDateType;
}) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1>{projectData.title}</h1>
        <div>
          <Date dateString={projectData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
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
