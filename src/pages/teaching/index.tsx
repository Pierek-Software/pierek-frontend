/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";
import HeadComponent from "../../components/atom/Head";
import { Paragraph, Header } from "../../components/Typography";

// export const Header = ({ text }: { text: string }) => {
//   return (
//     <h2
//       className="
//       my-1 text-3xl font-bold leading-normal text-black
//       md:text-4xl md:my-3
//       lg:text-5xl lg:my-5
//       "
//     >
//       {text}
//     </h2>
//   );
// };

// export const Paragraph = ({ text }: { text: string }) => {
//   return (
//     <p
//       className="
//       my-2 text-justify text-md leading-loose
//       md:text-xl md:my-3
//       lg:text-2xl lg:my-5
//       "
//     >
//       {text}
//     </p>
//   );
// };

export default function Page() {
  return (
    <>
      <HeadComponent
        title="Teaching & Schooling"
        description="Hire Kamil Wilim as your programming, abstract thinking teacher. I can teach people any age who understand English and are willing to improve their programming skills"
        keywords={["Teacher", "Schooling", "Node.js", "Web Development"]}
        imageSource="/pages/teaching.jpeg"
      />
      <div
        className="
        min-h-screen min-w-screen
        bg-gradient-to-b from-slate-950 to-slate-800
        flex flex-col justify-between
        "
      >
        <Navbar background={false} wave={false} />

        <section className="container grow">
          <h1
            className="
            font-extrabold mt-28 text-white text-center leading-normal text-4xl
            sm:text-4xl
            md:text-9xl md:text-left
            lg:text-8xl
            "
          >
            Teaching & Schooling
          </h1>
          <div
            className="
            font-bold text-white text-center leading-normal text-xl mt-8
            md:text-4xl md:text-left md:mt-10
            lg:text-5xl lg:mt-14
            "
          >
            <p className="my-1 md:my-8 lg:my-5">Starting from 100$ / hour</p>
            <p className="my-1 md:my-8 lg:my-5">Remote: Globally 🌎</p>
            <p className="my-1 md:my-8 lg:my-5">
              On-site: Bangkok, Thailand 🇹🇭
            </p>
          </div>
        </section>

        <section className="container mb-7 flex justify-center">
          <img
            className="text-white m-auto text-2xl h-9 w-9"
            src="/icons/arrow-down.svg"
            alt="Arrow Down Icon"
            title="Arrow Down Icon"
          />
        </section>
      </div>
      <svg
        id="wave"
        style={{
          transform: "rotate(180deg)",
          transition: "0.3s",
          marginTop: "-1px",
        }}
        viewBox="0 0 1440 100"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="#1e293b"
          d="M0,30L48,25C96,20,192,10,288,13.3C384,17,480,33,576,38.3C672,43,768,37,864,38.3C960,40,1056,50,1152,60C1248,70,1344,80,1440,85C1536,90,1632,90,1728,75C1824,60,1920,30,2016,16.7C2112,3,2208,7,2304,13.3C2400,20,2496,30,2592,31.7C2688,33,2784,27,2880,25C2976,23,3072,27,3168,23.3C3264,20,3360,10,3456,13.3C3552,17,3648,33,3744,46.7C3840,60,3936,70,4032,73.3C4128,77,4224,73,4320,73.3C4416,73,4512,77,4608,71.7C4704,67,4800,53,4896,55C4992,57,5088,73,5184,78.3C5280,83,5376,77,5472,71.7C5568,67,5664,63,5760,51.7C5856,40,5952,20,6048,13.3C6144,7,6240,13,6336,20C6432,27,6528,33,6624,36.7C6720,40,6816,40,6864,40L6912,40L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
        ></path>
      </svg>
      <main className="container">
        <Header level={2}>Introduction</Header>
        <section
          className="
          flex flex-col-reverse align-middle items-center
          md:flex-row
          "
        >
          <Paragraph>
            Greetings, I am Kamil Wilim, a seasoned Software Engineer
            specializing in backend development, primarily utilizing the
            JavaScript programming language. I am working for biggest europe
            Fintech company Klarna. With 7 years of professional experience in
            the field, I am dedicated to web development. Additionally, I am an
            avid traveler, having explored 31 countries, 30 of which are in
            Europe, and one in Asia.
          </Paragraph>
          <img
            className="rounded-full m-auto max-h-40"
            src="/authors/kamil-wilim.jpeg"
          />
        </section>
        <Header level={2}>Knowledge Sharing</Header>
        <Paragraph>
          Irrespective of age, I offer my expertise in enhancing abstract
          thinking and problem-solving skills through the medium of English.
          Whether you or your children seek to improve their cognitive
          abilities, I am here to assist.
        </Paragraph>
        <Header level={2}>Tailored Lessons</Header>
        <Paragraph>
          My teaching style is adaptable to your specific needs. Whether it's a
          one-hour test preparation session or a comprehensive daily program to
          excel as a Software Developer and enhance your programming mindset, I
          am ready to provide tailored support.
        </Paragraph>
        <Header level={2}>Effective Information Retrieval</Header>
        <Paragraph>
          In today's era of information abundance, mastering the art of
          efficient information retrieval is paramount. I can empower you with
          the skills needed to navigate the vast digital landscape, ensuring you
          find the information you seek swiftly, securely, and effortlessly.
        </Paragraph>
        <Header level={2}>Experience in High-Tech Startups</Header>
        <Paragraph>
          Having worked in startups with over 6,000 members and employing
          cutting-edge European technologies, I can offer valuable insights into
          their problem-solving approaches and architectural strategies.
          Together, we can cover the essentials of programming and delve deeper
          into the intricacies, depending on your specific learning
          requirements.
        </Paragraph>
        <Header level={2}>Understanding Internet Social Engineering</Header>
        <Paragraph>
          In today's digitally connected world, knowledge of social engineering
          methods is crucial to safeguarding your online presence. Whether you
          are an individual or a business, recognizing and mitigating the risks
          associated with social engineering is paramount. I can guide you
          through the nuances of these deceptive tactics, helping you identify
          and defend against online threats. By understanding the psychology
          behind social engineering, you can better protect your personal
          information and digital assets.
        </Paragraph>
        <Header level={2}>
          Enhancing Online Privacy and Understanding Fingerprints
        </Header>
        <Paragraph>
          Privacy is a fundamental concern in the digital age. Protecting your
          personal information and online identity is essential. Moreover,
          understanding how websites and services create 'fingerprints' of your
          online activities can help you maintain your anonymity. Your
          user-agent, a crucial part of your online identity, can reveal
          information about your device and browsing habits. I can provide
          insights and strategies to enhance your online privacy, minimize
          fingerprinting risks, and make informed decisions about your
          user-agent settings.
        </Paragraph>
        <Header level={2}>
          Navigating the Landscape of Misinformation, Bots, and Emotional
          Content
        </Header>
        <Paragraph>
          In today's information-saturated environment, discerning fact from
          fiction is becoming increasingly challenging. The prevalence of fake
          information, automated bots, and emotionally driven content is a
          significant concern. I can help you develop the critical thinking
          skills needed to spot false information and recognize the influence of
          automated bots in online discourse. Moreover, we can delve into the
          emotional aspect of information, understanding how content is designed
          to evoke specific feelings and the implications this has on our
          digital interactions. By equipping yourself with these insights, you
          can make more informed decisions and contribute to a more informed
          online community.
        </Paragraph>

        <section className="mt-8 flex justify-center bg-gradient-to-b from-slate-700 to-slate-950 hover:from-slate-600 hover:to-slate-950 hover:cursor-pointer p-5 rounded">
          <a href="/contact">
            <h3 className="text-2xl py-6 md:text-4xl font-bold text-white">
              Interested in offer? <span className="underline">Contact me</span>
            </h3>
          </a>
        </section>
      </main>

      <Footer wave />
    </>
  );
}
