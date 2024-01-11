import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { MDXRemote } from "next-mdx-remote";
import Dictionary from "../../components/atom/Dictionary";
import { ProductReview } from "../../components/review-content/ProductReview";
import QuickListSection from "../../components/QuickList";
import ApiClient from "../../api";
import { slugify } from "../../utils";
import { useRouter } from "next/router";
import ClientLayout from "../../layouts/ClientLayout";

export default function RemoteMdxPage({ page }) {
  const router = useRouter();

  return (
    <ClientLayout
      path={router.asPath}
      title={page.title}
      description={page.description}
      keywords={page.dictionary}
      breadcrumbs={[
        { name: "Home Page", value: "/" },
        { name: "Reviews", value: "/reviews" },
        { name: page.title, value: "#" },
      ]}
    >
      <div>
        <h1 className="text-3xl font-bold leading-snug">{page.title}</h1>
        <p className="mt-2">{`By ${page.author.first_name} ${page.author.last_name}`}</p>
      </div>

      <img className="border-r-2 border-t-2 border-primary" src={page.image} />

      <section className="flex w-20 justify-between">
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`}
        >
          <img className="h-8 w-8" src="/icons/facebook.svg" />
        </a>

        <a
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${page.title}&url=${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`}
        >
          <img className="h-8 w-8" src="/icons/twitter.svg" />
        </a>
      </section>

      <div className="rounded-md md:float-right md:m-0">
        <Dictionary
          dictionaryItem={page.dictionary.map((name) => {
            return { name, value: slugify(name) };
          })}
        />
      </div>

      {page.content.map((contentBlock, index) => {
        switch (contentBlock.type) {
          case "markdown":
            return (
              <div key={index}>
                <MDXRemote
                  {...contentBlock.value}
                  components={MarkdownComponents}
                />
              </div>
            );

          case "quick_list":
            return (
              <div key={index}>
                <QuickListSection {...contentBlock} />
              </div>
            );

          case "product_review":
            return (
              <div key={index}>
                <ProductReview {...contentBlock.value} />
              </div>
            );
        }
      })}
    </ClientLayout>
  );
}

export const getStaticPaths = (async () => {
  const apiClient = new ApiClient();
  const paths = await apiClient.getPagesStaticPaths();
  return { ...paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = async (context) => {
  const apiClient = new ApiClient();

  const page = await apiClient.getPage(context.params.slug as string);

  const promises = page.content.map(async (contentBlock) => {
    if (contentBlock.type === "markdown") {
      return {
        ...contentBlock,
        value: await serialize(contentBlock.value as any),
      };
    }

    if (contentBlock.type === "product_review") {
      return {
        ...contentBlock,
        value: {
          ...contentBlock.value,
          markdown: await serialize(contentBlock.value.markdown),
          title: `${contentBlock.value.product.brand.name} ${contentBlock.value.product.name}`,
        },
      };
    }
    return contentBlock;
  });

  page.content = (await Promise.all(promises)) as any;

  const dictionary = [];
  page.content.map((contentBlock) => {
    if (contentBlock.type === "quick_list") {
      return dictionary.push("Quick List");
    }
    if (contentBlock.type === "product_review") {
      return dictionary.push(contentBlock.value.title);
    }
  });

  page.dictionary = dictionary;

  return {
    props: {
      page,
    },
  };
};
