import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

import { Header } from "../../components/Typography";
import ProductComparison from "../../components/QuickList";
import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { MDXRemote } from "next-mdx-remote";
import Dictionary from "../../components/atom/Dictionary";
import products from "../../components/review-content/products";
import { ProductReview } from "../../components/review-content/ProductReview";

export default function RemoteMdxPage({ page }) {
  return (
    <>
      <Navbar background={true} wave={false} />

      <main className="container">
        <h1 className="my-4 text-3xl font-bold leading-snug">{page.title}</h1>
        <p className="mt-2">{`By ${page.author.first_name} ${page.author.last_name}`}</p>

        <img
          className="my-4 border-r-2 border-t-2 border-orange-amazon"
          src={page.image}
        />

        <section className="my-5 flex w-20 justify-between">
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

        <section className="my-5">
          <div className="float-right rounded-md">
            <Dictionary
              paragraphs={[
                "Hello",
                "Test",
                "Best Gaming Laptop 15 inch",
                "Best Gaming Laptop 15 inch Best Gaming Laptop 15 inch",
              ]}
            />
          </div>
          <MDXRemote
            {...page.content[0].value}
            components={MarkdownComponents}
          />
        </section>

        <section>
          <div className="my-5">
            <Header level={2}>Quick List</Header>
          </div>
          <div>
            <ProductComparison productReviews={page.productReviews} />
          </div>

          <div>
            {page.productReviews.map((productReview, index) => (
              <ProductReview key={index} productReview={productReview} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = {
    id: 1,
    image: "https://picsum.photos/1920/1080",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title:
      "Best gaming laptops in 2023: I've had my pick of portable powerhouses and these are the best",
    description: "Meta description",
    author: {
      first_name: "Kamil",
      last_name: "Wilim",
      description: "Description",
      avatar: "/authors/kamil-wilim.jpeg",
    },
    content: [
      {
        type: "markdown",
        value: `
        We've spent the year testing the best gaming laptops, digging deep into the new flavors of AMD processor and Nvidia graphics silicon, and we know which notebooks sing and which are just tone deaf. We're not just talking about sleek, expensive new machines, either, we've picked a range of gaming laptops at different price point to highlight which give you the best bang for buck and which are just outright awesome.
        
        And, honestly, you've decided to buy a gaming laptop at the right time. Not only have the next generation of mobile GPU and CPU been well established, offering the best Nvidia, AMD, and Intel has to offer, but this end of year period is offering some of the best prices on the top notebooks I've seen. I've already tested the alternatives, and the best gaming laptop is the Lenovo Legion Pro 7i. It makes the best RTX 4090 gaming laptops, including the Razer Blade 16 and Asus ROG Zephyrus M16, and even the frankly ridiculous MSI Titan GT77 HX, look like overkill.
        
        AMD has also now released its new 3D V-cache mobile chip, and it's absolutely the best mobile gaming chip you can buy, which makes the 17-inch Asus ROG Strix Scar 17 X3D the outright fastest. It's a pricey beast, though, and a lot of money for just a handful of extra frames per second.We test dozens of the best gaming laptops every year. The ones that make it to the list provide the best value for money—the best balance of performance, price, and portability.
    `,
      },
    ],

    productReviews: [products[0], products[1]],
  };

  page.productReviews = await Promise.all(
    page.productReviews.map(async (productReview) => {
      return {
        ...productReview,
        reviewParsed: await serialize(productReview.review),
        title: `${productReview.brand} ${productReview.model}`,
      };
    }),
  );

  const promises = page.content.map(async (contentBlock) => {
    return { ...contentBlock, value: await serialize(contentBlock.value) };
  });

  page.content = (await Promise.all(promises)) as any;

  return {
    props: {
      page,
    },
  };
};
