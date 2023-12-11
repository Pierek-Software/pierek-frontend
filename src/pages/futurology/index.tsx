import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";
import Timeline from "../../components/organisms/Timeline";

function Futurology() {
  return (
    <>
      <Navbar background wave />
      <div className="container mx-auto">
        <h1 className="py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
          Futurology
        </h1>
        <p className="text-2xl font-light md:text-4xl">
          Because timeline of milestones should be marked
        </p>
        <Timeline />
      </div>
      <Footer />
    </>
  );
}

export default Futurology;
