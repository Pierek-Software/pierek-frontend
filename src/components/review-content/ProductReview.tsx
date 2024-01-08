import { MDXRemote } from "next-mdx-remote";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { amazonLinkBuilder } from "../../utils";
import { Header } from "../Typography";
import { DetailedOpinions } from "./DetailedOpinion";

export function ProductReview({
  caption,
  product,
  markdown,
  advantages,
  disadvantages,
}) {
  const title = `${product.brand.name} ${product.name}`;

  return (
    <section className="space-y-5">
      <div>
        <div className="my-3">
          <Header level={2}>{title}</Header>
        </div>
        <img className="my-3" src={product.images[0]} />
        <div className="my-3">
          <p className="my-2 text-xl font-extralight">{caption}</p>
        </div>
      </div>
      <div>
        <Header level={3}>Specifications</Header>
        <div className="flex flex-col lg:flex-row">
          {Object.entries(product.specifications).map(([key, value], index) => {
            return (
              <p key={index} className="my-1 lg:mx-4">
                <b>{key}</b>: {value as string}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        <div className="my-3">
          <Header linkable={false} level={4}>
            {`${title} Pricing`}
          </Header>
        </div>

        <a
          className="my-3"
          href={amazonLinkBuilder(product.asin)}
          target="blank"
        >
          <button className=" w-full bg-orange-amazon px-4 py-2 font-bold">
            View at Amazon.com
          </button>
        </a>
      </div>
      <div className="float-right rounded-md md:max-w-xs">
        <DetailedOpinions
          brand={product.brand}
          advantages={advantages}
          disadvantages={disadvantages}
        />
      </div>
      <MDXRemote components={MarkdownComponents} {...markdown} />
    </section>
  );
}
