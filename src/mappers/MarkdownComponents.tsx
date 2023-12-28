import { MDXComponents } from "mdx/types";
import {
  Header,
  Paragraph,
  YoutubeComponent,
  CodeComponent,
} from "../components/Typography";

const MarkdownComponents: MDXComponents = {
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  h2: ({ children }) => <Header level={2}>{children}</Header>,
  h3: ({ children }) => <Header level={3}>{children}</Header>,
  a: (props) => (
    <a href={props.href} target="_blank">
      <span>🔗</span>
      <span className="ml-1 underline">{props.children}</span>
    </a>
  ),

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

export default MarkdownComponents;
