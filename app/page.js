import Navbar from "./components/Navbar";
import Technology from "./components/Technology";

// bg - [url("http://localhost:3000/bg_desktop.jpeg")];

export default function Home() {
  return (
    <>
      <section
        className="
      bg-gradient-to-b from-slate-600 to-slate-900
      w-screen h-screen
      flex
      flex-col
      "
      >
        <Navbar />

        <h2 className="font-extrabold mt-28 text-white text-center text-4xl  md:text-8xl  md:max-w-3xl md:mt-40 md:ml-32 md:text-left">
          Problem solving oriented software house
        </h2>
        <div className="md:hidden flex justify-center mt-24">
          <button className="md:hidden w-32 h-32 bg-slate-800 hover:bg-slate-900 text-white text-2xl font-bold py-2 px-4 rounded-full border">
            <a href="/contact">Contact</a>
          </button>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0f172a"
          fill-opacity="1"
          d="M0,32L120,74.7C240,117,480,203,720,218.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <section>
        <div className="bg-white p-5 flex justify-center h-64 md:h-96">
          <div className="container">
            <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-gray-900">
              Custom Software Development
            </h1>
            <p className="text-2xl md:text-4xl font-light">
              Becuase tailored solutions are the best solutions
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-slate-300 p-5 flex justify-center h-64 md:h-96">
          <div className="container">
            <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-gray-900">
              Outsouring
            </h1>
            <p className="text-2xl md:text-4xl font-light">
              Becuase good people are hard to find
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white p-5 flex justify-center">
          <div className="container">
            <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-gray-900">
              Technologies
            </h1>
            <p className="text-2xl md:text-4xl font-light">
              Because choosing right tools is crucial
            </p>
            <div className="flex justify-around items-center flex-col md:flex-row">
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
              <div className="flex flex-col justify-center items-center text-center">
                <i class="fas fa-angle-double-right text-6xl md:text-8xl hover:text-slate-500 cursor-pointer"></i>
                <span>Discover more</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-slate-300 p-5 flex justify-center h-96">
          <div className="container">
            <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-gray-900">
              Blog
            </h1>
            <p className="text-2xl md:text-4xl font-light">
              Becuase valuable knowledge is worth reading
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white p-5 flex justify-center">
          <div className="container">
            <div className="flex justify-center text-center">
              <p>contact@pierek.com ©2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
