import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";

export default function Home() {
  return (
    <>
      <section
        className="
      bg-gradient-to-b from-slate-800 to-slate-950
      h-screen w-screen
      "
      >
        <Navbar />
        <h2 className="font-extrabold mt-28 text-white text-center text-2xl  md:text-8xl md:mt-40">
          contact@pierek.com
        </h2>
        <p className="text-2xl pt-4 text-white text-center md:text-4xl font-light">
          Because contact should be easy
        </p>
      </section>

      <Footer />
    </>
  );
}
