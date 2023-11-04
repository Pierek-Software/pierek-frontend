import Head from "next/head";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import matter from "gray-matter";
import Breadcrumbs from "../../components/atom/Breadcrumbs";
import BlogPostCard, {
  IBlogPostCardProps,
} from "../../components/atom/BlogPostCard";

export interface IBlogPageProps {
  posts: IBlogPostCardProps[];
  currentPage: number;
  totalPages: number;
}

export default function Page({
  posts,
  currentPage,
  totalPages,
}: IBlogPageProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar background={true} wave={false} />

      <main className="container mt-3 lg:mt-5">
        <Breadcrumbs
          breadcrumbs={[
            { name: "Home Page", link: "/" },
            { name: "Blog", link: "/blog" },
          ]}
        />
        <section>
          <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
            Blog
          </h1>
          <p className="text-2xl md:text-4xl font-light">
            Because learning is key to knowledge
          </p>
        </section>

        <section className="mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => {
              return (
                <BlogPostCard
                  key={post.id}
                  id={post.id}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  updatedAt={post.updatedAt}
                />
              );
            })}
          </div>
        </section>

        <div className="mt-5 flex justify-center">
          <nav className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <a
                href={`/blog?page=${index + 1}`}
                key={index}
                className={`px-3 py-2 ${
                  currentPage === index + 1
                    ? "bg-slate-950 text-white"
                    : "text-gray-600"
                }`}
              >
                {index + 1}
              </a>
            ))}
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page ? parseInt(query.page as string, 10) : 1;
  const itemsPerPage = 3;

  const fileNamesWithExtensions = readdirSync(path.resolve("./src/posts"));

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const posts: IBlogPostCardProps[] = fileNamesWithExtensions
    .slice(startIndex, endIndex)
    .map((fileNameWithExtension) => {
      const filePath = path.resolve("./src/posts", fileNameWithExtension);

      const file = readFileSync(filePath);

      const parsed = matter(file);

      const data = {
        id: parsed.data.id,
        slug: fileNameWithExtension.replace(".md", ""),
        title: parsed.data.title,
        createdAt: new Date(parsed.data.createdAt).toISOString(),
        updatedAt: new Date(parsed.data.updatedAt).toISOString(),
        description: parsed.data.description,
      };

      return data;
    });

  posts.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  const totalPages = Math.ceil(fileNamesWithExtensions.length / itemsPerPage);

  return { props: { posts, currentPage: page, totalPages } };
};
