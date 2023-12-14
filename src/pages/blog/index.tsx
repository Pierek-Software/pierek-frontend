import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";
import { GetServerSideProps } from "next";
import Breadcrumbs from "../../components/atom/Breadcrumbs";
import BlogPostCard from "../../components/atom/BlogPostCard";
import HeadComponent from "../../components/atom/Head";
import ApiClient from "../../api";

export interface PaginationProps {
  page: number;
  perPage: number;
  pages: number;
  total: number;
}

export interface IBlogPageProps {
  posts: any[];
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
          <h1 className="py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
            Blog
          </h1>
          <p className="text-2xl font-light md:text-4xl">
            Because learning is key to knowledge
          </p>
        </section>

        <section className="mt-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              return (
                <BlogPostCard
                  imagePriority={true}
                  key={post.id}
                  id={post.id}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  createdAt={post.created_at}
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
  const apiClient = new ApiClient();
  const page = query.page ? parseInt(query.page as string, 10) : 1;
  const perPage = 6;

  const response = await apiClient.getPosts({ pagination: { page, perPage } });

  return {
    props: {
      posts: response.data,
      pagination: response.pagination,
    },
  };
};
