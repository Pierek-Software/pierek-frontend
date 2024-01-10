import { amazonLinkBuilder } from "../utils";
import { Header, Paragraph } from "./Typography";

const ProductIndexToTrophy = {
  "0": "🥇",
  "1": "🥈",
  "2": "🥉",
};

function Product({
  advantages,
  disadvantages,
  description,
  product,
  brand,
  id,
}) {
  const title = `${product.brand.name} ${product.name}`;

  return (
    <div className="space-y-5 rounded-md">
      <Header linkable={false} level={3}>
        {`${title} ${id <= 2 ? ProductIndexToTrophy[id] : ""}`}
      </Header>
      <img className="mx-auto h-48 object-contain" src={product.main_image} />

      <div className="flex justify-center align-middle">
        <Header linkable={false} level={4}>
          {`${title} Description`}
        </Header>
      </div>

      <div className="text-justify">
        <Paragraph>{description}</Paragraph>
      </div>

      <div className="flex justify-center align-middle">
        <Header linkable={false} level={4}>
          {`${title} Pros & Cons`}
        </Header>
      </div>
      <div className="flex flex-col text-left">
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md">
          {advantages.map((advantage, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span>✅</span>
                <span className="ml-2">{`${advantage}`}</span>
              </p>
            );
          })}
        </div>
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md">
          {disadvantages.map((disadvantage, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span>❌</span>
                <span className="ml-2">{disadvantage}</span>
              </p>
            );
          })}
        </div>
      </div>

      <div>
        <div>
          <Header linkable={false} level={4}>
            {`${title} Pricing`}
          </Header>
        </div>

        <div className="my-3">
          <a href={amazonLinkBuilder(product.asin)} target="blank">
            <button className="w-full max-w-md bg-primary px-4 py-2 font-bold">
              View at Amazon.com
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export const QuickList = ({ content }) => {
  return (
    <>
      <div className="flex flex-col text-center md:space-x-8 lg:flex-row">
        {content.map((quickListItem, index) => {
          return (
            <div key={index}>
              <Product {...quickListItem} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const QuickListSection = (props) => {
  return (
    <div>
      <div className="my-5">
        <Header level={2}>{props.name || "Quick List"}</Header>
      </div>
      <QuickList content={props.value} />
    </div>
  );
};

export default QuickListSection;
