import { Header, Paragraph } from "./Typography";

export const products: ProductProps[] = [
  {
    id: 0,
    title: `Lenovo Legion Pro 7i Gen 8 16" Gaming Laptop`,
    description:
      "Introducing the latest innovation in mobile technology, the all-new iPhone Quantum! Packed with cutting-edge features and a sleek design, this device is set to redefine your smartphone experience.",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61I-7jTKrKL._AC_SL1488_.jpg",
    advantages: [
      "Revolutionary Quantum Display is really good",
      "Ultra-Fast Quantum Processor is faster than previous",
      "Advanced Quantum Camera System make better pictures",
    ],
    disadvantages: [
      "Limited Quantum App Ecosystem need time to develop",
      "Premium Price Tag as every iPhone",
      "Non-expandable Quantum Storage is just bad",
    ],
  },
  {
    id: 1,
    title: "IPhone 14 Pro",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61l9ppRIiqL._FMwebp__.jpg",
    description:
      "Introducing the latest innovation in mobile technology, the all-new iPhone Quantum! Packed with cutting-edge features and a sleek design, this device is set to redefine your smartphone experience.",
    advantages: [
      "Revolutionary Quantum Display is really good",
      "Ultra-Fast Quantum Processor is faster than previous",
      "Advanced Quantum Camera System make better pictures",
    ],
    disadvantages: [
      "Limited Quantum App Ecosystem need time to develop",
      "Premium Price Tag as every iPhone",
      "Non-expandable Quantum Storage is just bad",
    ],
  },
  {
    id: 2,
    title: "IPhone 14 Pro Max",
    description:
      "Introducing the latest innovation in mobile technology, the all-new iPhone Quantum! Packed with cutting-edge features and a sleek design, this device is set to redefine your smartphone experience.",

    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61l9ppRIiqL._FMwebp__.jpg",
    advantages: [
      "Revolutionary Quantum Display is really good",
      "Ultra-Fast Quantum Processor is faster than previous",
      "Advanced Quantum Camera System make better pictures",
    ],
    disadvantages: [
      "Limited Quantum App Ecosystem need time to develop",
      "Premium Price Tag as every iPhone",
      "Non-expandable Quantum Storage is just bad",
    ],
  },
];

export interface ProductProps {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
}

const ProductIndexToTrophy = {
  "0": "🥇",
  "1": "🥈",
  "2": "🥉",
};

function Product(props: ProductProps) {
  return (
    <div className="my-5 rounded-md">
      <Header linkable={false} level={3}>
        {`${props.title} ${
          props.id <= 2 ? ProductIndexToTrophy[props.id] : ""
        }`}
      </Header>
      <div className="mx-auto my-5 max-w-md">
        <img src={props.imageUrl} />
      </div>

      <div className="my-5 flex justify-center align-middle">
        <Header linkable={false} level={4}>
          {`${props.title} Description`}
        </Header>
      </div>

      <div className="my-5">⭐⭐⭐⭐⭐</div>

      <div className="my-5 text-justify">
        <Paragraph>{props.description}</Paragraph>
      </div>

      <div className="my-5 flex justify-center align-middle">
        <Header linkable={false} level={4}>
          {`${props.title} Pros & Cons`}
        </Header>
      </div>
      <div className="flex flex-col text-left">
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md">
          {props.advantages.map((advantage, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span>✅</span>
                <span className="ml-2">{`${advantage}`}</span>
              </p>
            );
          })}
        </div>
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md">
          {props.disadvantages.map((disadvantage, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span>❌</span>
                <span className="ml-2">{disadvantage}</span>
              </p>
            );
          })}
        </div>
      </div>

      <div className="my-5">
        <Header linkable={false} level={4}>
          {`${props.title} Pricing`}
        </Header>
      </div>

      <a href="https://google.pl" target="blank">
        <button className="bg-orange-amazon w-full max-w-md px-4 py-2 font-bold">
          View at Amazon.com
        </button>
      </a>
    </div>
  );
}

const ProductComparison = () => {
  return (
    <>
      <div className="flex flex-col justify-between text-center md:space-x-8 lg:flex-row">
        {products.map((product) => {
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
