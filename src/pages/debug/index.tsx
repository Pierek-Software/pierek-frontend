import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

import Breadcrumbs from "../../components/atom/Breadcrumbs";
import AuthorSection from "../../components/atom/AuthorSection";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { DictionaryLink, Header } from "../../components/Typography";
import BlogPostCard from "../../components/atom/BlogPostCard";
import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function RemoteMdxPage() {
  const [mdxSource, setMdxSource] = useState(undefined);
  const [dictionary, setDictionary] = useState(undefined);
  const [post, setPost] = useState({
    id: 1,
    markdown: `My favorite search engine is [Duck Duck Go](https://duckduckgo.com).`,
    recommendations: [],
    description: "Description",
    created_at: new Date(),
    updated_at: new Date(),
    title: "Title",
    author: {
      first_name: "Kamil",
      last_name: "Wilim",
      description: "Description",
      avatar: "/authors/kamil-wilim.jpeg",
    },
  });

  async function createMDXSource() {
    const mdx = await serialize(post.markdown, {
      mdxOptions: { development: true },
    });
    setMdxSource(mdx);
  }

  function handleMarkdownChange(event) {
    setPost({ ...post, markdown: event.target.value });
    createMDXSource();
  }

  useEffect(() => {
    createMDXSource();
    setDictionary(extractHeaders(post.markdown));
  }, [post]);

  return (
    <>
      <Navbar background={true} wave={false} />
      <Breadcrumbs
        breadcrumbs={[
          { name: "Home Page", link: "/" },
          { name: "Blog", link: "/blog" },
          { name: post.title, link: "#" },
        ]}
      />
      <main className="container">
        <section className="mt-5">
          <div className="">
            <h1
              className="
            text-4xl font-extrabold
            leading-normal sm:text-6xl"
            >
              {post.title}
            </h1>
          </div>
          <div className="mt-3 sm:mt-10">
            <Image
              title={post.title}
              alt={`${post.title} post image cover`}
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/posts/${post.id}/cover.jpg`}
              width={1920}
              height={1080}
              priority={true}
            />
          </div>
        </section>

        <section className="mt-5 sm:mt-8">
          <section className="md:flex md:items-stretch md:justify-between">
            <div className="my-3 md:mx-3 md:w-2/5 lg:w-1/4">
              {dictionary ? (
                <Dictionary dictionary={dictionary} />
              ) : (
                "Loading..."
              )}
            </div>
            <div className="my-3 md:mx-3 md:w-2/5 lg:w-1/4">
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
                <section className=" flex h-full w-full  items-center justify-center rounded bg-gradient-to-b from-slate-700 to-slate-950 p-5 text-center hover:cursor-pointer hover:from-slate-600 hover:to-slate-950">
                  <h3 className="text-2xl font-bold text-white md:text-xl lg:text-4xl">
                    Get best Node.js Developers{" "}
                    <span className="underline">Contact us</span>
                  </h3>
                </section>
              </a>
            </div>
          </section>
          <p className="my-2 text-xl leading-loose">{post.description}</p>
          {mdxSource ? (
            <MDXRemote {...mdxSource} components={MarkdownComponents} />
          ) : (
            "Loading..."
          )}
        </section>

        <section>
          <Header level={2}>You may also like</Header>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {post.recommendations.map((recommendation) => {
              return (
                <BlogPostCard
                  imagePriority={false}
                  key={recommendation.id}
                  id={recommendation.id}
                  slug={recommendation.slug}
                  title={recommendation.title}
                  description={recommendation.description}
                  createdAt={recommendation.created_at}
                />
              );
            })}
          </div>
        </section>

        <div>
          <textarea
            className="h-44 min-w-full border-2 p-5"
            value={post.markdown}
            onChange={(event) => handleMarkdownChange(event)}
          ></textarea>
        </div>
      </main>

      <Footer />
    </>
  );
}

export function extractHeaders(
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
