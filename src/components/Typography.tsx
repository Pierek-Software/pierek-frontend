import React, { ReactNode } from "react";
import { slugify } from "../utils";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";

import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("bash", bash);

const headerTagToSize = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
};

export const Paragraph = ({ children }) => {
  return <p className="my-5 leading-relaxed">{children}</p>;
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
  const Tag: any = `h${level > 4 ? 4 : level}`;

  const BasicHeader = (
    <Tag
      id={slugify(children as string)}
      className={`${headerTagToSize[Tag]} font-medium leading-normal`}
    >
      {children}
    </Tag>
  );

  if (!linkable) {
    return BasicHeader;
  } else {
    return (
      <a title={children as string} href={"#" + slugify(children as string)}>
        <span className="flex items-center">{BasicHeader}</span>
      </a>
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
