import Head from "next/head";

export interface HeadComponentProps {
  title: string;
  author?: string;
  description: string;
  keywords: string[];
  imageSource?: string;
}

const HeadComponent = (props: HeadComponentProps) => {
  return (
    <Head>
      <title>{props.title} | pierek.com</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords.toString()} />
      <meta name="author" content={props?.author ? props.author : "Pierek"} />
      <meta name="publisher" content="Pierek" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:site" content="@Pierek_com" />
      <meta property="twitter:creator" content="@Pierek_com" />
      <meta
        property="og:image"
        content={props?.imageSource ? props.imageSource : ""}
      />
      <meta
        property="og:image:alt"
        content={props?.imageSource ? props.description : ""}
      />
    </Head>
  );
};

export default HeadComponent;
