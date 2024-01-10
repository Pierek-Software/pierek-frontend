import { MDXRemote } from "next-mdx-remote";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { amazonLinkBuilder } from "../../utils";
import { Header } from "../Typography";
import { DetailedOpinions } from "./DetailedOpinion";
import ProductSpecificationsSection from "../sections/product/Specifications";

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
      <ProductSpecificationsSection specifications={product.specifications} />
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
          <button className=" w-full bg-primary px-4 py-2 font-bold">
            View at Amazon.com
          </button>
        </a>
      </div>
      <div className="rounded-md md:float-right md:max-w-xs">
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
