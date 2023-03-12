import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllProjectIds, getProjectData } from 'lib/projects';

type ProjectDateType = {
  title: string;
  date: string;
  contentHtml: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export default async function Post({ params }: { params: { id: string } }) {
  const project = await getProjectData(params.id);
  return (
    <>
      <article>
        <h1 style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
          {project.title}
        </h1>
        <div className="prose lg:prose-xl">
          <MDXRemote {...project.contentHtml} />
        </div>
      </article>
    </>
  );
}
export async function generateStaticParams() {
  const paths = getAllProjectIds();
  paths.map((path) => ({ id: path }));
}
