import Head from "next/head";

export interface HeadComponentProps {
  title: string;
  author?: string;
  description: string;
  keywords: string[];
  imageSource?: string;
}

const HeadComponent = (props: HeadComponentProps) => {
  const title = `${props.title} | pierek.com`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords.toString()} />
      <meta name="author" content={props?.author ? props.author : "Pierek"} />
      <meta name="publisher" content="Pierek" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta
        property="twitter:site"
        content={`@${process.env.NEXT_PUBLIC_TWITTER_USER}`}
      />
      <meta
        property="twitter:site:id"
        content={process.env.NEXT_PUBLIC_TWITTER_ID}
      />
      <meta
        property="twitter:creator"
        content={`@${process.env.NEXT_PUBLIC_TWITTER_USER}`}
      />

      <meta
        property="twitter:creator:id"
        content={process.env.NEXT_PUBLIC_TWITTER_ID}
      />
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
