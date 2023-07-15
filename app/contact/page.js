import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <section
        className="
      bg-gradient-to-b from-slate-600 to-slate-900
      h-screen w-screen
      "
      >
        <Navbar />
        <h2 className="font-extrabold mt-28 text-white text-center text-2xl  md:text-8xl md:mt-40">
          contact@pierek.com
        </h2>
      </section>

      <Footer />
    </>
  );
}
