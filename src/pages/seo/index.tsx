/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";

//bg-[url('/talents-bg.webp')] bg-fill

export default function Page() {
  return (
    <>
      <div
        className="min-h-screen min-w-screen
        bg-gradient-to-b from-slate-950  to-slate-800
      
      flex flex-col justify-between"
      >
        <Navbar background={false} wave={false} />

        <section className="container grow">
          <h2
            className="font-extrabold mt-28 text-white text-center leading-normal text-4xl
          sm:text-4xl
          md:text-7xl md:max-w-3xl md:text-center md:leading-snug
          lg:text-8xl lg:text-left lg:leading-tight
          2xl:text-9xl 2xl:max-w-7xl"
          >
            Search Engine Optimization (SEO)
          </h2>
        </section>

        <section className="container mb-7 flex justify-center">
          <img
            className="text-white m-auto text-2xl h-9 w-9"
            src="/icons/arrow-down.svg"
            alt="Background"
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
      <main className="container mt-11">
        <h1 className="text-4xl md:text-5xl font-bold  leading-relaxed text-black">
          Search Engine Optimization
        </h1>
        <p className="mt-3 text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          Our profound understanding of search engine algorithms empowers us to
          strategize and implement methods for optimizing your project. Without
          effective SEO, your application may struggle to secure a prominent
          position, potentially providing your competition with a significant
          advantage. Superior SEO entails the meticulous alignment of your web
          pages with search engine regulations.
        </p>

        <h1 className="text-4xl md:text-5xl py-1 md:py-5 font-bold text-black leading-relaxed">
          From Content Development to Link Building
        </h1>
        <p className="text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          We prioritize the critical aspects of each project, proactively
          resolving challenges with efficiency and precision. It's essential to
          note that SEO transcends conventional marketing strategies; its
          primary value lies in obtaining favorable endorsements from major
          search engines.
        </p>

        <h1 className="text-4xl md:text-5xl py-1 md:py-5 font-bold text-black leading-relaxed">
          Unraveling the Complexities
        </h1>
        <p className="text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          While the inner workings of Google's search algorithms remain a
          closely guarded secret, it is widely acknowledged that in-depth
          knowledge is a rarity, and those who possess it seldom divulge their
          insights. Nevertheless, extensive case studies have shed light on
          certain techniques that yield positive results, while others prove
          less effective. We can offer our professional insights and guide you
          towards the most advantageous strategies to enhance your search engine
          rankings.
        </p>

        <section className="mt-8 flex justify-center bg-gradient-to-b from-slate-700 to-slate-950 hover:from-slate-600 hover:to-slate-950 hover:cursor-pointer p-5 rounded">
          <a href="/contact">
            <h2 className="text-2xl py-6 md:text-4xl font-bold text-white">
              Interested in offer? <span className="underline">Contact us</span>
            </h2>
          </a>
        </section>
      </main>

      <Footer wave />
    </>
  );
}
