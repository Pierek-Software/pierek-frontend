import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { MDXRemote } from "next-mdx-remote";
import Dictionary from "../../components/atom/Dictionary";
import { ProductReview } from "../../components/review-content/ProductReview";
import QuickListSection from "../../components/QuickList";
import ApiClient from "../../api";

export default function RemoteMdxPage({ page }) {
  return (
    <>
      <Navbar background={true} wave={false} />

      <main className="container mt-5 space-y-5">
        <div>
          <h1 className="text-3xl font-bold leading-snug">{page.title}</h1>
          <p className="mt-2">{`By ${page.author.first_name} ${page.author.last_name}`}</p>
        </div>

        <img
          className="border-r-2 border-t-2 border-orange-amazon"
          src={page.image}
        />

        <section className="flex w-20 justify-between">
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.pcgamer.com/best-gaming-laptop/"
          >
            <img className="h-8 w-8" src="/icons/facebook.svg" />
          </a>

          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?text=Best%20gaming%20laptops%20in%202023%3A%20I%27ve%20had%20my%20pick%20of%20portable%20powerhouses%20and%20these%20are%20the%20best&url=https://www.pcgamer.com/best-gaming-laptop/"
          >
            <img className="h-8 w-8" src="/icons/twitter.svg" />
          </a>
        </section>

        <div className="rounded-md md:float-right md:m-0">
          <Dictionary paragraphs={page.dictionary} />
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
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slug: "best-gaming-laptops",
        },
      },
      {
        params: {
          slug: "test-slug",
        },
      },
      {
        params: {
          slug: "slug-test-3",
        },
      },
    ],
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = async (context) => {
  const apiClient = new ApiClient();

  const page = await apiClient.getPage(context.params.slug);

  console.log("page", page);

  const promises = page.content.map(async (contentBlock) => {
    if (contentBlock.type === "markdown") {
      return {
        ...contentBlock,
        value: await serialize(contentBlock.value as any),
      };
    }

    if (contentBlock.type === "product_review") {
      console.log(contentBlock);
      return {
        ...contentBlock,
        value: {
          ...contentBlock.value,
          markdown: await serialize(contentBlock.value.markdown),
          title: `${contentBlock.value.brand} ${contentBlock.value.model}`,
        },
      };
    }
    return contentBlock;
  });

  page.content = (await Promise.all(promises)) as any;

  return {
    props: {
      page,
    },
  };
};
