import Head from "next/head";
import { useRouter } from "next/router";

export interface HeadComponentProps {
  title: string;
  author?: string;
  description: string;
  keywords?: string[];
  imageSource?: string;
  path?: string;
  structuredDataJSON?: object;
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
  const router = useRouter();
  const cleanPath = router.asPath?.split("#")[0]?.split("?")[0];
  const canonicalUrl = `${process.env.NEXT_PUBLIC_DOMAIN}${cleanPath}`;

  const structuredDataJSON = {
    ...props.structuredDataJSON,
    url: canonicalUrl,
  } as any;

  delete structuredDataJSON.keywords;

  const title = `${props.title} | ${process.env.NEXT_PUBLIC_TITLE}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props?.keywords?.toString() || ""} />
      <meta
        name="author"
        content={props?.author ? props.author : process.env.NEXT_PUBLIC_TITLE}
      />
      <meta name="publisher" content={process.env.NEXT_PUBLIC_TITLE} />

      <meta name="robots" content="index follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={props?.imageSource ? props.imageSource : ""}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataJSON),
        }}
        key="item-jsonld"
      />

      <TwitterTags {...props} />
    </Head>
  );
};

export default HeadComponent;
