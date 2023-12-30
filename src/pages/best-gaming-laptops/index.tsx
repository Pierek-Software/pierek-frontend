import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

import { Header } from "../../components/Typography";
import ProductComparison from "../../components/QuickList";
import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import MarkdownComponents from "../../mappers/MarkdownComponents";
import { MDXRemote } from "next-mdx-remote";
import Dictionary from "../../components/atom/Dictionary";

const amazonTag = "pierek-20";

const Product = {
  id: 0,
  caption: "Best gaming laptop",
  brand: "Lenovo",
  stores: {
    amazon: {
      asin: "B08N5M7S6K",
    },
  },
  model: "Legion Pro 7i (Gen8)",
  shortDescription:
    "The Lenovo Legion Pro is the best gaming laptop from all the new machines we've tested of this generation. It's also the best 16-inch notebook, too, which is our new favorite form factor, offering the best screens we've seen in modern laptops.",
  type: "Laptop",
  mainImage:
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bVBHLvt+L._AC_SL1343_.jpg",
  images: [
    "https://cdn.mos.cms.futurecdn.net/iCEckDULhhXLddMk2UPs7T-1200-80.jpg.webp",
  ],
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
  opinions: {
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

const Product2 = {
  id: 1,
  brand: "Gigabyte",
  stores: {
    amazon: {
      asin: "",
    },
  },
  shortDescription:
    "By simply dropping either the RTX 4060 or RTX 4050 into its last-gen chassis Gigabyte has created the most affordable, most powerful budget gaming laptop around. It's a great mix of value and gaming silicon.",
  caption: "The best affordable gaming laptop 2023",
  mainImage:
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tgmKoXApL._AC_SL1500_.jpg",
  images: [
    "https://cdn.mos.cms.futurecdn.net/wT2WMANoYT4AxQdKeHMgUJ-1200-80.jpg.webp",
  ],
  model: "G5 (2023)",
  type: "Laptop",
  specifications: {
    CPU: "Up to Intel Core i7 12th Gen",
    GPU: "Up to Nvidia GeForce RTX 4060",
    RAM: "Up to 32GB DDR5-4800",
    Resolution: "15.6-inch IPS 1080p @ 144Hz",
    Storage: "512GB M.2 PCIe 4.0 NVMe SSD",
    Battery: "54Wh",
    Dimensions: "14.2 x 9.4 x 0.89 inches",
    Weight: "4.19lbs",
  },
  opinions: {
    advantages: {
      short: [
        "Great gaming performance",
        "Nice-looking screen",
        "Solid chassis",
        "Easy to upgrade storage",
        "Roughly the price of a similar RTX 30-series model",
      ],
      detailed: [
        "You want a cheaper RTX 40-series GPU: With a price tag not dissimilar to RTX 3060 gaming laptops, you're not paying a large premium for Nvidia's latest RTX 40-series architecture.",
        "You're after a laptop for both work and play: The G5 is predominantly a gaming laptop, but it's a relatively sleek chassis and its Alder Lake CPU does come with plenty of E-cores to throw at other tasks beyond gaming.",
      ],
    },
    disadvantages: {
      short: [
        "Loud under load",
        "Larger SSD upgrade is a must",
        "Would prefer more P-cores",
      ],
      detailed: [
        "You want to install a lot of games at once: With just a 512GB SSD installed out of the box, and the OS taking up some of that already, there's not a huge amount of room left for large game libraries.",
        "You want a quiet gaming device: Better stick to the Steam Deck or Asus ROG Ally if you want something quieter. The G5 makes a helluva noise when it's gaming.",
      ],
    },
  },
};

const DetailedOpinions = () => {
  return (
    <div className="text-justify md:ml-3">
      <Header linkable={false} level={4}>
        Lenovo is good because:
      </Header>
      <div className="flex flex-col text-left">
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md md:my-0">
          {Product.opinions.advantages.detailed.map(
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
          {Product.opinions.disadvantages.detailed.map(
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
          {Object.entries(Product.specifications).map(([key, value], index) => {
            return (
              <p key={index} className="my-1 lg:mx-4">
                <b>{key}</b>: {value}
              </p>
            );
          })}
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
          href={`https://www.amazon.com/dp/${productReview.stores.amazon.asin}/ref=nosim?tag=${amazonTag}`}
          target="blank"
        >
          <button className=" w-full bg-orange-amazon px-4 py-2 font-bold">
            View at Amazon.com
          </button>
        </a>
      </div>
      <div className="float-right rounded-md md:max-w-xs">
        <DetailedOpinions />
      </div>
      <MDXRemote
        components={MarkdownComponents}
        {...productReview.reviewParsed}
      />
    </section>
  );
}

export default function RemoteMdxPage({ page, mdxSource }) {
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
            {...page.descriptionParsed}
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
            <ProductReview productReview={page.productReviews[0]} />
            <ProductReview productReview={page.productReviews[1]} />
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
    description: `
    We've spent the year testing the best gaming laptops, digging deep into the new flavors of AMD processor and Nvidia graphics silicon, and we know which notebooks sing and which are just tone deaf. We're not just talking about sleek, expensive new machines, either, we've picked a range of gaming laptops at different price point to highlight which give you the best bang for buck and which are just outright awesome.

    And, honestly, you've decided to buy a gaming laptop at the right time. Not only have the next generation of mobile GPU and CPU been well established, offering the best Nvidia, AMD, and Intel has to offer, but this end of year period is offering some of the best prices on the top notebooks I've seen. I've already tested the alternatives, and the best gaming laptop is the Lenovo Legion Pro 7i. It makes the best RTX 4090 gaming laptops, including the Razer Blade 16 and Asus ROG Zephyrus M16, and even the frankly ridiculous MSI Titan GT77 HX, look like overkill.

    AMD has also now released its new 3D V-cache mobile chip, and it's absolutely the best mobile gaming chip you can buy, which makes the 17-inch Asus ROG Strix Scar 17 X3D the outright fastest. It's a pricey beast, though, and a lot of money for just a handful of extra frames per second.

    We test dozens of the best gaming laptops every year. The ones that make it to the list provide the best value for money—the best balance of performance, price, and portability.
    `,
    descriptionParsed: undefined,
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

    productReviews: [
      {
        ...Product,
        review: `
        The Lenovo Legion Pro 7i is the best 16-inch gaming laptop, and since 16-inch is the best form factor for a gaming laptop, it is therefore the best gaming laptop overall as well. Win and win.

        It's a machine that comes in at a price point that makes the rest of the high-end RTX 40-series look even more ridiculous on their lofty $4,000+ perches. And its the RTX 4080 model that has us impressed in testing, offering the sort of gaming performance that has me questioning why anyone would want an RTX 4090 machine.

        The Legion Pro 7i runs its RTX 4080 at a 150W TGP, which is the effective maximum of the GPU. Though manufacturers are given an extra 25W leeway to bulk up their own specs if they feel they can push a little extra juice through their own systems. Lenovo hasn't gone down that route, the Legion Pro knows what it likes, and it likes the 150W TGP and no more.

        The Legion Pro 7i uses a 13th Gen Intel chip—the Core i9 13900HX. If, like me, you were to assume that would essentially be a slightly higher clocked version of the Core i9 13900H Asus has used in its excellent Zephyrus M16 gaming laptop, then you'd be wrong.

        Despite the almost identical name, this is an entirely different, substantially better CPU. Where the one in the Asus is a 14-core design, with six P-cores, this is a 24-core setup with eight P-cores and twice the number of E-cores. They're both capable of 5.4GHz boost clocks, though inevitably the bigger chip has a higher base TDP of 45W.

        Then, backing up the key CPU/GPU combination is a 1TB PCIe 4.0 Samsung SSD, and 32GB of DDR5-5600 SK Hynix memory.

        The final part of the package is the 1600p 240Hz screen. Which is fine. I fear I've been spoiled by the joy of the mini LED backlights used in the last few laptop displays I've tested, because this one lacks the punch that I now want from a gaming panel. What it does have, however, is the 16:10 aspect ratio I never knew I needed in a gaming laptop until I started using them on the regular. The 2560 x 1600 native resolution is a great match for the 16-inch screen size the Legion Pro comes rocking.

        The Legion Pro 7i manages to outperform both the Razer Blade 16 and the Asus Zephyrus M16 regularly, at both 1080p and 1440p resolutions. Only the chonky boi MSI Titan GT77 is able to utilise its RTX 4090-ish GPU to its fullest potential. And then at the expense of acoustics and potentially your sanity.

        Because that's the thing I keep coming back to when I'm looking at this Lenovo machine. It's not the prettiest, but it sure can smash out them high gaming frame rates. And does it for around $2,000 less than the Blade 16.
      `,
      },
      {
        ...Product2,
        review: `
        The Gigabyte G5 (2023) is a great deal, and that's a little surprising considering the price hike we usually see for brand new gaming laptops. But you'll find no fad features or unnecessary add-ons to push up the costs here. Just a straightforward, well-built, and cleverly provisioned gaming laptop for less than $900 or £900 that delivers plenty of frames in games.

        Let's start with the star of the show here: the RTX 4060. We're yet to see Nvidia's RTX 40-series drop to this level on desktop, but even this budget-friendly card delivers superb 1080p performance befitting the G5's 1080p 144Hz display. That's partially down to the power Gigabyte's prepared to pump into the GPU inside this machine: 75W.

        That might not seem like much next to the 175W RTX 4090 laptops we've reviewed this year, but it's 30W more than MSI is ready to run through its own RTX 4060-powered gaming laptop, the Cyborg 15(opens in new tab). And you can watch the frame rate go up with every extra watt pulsing through the G5's GPU. The Gigabyte G5 is up to 27% faster than the Cyborg 15 in our testing, and the Cyborg 15 even has a better CPU for gaming under the hood.

        The CPU in question here is Intel's Core i5 12500H. A fairly sensible choice, though let down a little by only four Performance-cores (P-cores). This is one of Intel's hybrid Alder Lake chips, so it comes with a basket of Efficient-cores (E-cores) to help lighten the load on the quicker gaming silicon. There are eight E-cores here, which makes for a 12-core chip in total.

        Generally, I'd prefer a few more P-cores in the mix, at least six. Like the Core i7 12650H CPU found on the MSI Cyborg 15, in fact. That comes with six P-cores and just four E-cores. The MSI laptop also comes with faster DDR5 memory than the legacy DDR4 on the Gigabyte machine. But as you can see in the benchmarking results, the actual difference in performance between these two is relatively small even in CPU-heavy applications and tests.

        You can open this laptop up relatively easily with a Phillips-head screwdriver to access its innards. You will poke through a couple of stickers over the screws that might void your warranty, so be sure you want to be diving in there before you do, but behind the back panel you'll find one free M.2 SSD slot for an easy storage capacity upgrade. You'll probably want to take advantage of that eventually as the 512GB SSD included in this machine will fill up quickly.

        The biggest drawback of the G5 is the noise this thing makes when it's running any marginally demanding game. That's not a new experience for anyone who has used a gaming laptop in the past, but take this as your warning that gaming laptops are generally not any quieter in 2023. Not if you want high performance anyways. The MSI Cyborg 15 I also tested this past week is only quieter owing to its significantly reduced performance.

        There's plenty of good things to say about the screen on the G5, too. It's vibrant and responsive, and while 15.6-inches can feel a little encroaching at 1080p, it's a happy median for frame rate, resolution, and size. While this laptop does suffer a little in contrast, colours are nicely saturated and it's an all-round solid panel.

        The G5 (2023) just feels such a solid design for a gaming laptop. The performance is there, the flexibility and upgradeability too, and you aren't paying over the odds for the hot new thing. It's actually pretty affordable. This is going to be tough to beat for the best affordable gaming laptop to buy right now.
      `,
      },
    ],
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

  page.descriptionParsed = await serialize(page.description);

  return {
    props: {
      page,
    },
  };
};
