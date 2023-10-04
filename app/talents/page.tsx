import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";

export default function NodeJSPage() {
  return (
    <>
      <Navbar background wave />
      <main className="container">
        <h1 className="text-4xl md:text-5xl py-1 md:py-5 font-bold text-black">
          Talent as a Service
        </h1>
        <p className="mt-3 text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          Our Talent as a Service (TaaS) offering enables the seamless
          identification of ideal candidates from within our extensive partner
          network, ensuring a precise alignment of skills and character with the
          specific requirements of your projects.
        </p>

        <h1 className="text-4xl md:text-5xl py-1 md:py-5 font-bold text-black">
          Scalability
        </h1>
        <p className="mt-3 text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          Our system provides effortless scalability, allowing you to
          effortlessly expand your team with developers, project managers, scrum
          masters, and engineers in accordance with the evolving demands of your
          projects.
        </p>

        <h1 className="text-4xl md:text-5xl py-1 md:py-5 font-bold text-black">
          Streamlined Administrative Efficiency
        </h1>
        <p className="mt-3 text-justify text-md md:text-lg lg:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
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
