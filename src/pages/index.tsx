import Navbar from "../components/templates/Navbar";
import Technology from "../components/atom/Technology";
import CaseStudiesSection from "../components/templates/CaseStudiesSection";
import Footer from "../components/templates/Footer";
import { DiscoverMoreButton } from "../components/atom/Button";
import HeadComponent from "../components/atom/Head";

export default function Home() {
  return (
    <>
      <HeadComponent
        title={"Home Page"}
        description={
          "Pierek is problems solving oriented company, focused on TaaS, outsourcing and consulting"
        }
        keywords={["Home Page", "TaaS", "Consulting", "Outsourcing"]}
      />
      <section
        className="
      flex h-screen flex-col
      bg-gradient-to-b
      from-slate-800
      to-slate-950
      "
      >
        <Navbar background={false} wave={false} />
        <section className="container">
          <h2
            className="mt-28 text-center text-4xl font-extrabold leading-normal text-white
          sm:text-4xl
          md:mt-40 md:max-w-3xl md:text-center md:text-7xl md:leading-snug
          lg:text-left lg:text-8xl lg:leading-tight
          2xl:max-w-7xl 2xl:text-9xl"
          >
            Problem solving oriented company
          </h2>
        </section>
        <div
          className="mt-24
        flex justify-center lg:hidden"
        >
          <button
            className="
            h-32 w-32
            rounded-full border bg-slate-800 px-4
            py-2 
          
           text-2xl font-bold text-white hover:bg-slate-900 md:h-64 md:w-64 md:border-2 md:text-5xl lg:hidden"
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
        <h1 className="py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
          Custom Software Development
        </h1>
        <p className="text-2xl font-light md:text-4xl">
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
          <h1 className="py-2 text-4xl font-bold md:py-5 md:text-8xl">
            Outsouring
          </h1>
          <p className="text-2xl font-light md:text-4xl">
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

      <section className="container mx-auto bg-white">
        <div className="">
          <h1 className="py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
            Technologies
          </h1>
          <p className="text-2xl font-light md:text-4xl">
            Because choosing right tools is crucial
          </p>
          <div className="flex flex-col items-center justify-between md:flex-row">
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
          <h1 className="py-2 text-4xl font-bold md:py-5 md:text-8xl">
            Consulting
          </h1>
          <p className="text-2xl font-light md:text-4xl">
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
