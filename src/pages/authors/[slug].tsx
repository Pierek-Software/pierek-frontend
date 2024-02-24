import { GetServerSideProps } from "next";
import BlogPostCard from "../../components/BlogPostCard";
import ApiClient from "../../api";
import ClientLayout from "../../layouts/ClientLayout";

export interface PaginationProps {
  page: number;
  perPage: number;
  pages: number;
  total: number;
}

export interface BlogPageProps {
  posts: any[];
  pagination: PaginationProps;
}

export default function Page({ posts, pagination }: BlogPageProps) {
  return (
    <ClientLayout
      title={"Kamil Wilim"}
      description={"Kamil Wilim author section"}
      keywords={["Blog", "Articles", "Posts", "Author"]}
      author="Kamil Wilim"
      structuredDataJSON={""}
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "Authors", link: "/authors" },
        { name: "Kamil Wilim", link: "#" },
      ]}
    >
      <h1 className="text-4xl font-bold text-black md:text-8xl">Kamil Wilim</h1>

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

      <div className="my-5 flex justify-center">
        <nav className="flex space-x-2">
          {Array.from({ length: pagination.pages }, (_, index) => (
            <a
              href={`/authors/kamil-wilim?page=${index + 1}`}
              key={index}
              className={`px-3 py-2 ${
                pagination.page === index + 1
                  ? "bg-gray-950 text-white"
                  : "text-gray-600"
              }`}
            >
              {index + 1}
            </a>
          ))}
        </nav>
      </div>
    </ClientLayout>
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
