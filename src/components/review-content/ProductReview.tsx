import { MDXRemote } from "next-mdx-remote";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { amazonLinkBuilder } from "../../utils";
import { Header } from "../Typography";
import { DetailedOpinions } from "./DetailedOpinion";

export function ProductReview({ productReview }) {
  return (
    <section className="space-y-5">
      <div>
        <div className="my-3">
          <Header level={2}>{productReview.title}</Header>
        </div>
        <img className="my-3" src={productReview.images[0]} />
        <div className="my-3">
          <p className="my-2 text-xl font-extralight">
            {productReview.caption}
          </p>

          <span className="m-auto">⭐⭐⭐⭐⭐</span>
        </div>
      </div>
      <div>
        <Header level={3}>Specifications</Header>
        <div className="flex flex-col lg:flex-row">
          {Object.entries(productReview.specifications).map(
            ([key, value], index) => {
              return (
                <p key={index} className="my-1 lg:mx-4">
                  <b>{key}</b>: {value as string}
                </p>
              );
            },
          )}
        </div>
      </div>
      <div>
        <div className="my-3">
          <Header linkable={false} level={4}>
            {`${productReview.title} Pricing`}
          </Header>
        </div>

        <a
          className="my-3"
          href={amazonLinkBuilder(productReview.stores.amazon.asin)}
          target="blank"
        >
          <button className=" w-full bg-orange-amazon px-4 py-2 font-bold">
            View at Amazon.com
          </button>
        </a>
      </div>
      <div className="float-right rounded-md md:max-w-xs">
        <DetailedOpinions productReview={productReview} />
      </div>
      <MDXRemote
        components={MarkdownComponents}
        {...productReview.reviewParsed}
      />
    </section>
  );
}
