import Head from "next/head";

export interface HeadComponentProps {
  title: string;
  author?: string;
  description: string;
  keywords?: string[];
  imageSource?: string;
  path?: string;
}

const TwitterTags = (props: {
  title: string;
  description: string;
  imageSource?: string;
}) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:site"
        content={`@${process.env.NEXT_PUBLIC_TWITTER_USER}`}
      />
      <meta
        name="twitter:creator"
        content={`@${process.env.NEXT_PUBLIC_TWITTER_USER}`}
      />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta
        name="twitter:image"
        content={props?.imageSource ? props.imageSource : ""}
      />
    </>
  );
};

const HeadComponent = (props: HeadComponentProps) => {
  const title = `${props.title} | YourNextLaptop.com`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props?.keywords?.toString() || ""} />
      <meta
        name="author"
        content={props?.author ? props.author : "YourNextLaptop.com"}
      />
      <meta name="publisher" content="YourNextLaptop" />

      <meta name="robots" content="index follow" />

      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}${props.path}`}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={props?.imageSource ? props.imageSource : ""}
      />

      <TwitterTags {...props} />
    </Head>
  );
};

export default HeadComponent;
