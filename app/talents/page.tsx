import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";

//bg-[url('/talents-bg.webp')] bg-fill

export default function NodeJSPage() {
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
            Talent as a Service (TaaS)
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
      <main className="container mt-11">
        <h1 className="text-4xl md:text-5xl font-bold  leading-relaxed text-black">
          Talent as a Service
        </h1>
        <p className="mt-3 text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          Our Talent as a Service (TaaS) offering enables the seamless
          identification of ideal candidates from within our extensive partner
          network, ensuring a precise alignment of skills and character with the
          specific requirements of your projects.
        </p>

        <h1 className="text-4xl md:text-5xl py-1 md:py-5 font-bold text-black leading-relaxed">
          Scalability
        </h1>
        <p className="text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          Our system provides effortless scalability, allowing you to
          effortlessly expand your team with developers, project managers, scrum
          masters, and engineers in accordance with the evolving demands of your
          projects.
        </p>

        <h1 className="text-4xl md:text-5xl py-1 md:py-5 font-bold text-black leading-relaxed">
          Streamlined Administrative Efficiency
        </h1>
        <p className="text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          Simplify your administrative processes with our consolidated billing
          system. With just one invoice, you can efficiently manage all your
          paperwork, freeing up valuable time to focus exclusively on your
          project requirements.
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
