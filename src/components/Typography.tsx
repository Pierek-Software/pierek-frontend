import React, { ReactNode } from "react";
import { slugify } from "../utils";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";

import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash";
import { Link } from "./Link";
import { MDXComponents } from "mdx/types";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("bash", bash);

export const MarkdownComponents: MDXComponents = {
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  h2: ({ children }) => <Header level={2}>{children}</Header>,
  h3: ({ children }) => <Header level={3}>{children}</Header>,
  Youtube: (props) => <YoutubeComponent {...props} />,
  img: (props) => (
    <img
      className="m-auto my-3"
      alt={props.alt}
      src={props.src.replace("../../public", "")}
    />
  ),
  code: CodeComponent,
};

export const DEFAULT_PARAGRAPH = "text-lg leading-loose";

export const Paragraph = ({ children, className = DEFAULT_PARAGRAPH }) => {
  return <p className={className}>{children}</p>;
};

export const Header = ({
  children,
  level,
  linkable = true,
}: {
  children: ReactNode;
  level: number;
  linkable?: boolean;
}) => {
  const Tag: any = `h${level > 3 ? 3 : level}`;

  const BasicHeader = (
    <Tag
      id={slugify(children as string)}
      className={`${headerTagToSize[Tag]} font-semibold leading-relaxed text-gray-900`}
    >
      {children}
    </Tag>
  );

  if (!linkable) {
    return BasicHeader;
  } else {
    return (
      <span className="flex items-center">
        <Link href={"#" + slugify(children as string)}>{BasicHeader}</Link>
        <span className="ml-2 text-lg">🔗</span>
      </span>
    );
  }
};

export const DictionaryLink = ({ children, className }) => {
  return (
    <a
      className={className}
      title={children as string}
      href={"#" + slugify(children as string)}
    >
      {children}
    </a>
  );
};

export const YoutubeComponent = (props: { videoId: string }) => {
  return (
    <iframe
      className="my-5"
      style={{ width: "100%", aspectRatio: "16/9" }}
      src={`https://www.youtube.com/embed/${props.videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    ></iframe>
  );
};

export function CodeComponent({ className, children }) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      children={children}
      style={docco}
      className="my-5"
      language={match[1]}
      wrapLines={true}
      wrapLongLines={true}
      PreTag="div"
    />
  ) : (
    <code className={className}>{children}</code>
  );
}

const headerTagToSize = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
};
