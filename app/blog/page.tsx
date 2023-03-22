import { Container } from 'components/container';
import DateComponent from 'components/Date';
import Navigation from 'components/nav';
import { getBlogExcerpt } from 'lib/blog';
import Link from 'next/link';

export default async function BlogPostIndex() {
  const blogData = await getBlogExcerpt();
  return (
    <div>
      <section className="bg-slate-100 m-2 pt-4 px-4 pb-24">
        <Container>
          <Navigation className="my-4" />
          <div className="text-center">
            <h1 className="mt-20">
              My articles on JavaScript, React and all the other jazz 🎷 around
              frontend development
            </h1>
          </div>
        </Container>
      </section>
      <section className="px-4 py-24">
        <Container className="flex flex-col gap-4 sm:gap-6">
          {blogData.map((post) => (
            <article key={post.id}>
              <h2>
                <Link className="btn link pl-0" href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <p>
                <i>Posted on</i>{' '}
                <strong>
                  <DateComponent dateString={post.date} />
                </strong>
              </p>
            </article>
          ))}
        </Container>
      </section>
    </div>
  );
}
