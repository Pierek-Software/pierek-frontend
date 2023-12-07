import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

import { GetServerSideProps, GetStaticProps } from "next";
import Breadcrumbs from "../../components/atom/Breadcrumbs";
import AuthorSection from "../../components/atom/AuthorSection";
import HeadComponent from "../../components/atom/Head";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import SyntaxHighlighter from "react-syntax-highlighter";
import { DictionaryLink, Header } from "../../components/Typography";
import ApiClient from "../../api";

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
  dictionary: string;
  post: any;
}

const Dictionary = (props) => {
  return (
    <nav className="flex flex-col">
      <Header linkable={false} level={2}>
        Dictionary 📖
      </Header>
      {props.dictionary.map((header, index) => {
        if (header.level === 2) {
          return (
            <DictionaryLink className="my-1 hover:underline" key={index}>
              {header.text}
            </DictionaryLink>
          );
        }
      })}
    </nav>
  );
};

export default function RemoteMdxPage({ post, mdxSource, dictionary }: Props) {
  return (
    <>
      <HeadComponent
        title={post.title}
        description={post.description}
        keywords={post.categories}
        author={post.author.first_name + post.author.last_name}
      />
      <Navbar background={true} wave={false} />
      <Breadcrumbs
        breadcrumbs={[
          { name: "Home Page", link: "/" },
          { name: "Blog", link: "/blog" },
          { name: post.title, link: "#" },
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
              {post.title}
            </h1>
          </div>
          <div className="mt-3 sm:mt-10">
            <img
              title={post.title}
              alt={`${post.title} post image cover`}
              src={`/posts/${post.id}/cover.jpg`}
            />
          </div>
        </section>

        <section className="mt-5 sm:mt-8">
          <section className="md:flex md:justify-between md:items-stretch">
            <div className="my-3 md:w-2/5 lg:w-1/4 md:mx-3">
              <Dictionary dictionary={dictionary} />
            </div>
            <div className="my-3 md:w-2/5 lg:w-1/4 md:mx-3">
              <AuthorSection
                firstName={post.author.first_name}
                lastName={post.author.last_name}
                avatar={post.author.avatar}
                description={post.author.description}
                createdDate={post.created_at}
                updatedDate={post.updated_at}
              />
            </div>
            <div className="my-3 md:my-0 md:w-1/5 lg:w-2/4">
              <a href="/contact">
                <section className=" w-full h-full items-center  flex justify-center text-center bg-gradient-to-b from-slate-700 to-slate-950 hover:from-slate-600 hover:to-slate-950 hover:cursor-pointer p-5 rounded">
                  <h3 className="text-2xl md:text-xl lg:text-4xl font-bold text-white">
                    Get best Node.js Developers{" "}
                    <span className="underline">Contact us</span>
                  </h3>
                </section>
              </a>
            </div>
          </section>
          <p className="text-xl leading-loose my-2">{post.description}</p>
          <MDXRemote
            {...mdxSource}
            components={{ ...MarkdownComponents, code }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug || typeof params?.slug !== "string") {
    throw new Error("No slug");
  }

  const apiClient = new ApiClient();

  const post = await apiClient.getPost(params.slug);

  const mdxSource = await serialize(post.markdown);

  const dictionary = extractHeaders(post.markdown);

  return {
    props: {
      post,
      mdxSource,
      dictionary,
    },
  };
};

function extractHeaders(
  markdownText: string,
): { level: number; text: string }[] {
  const regex = /^(#{1,6})\s+(.+)$/gm;
  const matches = markdownText.matchAll(regex);

  const headers: { level: number; text: string }[] = [];

  for (const match of matches) {
    const level = match[1].length;
    const text = match[2].trim();
    headers.push({ level, text });
  }

  return headers;
}
