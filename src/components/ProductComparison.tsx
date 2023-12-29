import { Header, Paragraph } from "./Typography";

const ProductIndexToTrophy = {
  "0": "🥇",
  "1": "🥈",
  "2": "🥉",
};

function Product(props) {
  return (
    <div className="space-y-5 rounded-md">
      <Header linkable={false} level={3}>
        {`${props.title} ${
          props.id <= 2 ? ProductIndexToTrophy[props.id] : ""
        }`}
      </Header>
      <img className="mx-auto h-48 object-contain" src={props.mainImage} />

      <div>⭐⭐⭐⭐⭐</div>

      <div className="flex justify-center align-middle">
        <Header linkable={false} level={4}>
          {`${props.title} Description`}
        </Header>
      </div>

      <div className="text-justify">
        <Paragraph>{props.shortDescription}</Paragraph>
      </div>

      <div className="flex justify-center align-middle">
        <Header linkable={false} level={4}>
          {`${props.title} Pros & Cons`}
        </Header>
      </div>
      <div className="flex flex-col text-left">
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md">
          {props.opinions.advantages.short.map((advantage, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span>✅</span>
                <span className="ml-2">{`${advantage}`}</span>
              </p>
            );
          })}
        </div>
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md">
          {props.opinions.disadvantages.short.map((disadvantage, index) => {
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
            {`${props.title} Pricing`}
          </Header>
        </div>

        <div className="my-3">
          <a href="https://google.pl" target="blank">
            <button className="w-full max-w-md bg-orange-amazon px-4 py-2 font-bold">
              View at Amazon.com
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

const ProductComparison = ({ productReviews }) => {
  return (
    <>
      <div className="flex flex-col justify-between text-center md:space-x-8 lg:flex-row">
        {productReviews.map((product) => {
          return (
            <div key={product.id}>
              <Product {...product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductComparison;
