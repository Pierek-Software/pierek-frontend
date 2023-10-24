import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";
import Timeline from "../../components/organisms/Timeline";

function Futurology() {
  return (
    <>
      <Navbar background wave />
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
          Futurology
        </h1>
        <p className="text-2xl md:text-4xl font-light">
          Because timeline of milestones should be marked
        </p>
        <Timeline />
      </div>
      <Footer />
    </>
  );
}

export default Futurology;
