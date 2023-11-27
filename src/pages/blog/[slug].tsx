import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import Breadcrumbs from "../../components/atom/Breadcrumbs";
import AuthorSection from "../../components/atom/AuthorSection";
import HeadComponent from "../../components/atom/Head";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import SyntaxHighlighter from "react-syntax-highlighter";

function code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      className="my-5"
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={...className} {...props} />
  );
}

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  metadata: any;
  dynamicData: any;
  slug: string;
  id: number;
}

export default function RemoteMdxPage({ id, mdxSource, metadata }: Props) {
  return (
    <>
      <HeadComponent
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        author={"Kamil Wilim"}
      />
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
          <MDXRemote
            {...mdxSource}
            components={{ ...MarkdownComponents, code }}
          />
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
