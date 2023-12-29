import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

import { DictionaryLink, Header } from "../../components/Typography";
import { useState } from "react";
import ProductComparison from "../../components/ProductComparison";
import { GetServerSideProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import ApiClient from "../../api";
import { extractHeaders } from "../debug";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { MDXRemote } from "next-mdx-remote";
const Product = {
  id: 1,
  brand: "Lenovo",
  model: "Legion Pro 7i (Gen8)",
  type: "Laptop",
  specifications: {
    CPU: "Up to Core i9 13900HX",
    GPU: "RTX 4090, RTX 4080, or RTX 4070",
    RAM: "Up to 32GB DDR5",
    Resolution: "2560 x 1600",
    Storage: "Up to 2TB Gen 4 SSD",
    Battery: "Up to 99.99Wh",
    Dimensions: "10.32 x 14.3 x 0.86–1.01 inches",
    Weight: "6.17 lbs",
  },
  review: {
    advantages: {
      short: [
        "Revolutionary Quantum Display is really good",
        "Ultra-Fast Quantum Processor is faster than previous",
        "Advanced Quantum Camera System make better pictures",
      ],
      detailed: [
        "You want the most powerful gaming laptop: The combination of AMD's latest Ryzen mobile chip and Nvidia's RTX 4090 makes this a real frame rate spitting monster of machine.",
        "You want a desktop replacement: The large 17-inch screen and 1440p resolution gives you a lot of space to work on without taking up the same space as a full desktop+monitor setup.",
      ],
    },
    disadvantages: {
      short: [
        "Limited Quantum App Ecosystem need time to develop",
        "Premium Price Tag as every iPhone",
        "Non-expandable Quantum Storage is just bad",
      ],
      detailed: [
        "You want good battery life: at just 55 minutes in gaming terms, the battery life is among the worst I've ever tested.",
        "Ergonomics is key to you: the typing experience isn't great with such a defined chassis edge that digs into your forearms, and the trackpad is horrible.",
      ],
    },
  },
};

const DetailedText = () => {
  return (
    <div>
      <p className="my-5 leading-relaxed">
        The Lenovo Legion Pro 7i is the best 16-inch gaming laptop, and since
        16-inch is the best form factor for a gaming laptop, it is therefore the
        best gaming laptop overall as well. Win and win.
      </p>
      <p className="my-5 leading-relaxed">
        It's a machine that comes in at a price point that makes the rest of the
        high-end RTX 40-series look even more ridiculous on their lofty $4,000+
        perches. And its the RTX 4080 model that has us impressed in testing,
        offering the sort of gaming performance that has me questioning why
        anyone would want an RTX 4090 machine.
      </p>
      <p className="my-5 leading-relaxed">
        The Legion Pro 7i runs its RTX 4080 at a 150W TGP, which is the
        effective maximum of the GPU. Though manufacturers are given an extra
        25W leeway to bulk up their own specs if they feel they can push a
        little extra juice through their own systems. Lenovo hasn't gone down
        that route, the Legion Pro knows what it likes, and it likes the 150W
        TGP and no more.
      </p>
      <p className="my-5 leading-relaxed">
        The Legion Pro 7i uses a 13th Gen Intel chip—the Core i9 13900HX. If,
        like me, you were to assume that would essentially be a slightly higher
        clocked version of the Core i9 13900H Asus has used in its excellent
        Zephyrus M16 gaming laptop, then you'd be wrong.
      </p>
      <p className="my-5 leading-relaxed">
        Despite the almost identical name, this is an entirely different,
        substantially better CPU. Where the one in the Asus is a 14-core design,
        with six P-cores, this is a 24-core setup with eight P-cores and twice
        the number of E-cores. They're both capable of 5.4GHz boost clocks,
        though inevitably the bigger chip has a higher base TDP of 45W.
      </p>
      <p className="my-5 leading-relaxed">
        Then, backing up the key CPU/GPU combination is a 1TB PCIe 4.0 Samsung
        SSD, and 32GB of DDR5-5600 SK Hynix memory.
      </p>

      <p className="my-5 leading-relaxed">
        The final part of the package is the 1600p 240Hz screen. Which is fine.
        I fear I've been spoiled by the joy of the mini LED backlights used in
        the last few laptop displays I've tested, because this one lacks the
        punch that I now want from a gaming panel. What it does have, however,
        is the 16:10 aspect ratio I never knew I needed in a gaming laptop until
        I started using them on the regular. The 2560 x 1600 native resolution
        is a great match for the 16-inch screen size the Legion Pro comes
        rocking.
      </p>
      <p className="my-5 leading-relaxed">
        The Legion Pro 7i manages to outperform both the Razer Blade 16 and the
        Asus Zephyrus M16 regularly, at both 1080p and 1440p resolutions. Only
        the chonky boi MSI Titan GT77 is able to utilise its RTX 4090-ish GPU to
        its fullest potential. And then at the expense of acoustics and
        potentially your sanity.
      </p>
      <p className="my-5 leading-relaxed">
        Because that's the thing I keep coming back to when I'm looking at this
        Lenovo machine. It's not the prettiest, but it sure can smash out them
        high gaming frame rates. And does it for around $2,000 less than the
        Blade 16.
      </p>
    </div>
  );
};

const DetailedOpinions = () => {
  return (
    <div className="text-justify md:ml-3">
      <Header linkable={false} level={4}>
        Lenovo is good because:
      </Header>
      <div className="flex flex-col text-left">
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md md:my-0">
          {Product.review.advantages.detailed.map(
            (advantageDetailed, index) => {
              return (
                <p key={index} className="my-2 flex">
                  <span className="mr-2">✅</span>
                  {advantageDetailed}
                </p>
              );
            },
          )}
        </div>

        <Header linkable={false} level={4}>
          Lenovo is bad because:
        </Header>
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md md:my-0">
          {Product.review.disadvantages.detailed.map(
            (disadvantageDetailed, index) => {
              return (
                <p key={index} className="my-2 flex">
                  <span className="mr-2">❌</span>
                  {disadvantageDetailed}
                </p>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

const Dictionary = (props) => {
  return (
    <nav className="flex flex-col md:ml-3 md:border-b-2 md:border-l-2 md:border-orange-400 md:pb-3 md:pl-3">
      <Header linkable={false} level={2}>
        Dictionary
      </Header>
      {props.dictionary.map((header, index) => {
        if (header.level === 2) {
          return (
            <DictionaryLink className="my-1 hover:underline" key={index}>
              {header.text}
            </DictionaryLink>
          );
        }
      })}
    </nav>
  );
};

export default function RemoteMdxPage({ page }) {
  return (
    <>
      <Navbar background={true} wave={false} />

      <main className="container">
        <h1 className="my-4 text-3xl font-bold leading-snug">{page.title}</h1>
        <p className="mt-2">{`By ${page.author.first_name} ${page.author.last_name}`}</p>

        <img className="my-4" src="https://picsum.photos/1920/1080" />

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
              dictionary={[
                { level: 2, text: "Hello" },
                { level: 2, text: "Test" },
                { level: 2, text: "Best Gaming Laptop 15 inch" },
                {
                  level: 2,
                  text: "Best Gaming Laptop 15 inch Best Gaming Laptop 15 inch",
                },
              ]}
            />
          </div>
          <MDXRemote
            {...JSON.parse(page.description)}
            components={MarkdownComponents}
          />
        </section>

        <section>
          <div className="my-5">
            <Header level={2}>Quick List</Header>
          </div>
          <div>
            <ProductComparison />
          </div>
        </section>

        <section>
          <div className="my-5">
            <div className="my-3">
              <div className="my-3">
                <Header level={2}>Lenovo Legion Pro 7i (Gen8)</Header>
              </div>
              <img
                className="my-3"
                src="https://cdn.mos.cms.futurecdn.net/iCEckDULhhXLddMk2UPs7T-1200-80.jpg.webp"
              />

              <div className="my-3">
                <p className="my-2 text-xl font-extralight">
                  The best gaming laptop
                </p>
                <Header level={2} linkable={false}>
                  ⭐⭐⭐⭐⭐
                </Header>
              </div>
            </div>
            <div className="my-3">
              <Header level={3}>Specifications</Header>
              <div className="flex flex-col lg:flex-row">
                {Object.entries(Product.specifications).map(
                  ([key, value], index) => {
                    return (
                      <p key={index} className="my-1 lg:mx-4">
                        <b>{key}</b>: {value}
                      </p>
                    );
                  },
                )}
              </div>
            </div>
            <div className="my-3">
              <div className="my-1">
                <Header linkable={false} level={4}>
                  {`Lenovo Pricing`}
                </Header>
              </div>

              <a className="my-3" href="https://google.pl" target="blank">
                <button className="w-full rounded bg-orange-400 px-4 py-2 font-bold">
                  View at Amazon.com
                </button>
              </a>
            </div>

            <section className="my-5">
              <div className="float-right my-3 rounded-md md:my-0 md:max-w-xs">
                <DetailedOpinions />
              </div>
              <DetailedText />
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apiClient = new ApiClient();

  const page = {
    id: 1,
    description: `We've spent the year testing the best gaming laptops, digging deep into the new flavors of AMD processor and Nvidia graphics silicon, and we know which notebooks sing and which are just tone deaf. We're not just talking about sleek, expensive new machines, either, we've picked a range of gaming laptops at different price point to highlight which give you the best bang for buck and which are just outright awesome.

And, honestly, you've decided to buy a gaming laptop at the right time. Not only have the next generation of mobile GPU and CPU been well established, offering the best Nvidia, AMD, and Intel has to offer, but this end of year period is offering some of the best prices on the top notebooks I've seen. I've already tested the alternatives, and the best gaming laptop is the Lenovo Legion Pro 7i. It makes the best RTX 4090 gaming laptops, including the Razer Blade 16 and Asus ROG Zephyrus M16, and even the frankly ridiculous MSI Titan GT77 HX, look like overkill.

AMD has also now released its new 3D V-cache mobile chip, and it's absolutely the best mobile gaming chip you can buy, which makes the 17-inch Asus ROG Strix Scar 17 X3D the outright fastest. It's a pricey beast, though, and a lot of money for just a handful of extra frames per second.

We test dozens of the best gaming laptops every year. The ones that make it to the list provide the best value for money—the best balance of performance, price, and portability.`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title:
      "Best gaming laptops in 2023: I've had my pick of portable powerhouses and these are the best",
    author: {
      first_name: "Kamil",
      last_name: "Wilim",
      description: "Description",
      avatar: "/authors/kamil-wilim.jpeg",
    },
  };

  const mdxDescription = await serialize(page.description);

  //   const dictionary = extractHeaders(post.markdown);

  return {
    props: {
      page: { ...page, description: JSON.stringify(mdxDescription) },
    },
  };
};
