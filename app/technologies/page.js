import { JavaScriptIcon, TypeScriptIcon } from "../../components/atom/Icon";
import Technology from "../../components/atom/Technology";

const { default: Footer } = require("../../components/templates/Footer");
const { default: Navbar } = require("../../components/templates/Navbar");

const technologies = [
  {
    id: 1,
    title: "JavaScript",
    stability: "Enterprise",
    category: 0,
  },
  {
    id: 2,
    title: "TypeScript",
    stability: "Enterprise",
    category: 0,
  },
  {
    id: 3,
    title: "Node.js",
    stability: "Enterprise",
    category: 2,
  },
  {
    id: 4,
    title: "Deno",
    stability: "Stable",
    category: 2,
  },
];

function Technologies() {
  return (
    <>
      <Navbar background wave />
      <section className="mx-auto container">
        <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
          Technologies
        </h1>
        <p className="text-2xl md:text-4xl font-light">
          Because choosing right tools is crucial
        </p>

        <h3 className="text-lg font-extrabold mt-3">PROGRAMMING LANGUAGES</h3>
        <div className="flex justify-center border-black border-4">
          <div className=" p-3 m-3 rounded border border-black">
            <JavaScriptIcon />
            <h2 className="text-center text-black text-lg font-semibold">
              JavaScript
            </h2>
          </div>
          <div className=" p-3 m-3 rounded border border-black">
            <TypeScriptIcon />
            <h2 className="text-center text-black text-lg font-semibold">
              TypeScript
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Technologies;
