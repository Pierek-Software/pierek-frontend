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
import HeadComponent from "../../components/atom/Head";

export interface PaginationProps {
  page: number;
  perPage: number;
  pages: number;
  total: number;
}

export interface IBlogPageProps {
  posts: IBlogPostCardProps[];
  pagination: PaginationProps;
}

export default function Page({ posts, pagination }: IBlogPageProps) {
  return (
    <>
      <HeadComponent
        title={"Blog"}
        description={"Pierek blog section"}
        keywords={["Blog", "Articles", "Posts"]}
        author="Kamil Wilim"
      />
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
            {Array.from({ length: pagination.pages }, (_, index) => (
              <a
                href={`/blog?page=${index + 1}`}
                key={index}
                className={`px-3 py-2 ${
                  pagination.page === index + 1
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
  const perPage = 3;

  const fileNamesWithExtensions = readdirSync(path.resolve("./src/posts"));

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const posts: IBlogPostCardProps[] = fileNamesWithExtensions
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
        visible: parsed?.data?.visible === false ? false : true,
      };

      return data;
    })
    .filter((test) => test.visible === true)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  const postsPaginated = posts.slice(startIndex, endIndex);

  return {
    props: {
      posts: postsPaginated,
      pagination: {
        page,
        perPage,
        pages: Math.ceil(posts.length / perPage),
        total: posts.length,
      },
    },
  };
};
