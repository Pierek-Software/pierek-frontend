import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { GetStaticProps } from "next";
import {
  DictionaryLink,
  Header,
  MarkdownComponents,
  Paragraph,
} from "../../components/Typography";
import ApiClient from "../../api";
import Image from "next/image";
import ClientLayout from "../../layouts/ClientLayout";
import { isoDateToRRRRMMDD } from "../../utils";
import { Link } from "../../components/Link";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  dictionary: string;
  post: any;
}

export default function RemoteMdxPage({ post, mdxSource, dictionary }: Props) {
  const imageSource = `${process.env.NEXT_PUBLIC_CDN_URL}/posts/${post.id}/cover.jpg`;
  const author = `${post.author.first_name} ${post.author.last_name}`;

  return (
    <>
      <ClientLayout
        title={post.title}
        description={post.description}
        keywords={post.categories}
        breadcrumbs={[
          { name: "Home Page", link: "/" },
          { name: "Blog", link: "/blog" },
          { name: post.title, link: "#" },
        ]}
        author={author}
        structuredDataJSON={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          image: imageSource,
          editor: author,
          keywords: post.categories,
          publisher: process.env.NEXT_PUBLIC_TITLE,
          datePublished: post.created_at,
          dateCreated: post.created_at,
          dateModified: post.updated_at,
          description: post.description,
          author: {
            "@type": "Person",
            name: post.author.first_name,
            familyName: post.author.last_name,
          },
        }}
      >
        <div className="md:flex md:space-x-3">
          <p className="text-sm text-gray-700">
            Created: {isoDateToRRRRMMDD(post.created_at)}
          </p>
          <p className="text-sm text-gray-700">
            Updated: {isoDateToRRRRMMDD(post.updated_at)}
          </p>
        </div>

        <h1
          className="
            text-2xl font-bold
            leading-normal sm:text-5xl sm:leading-snug"
        >
          {post.title}
        </h1>

        <Image
          title={post.title}
          alt={`${post.title} post image cover`}
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/posts/${post.id}/cover.jpg`}
          width={1920}
          height={1080}
          priority={true}
        />

        <section className="lg:flex lg:justify-start">
          <Sidebar dictionary={dictionary} post={post} />
          <div className="space-y-5">
            <p className="text-lg leading-loose">{post.description}</p>
            <MDXRemote {...mdxSource} components={MarkdownComponents} />
          </div>
        </section>
        <Header level={2}>You may also like</Header>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {post.recommendations.map((recommendation) => {
            return (
              <RecommendedBlogPostCard
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
      </ClientLayout>
    </>
  );
}

export const getStaticPaths = async () => {
  const apiClient = new ApiClient();
  const posts = await apiClient.getPostsList();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params?.slug !== "string") {
    throw new Error("No slug");
  }

  const apiClient = new ApiClient();

  const [post, postRecommendations] = await Promise.all([
    await apiClient.getPost(params.slug),
    await apiClient.getPostRecommendations(params.slug),
  ]);

  const mdxSource = await serialize(post.markdown);

  const dictionary = extractHeaders(post.markdown);

  return {
    props: {
      post: { ...post, recommendations: postRecommendations },
      mdxSource,
      dictionary,
    },
    revalidate: 3600 * 8,
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

function Sidebar({ post, dictionary }) {
  return (
    <div className="lg:sticky lg:start-0 lg:top-0 lg:max-h-screen lg:min-w-64  lg:text-balance lg:pr-10">
      <AuthorSection
        firstName={post.author.first_name}
        lastName={post.author.last_name}
        avatar={post.author.avatar}
        description={post.author.description}
      />
      <Dictionary dictionary={dictionary} />
    </div>
  );
}

const Dictionary = (props) => {
  return (
    <nav className="flex flex-col">
      <Header linkable={false} level={2}>
        Dictionary 📖
      </Header>
      <div className="flex flex-col lg:max-h-40 lg:overflow-y-scroll">
        {props.dictionary.map((header, index) => {
          if (header.level === 2) {
            return (
              <DictionaryLink className="my-1 hover:underline" key={index}>
                {header.text}
              </DictionaryLink>
            );
          }
        })}
      </div>
    </nav>
  );
};

const AuthorSection = ({ avatar, firstName, lastName, description }) => {
  return (
    <div className="">
      <Header level={2} linkable={false}>
        Author ✍️
      </Header>
      <div className="flex items-center">
        <a href="/authors/kamil-wilim">
          <img
            src={avatar}
            alt={`${firstName} ${lastName}`}
            className="h-12 w-12 rounded-full hover:border-4 hover:border-gray-700"
          />
        </a>
        <div className="ml-4">
          <a href="/authors/kamil-wilim">
            <h2 className="text-xl font-semibold hover:underline">{`${firstName} ${lastName}`}</h2>
          </a>
          <a href="/authors">
            <p className="text-sm text-gray-700 hover:underline">Author</p>
          </a>
        </div>
      </div>

      <div className="mt-4">
        <div className="my-3 text-justify">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export interface BlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  id: number;
  createdAt: string;
  imagePriority: boolean;
}

export function RecommendedBlogPostCard({
  title,
  description,
  slug,
  id,
  imagePriority,
}: BlogPostCardProps) {
  return (
    <Link href={"/blog" + "/" + slug}>
      <div className=" space-y-3 lg:max-w-xl">
        <Image
          priority={imagePriority}
          width={1920}
          height={1080}
          src={
            process.env.NEXT_PUBLIC_CDN_URL +
            "/posts" +
            "/" +
            id +
            "/" +
            "cover.jpg"
          }
          alt="Blog Post Image"
          className="w-full rounded"
        />
        <h3 className="text-lg font-bold">{title}</h3>
        <Paragraph className="text-justify text-base text-gray-700">
          {description}
        </Paragraph>
      </div>
    </Link>
  );
}
