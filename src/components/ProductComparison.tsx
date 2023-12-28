import { Header, Paragraph } from "./Typography";

const products: ProductProps[] = [
  {
    id: 0,
    title: "IPhone 14",
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
  {
    id: 3,
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
  {
    id: 4,
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
  console.log(props.id);
  return (
    <div className="rounded-md">
      <Header linkable={false} level={2}>
        {`${props.title} ${
          props.id <= 2 ? ProductIndexToTrophy[props.id] : ""
        }`}
      </Header>
      <div className="mx-auto max-w-md">
        <img src={props.imageUrl} />
      </div>

      <div className="flex justify-center align-middle lg:h-24">
        <Header linkable={false} level={3}>
          {`${props.title} Description`}
        </Header>
      </div>

      <div className="text-justify">
        <Paragraph>{props.description}</Paragraph>
      </div>

      <div className="flex justify-center align-middle lg:h-28">
        <Header linkable={false} level={3}>
          {`${props.title} Pros & Cons`}
        </Header>
      </div>
      <div className="flex text-left">
        <div className="m-1 flex flex-col items-stretch justify-stretch rounded-md bg-green-300 p-3">
          {props.advantages.map((advantage, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span className="mr-1">✅</span>
                {advantage}
              </p>
            );
          })}
        </div>
        <div className="m-1 flex flex-col items-stretch justify-stretch rounded-md bg-red-300 p-3">
          {props.disadvantages.map((disadvantage, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span className="mr-1">❌</span>
                {disadvantage}
              </p>
            );
          })}
        </div>
      </div>

      <Header linkable={false} level={3}>
        {`${props.title} Pricing`}
      </Header>

      <a href="https://google.pl" target="blank">
        <button className="h-16 w-full rounded bg-orange-400 px-4 py-2 font-bold">
          Check {props.title} Amazon Price
        </button>
      </a>
    </div>
  );
}

const ProductComparison = () => {
  return (
    <>
      <div className="flex flex-col justify-between text-center lg:flex-row lg:overflow-x-auto">
        {products.map((product) => {
          return (
            <div key={product.id} className="mx-3">
              <Product {...product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductComparison;
