import { Container } from 'components/container';
import Navigation from 'components/nav';
import { getAllBlogPostIds, getBlogData } from 'lib/blog';

export default async function Post({ params }: { params: { id: string } }) {
  const blog = await getBlogData(params.id);

  return (
    <div>
      <section className="bg-slate-100 m-2 pt-4 px-4 pb-24">
        <Container>
          <Navigation className="my-4" />
          <div className="text-center">
            <h1 className="mt-20">{blog.title}</h1>
          </div>
        </Container>
      </section>
      <section className="px-4 py-24">
        <article
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          className="prose prose-slate lg:prose-lg mx-auto"
        ></article>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const paths = getAllBlogPostIds();
  return paths.map((path) => ({ id: path }));
}
