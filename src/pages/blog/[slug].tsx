import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";
import { readFileSync, readdir, readdirSync } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import { MDXComponents } from "mdx/types";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  metadata: any;
  dynamicData: any;
}

export default function RemoteMdxPage({
  mdxSource,
  metadata,
  dynamicData,
}: Props) {
  const components: MDXComponents = {
    p: ({ children }) => (
      <p className="text-lg leading-loose mt-3">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl leading-normal">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-3xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xl">{children}</h5>,
    h6: ({ children }) => <h6 className="text-lg">{children}</h6>,
    Test: (props) => <h1>{JSON.stringify(dynamicData)}</h1>,
    img: (props) => (
      <img
        className="m-auto my-3"
        alt={props.alt}
        src={props.src.replace("../../public", "")}
      />
    ),
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Navbar background={true} wave={false} />
      <main
        className="
      container 
      mt-3 sm:mt-10"
      >
        <section className="xl:flex xl:items-center">
          <div className="xl:w-1/2">
            <h2
              className="
            font-extrabold leading-normal
            text-4xl sm:text-6xl"
            >
              {metadata.title}
            </h2>
          </div>
          <div className="xl:w-1/2 mt-3 sm:mt-10 xl:mt-0">
            <img src="https://picsum.photos/id/1/1920/1080" />
          </div>
        </section>
        <section className="mt-5 sm:mt-8">
          <MDXRemote {...mdxSource} components={components} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params?.slug !== "string") {
    throw new Error("No slug");
  }

  const dynamicData = { key: "value" };

  const { slug } = params;

  const filePath = path.resolve("./src/posts", `${slug}.md`);

  const file = readFileSync(filePath);

  const parsed = matter(file);

  const mdxSource = await serialize(parsed.content);

  return { props: { mdxSource, metadata: parsed.data, dynamicData } };
};

export async function getStaticPaths() {
  const folderPath = path.resolve("./src/posts");

  const files = readdirSync(folderPath);
  const clean = files
    .map((file) => file.replace(".md", ""))
    .map((name) => `/blog/${name}`);
  console.log("files", clean);

  return {
    paths: clean,
    fallback: false,
  };
}
