import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";
import Timeline from "../../components/organisms/Timeline";

function Futurology() {
  return (
    <>
      <Navbar background />
      <svg
        className="-mb-10 md:-mb-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1e293b"
          fill-opacity="1"
          d="M0,32L80,58.7C160,85,320,139,480,144C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
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
