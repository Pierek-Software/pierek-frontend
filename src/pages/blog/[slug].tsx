import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import { MDXComponents } from "mdx/types";
import { slugify } from "../../utils";
import Breadcrumbs from "../../components/atom/Breadcrumbs";
import AuthorSection from "../../components/atom/AuthorSection";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  metadata: any;
  dynamicData: any;
  slug: string;
  id: number;
}

export default function RemoteMdxPage({
  id,
  slug,
  mdxSource,
  metadata,
  dynamicData,
}: Props) {
  const components: MDXComponents = {
    p: ({ children }) => (
      <p className="text-lg leading-loose my-2">{children}</p>
    ),
    h2: ({ children }) => (
      <a href={"#" + slugify(children)}>
        <span className="flex items-center">
          <h2 id={slugify(children)} className="text-4xl my-2 leading-normal">
            {children}
          </h2>
          <span className="ml-2 text-xl">🔗</span>
        </span>
      </a>
    ),
    h3: ({ children }) => <h3 className="text-3xl my-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl my-2">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xl my-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-lg my-2">{children}</h6>,
    Test: (props) => <h1>{JSON.stringify(dynamicData)}</h1>,
    Youtube: (props: { videoId: string }) => (
      <iframe
        className="my-5 w-full"
        height="590"
        src={`https://www.youtube.com/embed/${props.videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    ),
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
        <meta
          name="description"
          content={metadata.description}
          key="description"
        />
        <meta name="keywords" content="node.js,web development,javascript" />
        <meta name="author" content="Kamil Wilim" />
        <meta name="publisher" content="Pierek" />

        <link href={`/blog/${slug}`} rel="canonical" />
      </Head>
      <Navbar background={true} wave={false} />
      <Breadcrumbs
        breadcrumbs={[
          { name: "Home Page", link: "/" },
          { name: "Blog", link: "/blog" },
          { name: metadata.title, link: "#" },
        ]}
      />
      <main
        className="
      ml-5 mr-5
      md:ml-16 md:mr-16
      lg:max-w-screen-lg lg:mx-auto
      mt-3 sm:mt-10"
      >
        <section className="mt-5">
          <div className="">
            <h1
              className="
            font-extrabold leading-normal
            text-4xl sm:text-6xl"
            >
              {metadata.title}
            </h1>
          </div>
          <div className="mt-3 sm:mt-10">
            <img
              title={metadata.title}
              alt={`${metadata.title} post image cover`}
              src={`/posts/${id}/cover.jpeg`}
            />
          </div>
        </section>

        <section className="mt-5 sm:mt-8">
          <p className="text-xl leading-loose my-2">{metadata.description}</p>
          <MDXRemote {...mdxSource} components={components} />
        </section>

        <div className="mt-3">
          <AuthorSection
            firstName="Kamil"
            lastName="Wilim"
            avatar="/authors/kamil-wilim.jpeg"
            createdDate={metadata.createdAt}
            updatedDate={metadata.updatedAt}
          />
        </div>
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

  // const markdownJson = marked.lexer(parsed.content);

  return {
    props: {
      id: parsed.data.id,
      slug,
      mdxSource,
      markdownContent: parsed.content,
      metadata: parsed.data,
      dynamicData,
    },
  };
};

export async function getStaticPaths() {
  const folderPath = path.resolve("./src/posts");

  const files = readdirSync(folderPath);
  const clean = files
    .map((file) => file.replace(".md", ""))
    .map((name) => `/blog/${name}`);

  return {
    paths: clean,
    fallback: false,
  };
}
