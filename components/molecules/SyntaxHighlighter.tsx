"use client";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("typescript", ts);

export default function SyntaxHighlighterComponent({ code }) {
  return <SyntaxHighlighter style={docco}>{code}</SyntaxHighlighter>;
}
