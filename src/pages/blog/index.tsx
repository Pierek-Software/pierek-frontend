import Head from "next/head";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import matter from "gray-matter";

function BlogPostCard({ title, description, slug, id }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <a href={"/blog" + "/" + slug}>
        <img
          src={"/posts" + "/" + id + "/" + "cover.jpeg"}
          alt="Blog Post Image"
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function RemoteMdxPage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar background={true} wave={false} />
      <main className="container mt-5">
        {posts.map((post) => {
          return (
            <BlogPostCard
              id={post.id}
              slug={post.slug}
              key={post.id}
              title={post.title}
              description={post.description}
            />
          );
        })}
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fileNamesWithExtensions = readdirSync(path.resolve("./src/posts"));

  const posts = fileNamesWithExtensions.map((fileNameWithExtension) => {
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

  return { props: { posts } };
};
