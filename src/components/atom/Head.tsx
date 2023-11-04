import Head from "next/head";

export interface HeadComponentProps {
  title: string;
  author?: string;
  description: string;
  keywords: string[];
}

const HeadComponent = (props: HeadComponentProps) => {
  return (
    <Head>
      <title>{props.title} | pierek.com</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords.toString()} />
      <meta name="author" content={props?.author ? props.author : "Pierek"} />
      <meta name="publisher" content="Pierek" />
    </Head>
  );
};

export default HeadComponent;
