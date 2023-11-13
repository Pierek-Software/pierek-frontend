import { useState } from "react";

export interface NavbarProps {
  background: boolean;
  wave: boolean;
}

export default function Navbar(props: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className={props.background === true ? "bg-slate-800" : ""}>
        <ul
          className="
        container flex justify-between align-middle items-center py-5
        md:py-10
        lg:py-5
        lg:justify-center 
        "
        >
          <li className="lg:grow px-5 text-xl font-bold">
            <a title="Home Page" href="/">
              <img
                className="
                h-6
                md:h-9
                "
                src="/logo_white.svg"
                alt="Pierek Logo"
                title="Pierek Logo"
              />
            </a>
          </li>
          <li className="lg:hidden">
            <svg
              onClick={() => {
                setNavbarOpen(!navbarOpen);
                document.body.style.overflow = "hidden";
              }}
              className="
              w-6 h-6 text-white
              md:h-9 md:w-9
              "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </li>

          <li className="hidden lg:block px-5 text-white text-2xl font-bold hover:underline">
            <a title="Technologies" href="/technologies">
              Technologies
            </a>
          </li>

          <li className="hidden lg:block px-5 text-white text-2xl font-bold hover:underline">
            <a title="Case Studies" href="/case-studies">
              Case Studies
            </a>
          </li>

          <li className="hidden lg:block px-5 text-white text-xl">
            <button className="bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-full">
              <a title="Contact" href="/contact">
                Contact
              </a>
            </button>
          </li>
        </ul>
        {navbarOpen === true ? (
          <section className="bg-slate-900 text-white absolute top-0 w-screen h-screen">
            <div
              className="
            container flex flex-row justify-end py-5
            md:py-10
            "
            >
              <svg
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                  document.body.style.overflow = "auto";
                }}
                className="
                w-6 h-6 text-white
                md:h-9 md:w-9
                "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <div className="flex mt-20 flex-col">
              <a
                title="Home Page"
                href="/"
                className="m-auto mt-8 font-bold text-2xl"
              >
                Home Page
              </a>

              <a
                href="/technologies"
                className="m-auto mt-8 font-bold text-2xl"
              >
                Technologies
              </a>

              <a
                href="/case-studies"
                className="m-auto mt-8 font-bold text-2xl"
              >
                Case Studies
              </a>

              {/* <a
                href="/futurology"
                className="m-auto mt-8 hover:underline font-bold text-2xl"
              >
                Futurology
              </a> */}
              <p className="m-auto mt-8">
                <button className="bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-full text-3xl">
                  <a title="Contact" href="/contact">
                    Contact
                  </a>
                </button>
              </p>
            </div>
          </section>
        ) : null}
      </nav>
      {props.wave === true ? (
        <svg
          className="-mb-10 lg:-mb-40 -mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,32L80,58.7C160,85,320,139,480,144C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      ) : null}
    </>
  );
}
