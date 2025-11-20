import { Container } from "components/container";
import Navigation from "components/nav";
import { getAllBlogPostIds, getBlogData } from "lib/blog";
import Link from "next/link";
import Image from "next/image";
import { LinkIconButton, PrimaryButton } from "app/page";
import { SiGithub, SiX } from "react-icons/si";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog: {
    id: string;
    title?: string;
    contentHtml: string;
  } = await getBlogData(id);

  return (
    <div>
      <main className="px-4 py-10">
        <section className="max-w-2xl mx-auto">
          <div className="flex justify-between gap-2 mb-12 items-center">
            <Link
              href="/"
              className="rounded-full hover:opacity-50 focus:ring-2 focus:ring-slate-700"
            >
              <Image
                // src={profileImg}
                src="https://res.cloudinary.com/dksughwo7/image/upload/c_fill,g_face,h_100,w_100/v1679823554/hacker-journey/photo.jpg"
                alt="Aman Thakur"
                className="rounded-full inline-block"
                width={40}
                height={40}
              />
            </Link>
            <div className="flex gap-4 items-center">
              <LinkIconButton
                href="https://x.com/imamanthakur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiX />
              </LinkIconButton>
              <LinkIconButton
                href="https://github.com/madebyaman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </LinkIconButton>
            </div>
          </div>
          <h1 className="text-3xl font-semibold mb-4">Cover Letter</h1>
        </section>
        <article
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          className="prose prose-slate max-w-2xl mx-auto"
        ></article>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const paths = getAllBlogPostIds();
  return paths.map((path) => ({ id: path }));
}
