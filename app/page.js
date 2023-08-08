import Navbar from "../components/templates/Navbar";
import Technology from "../components/atom/Technology";
import CaseStudiesSection from "../components/templates/CaseStudiesSection";
import Footer from "../components/templates/Footer";
import { DiscoverMoreButton } from "../components/atom/Button";

export default function Home() {
  return (
    <>
      <section
        className="
      bg-gradient-to-b from-slate-800 to-slate-950
      w-screen h-screen
      flex
      flex-col
      "
      >
        <Navbar />
        <section className="container">
          <h2
            className="font-extrabold mt-28 text-white text-center leading-normal text-4xl
          sm:text-4xl
          md:text-7xl md:max-w-3xl md:mt-40 md:text-center md:leading-snug
          lg:text-8xl lg:text-left lg:leading-tight
          2xl:text-9xl 2xl:max-w-7xl"
          >
            Problem solving oriented software house
          </h2>
        </section>
        <div
          className="lg:hidden
        flex justify-center mt-24"
        >
          <button
            className="
            w-32 h-32
            md:w-64 md:h-64 md:text-5xl md:border-2
            lg:hidden 
          
           bg-slate-800 hover:bg-slate-900 text-white text-2xl font-bold py-2 px-4 rounded-full border"
          >
            <a href="/contact">Contact</a>
          </button>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,32L120,74.7C240,117,480,203,720,218.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <section className="container mx-auto">
        <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
          Custom Software Development
        </h1>
        <p className="text-2xl md:text-4xl font-light">
          Becuase tailored solutions are the best solutions
        </p>
      </section>

      <svg
        className="-mb-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <section className="bg-slate-950 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold">
            Outsouring
          </h1>
          <p className="text-2xl md:text-4xl font-light">
            Becuase good people are hard to find
          </p>
        </div>
      </section>

      <svg
        className="-mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,176C672,181,768,203,864,192C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <section className="bg-white p-5 container mx-auto">
        <div className="">
          <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
            Technologies
          </h1>
          <p className="text-2xl md:text-4xl font-light">
            Because choosing right tools is crucial
          </p>
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="flex flex-col justify-between">
              <div className=" pt-4">
                <Technology
                  icon="fa-brands fa-js"
                  name="JavaScript / TypeScript Development"
                />
              </div>
              <div className="flex justify-center pt-4">
                <Technology
                  icon="fa-brands fa-node-js"
                  name="Node.js Development"
                />
                <Technology
                  icon="fa-brands fa-react"
                  name="React Development"
                />
              </div>
              <div className="flex justify-center pt-4">
                <Technology
                  icon="fa-brands fa-aws"
                  name="Amazon Web Services"
                />
                <Technology
                  icon="fa-brands fa-microsoft"
                  name="Microsoft Azure"
                />
                <Technology
                  icon="fa-brands fa-google"
                  name="Google Cloud Platform"
                />
              </div>
            </div>
            <DiscoverMoreButton url="/technologies" />
          </div>
        </div>
      </section>

      <svg
        className="-mb-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <section className="bg-slate-950 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold">
            Consulting
          </h1>
          <p className="text-2xl md:text-4xl font-light">
            Becuase tips from professionals are essentials
          </p>
        </div>
      </section>

      <svg
        className="-mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,176C672,181,768,203,864,192C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <CaseStudiesSection />
      <Footer />
    </>
  );
}
