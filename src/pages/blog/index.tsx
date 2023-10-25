import Head from "next/head";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import matter from "gray-matter";

function BlogPostCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://picsum.photos/id/1/1920/1080" // Replace with your image source
        alt="Blog Post Image"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Blog Post Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Category 1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Category 2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Category 3
        </span>
      </div>
    </div>
  );
}

export default function RemoteMdxPage({ data }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar background={true} wave={false} />
      <main>{JSON.stringify(data)}</main>
      <BlogPostCard />

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fileNamesWithExtensions = readdirSync(path.resolve("./src/posts"));

  const files = fileNamesWithExtensions.map((fileNameWithExtension) => {
    const filePath = path.resolve("./src/posts", fileNameWithExtension);

    const file = readFileSync(filePath);

    const parsed = matter(file);

    const data = {
      id: parsed.data.id,
      slug: fileNameWithExtension.replace(".md", ""),
      title: parsed.data.title,
      createdAt: new Date(parsed.data.createdAt).toISOString(),
      updatedAt: new Date(parsed.data.updatedAt).toISOString(),
    };

    return data;
  });

  return { props: { data: files } };
};
