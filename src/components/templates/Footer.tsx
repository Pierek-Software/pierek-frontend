import React from "react";
import { DefaultLink } from "../atom/Link";
import Logo from "../atom/Logo";

export interface FooterProps {
  wave?: boolean;
}

function Footer({ wave = true }: FooterProps) {
  return (
    <footer>
      {wave === true ? (
        <svg
          className="-mb-0.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#020617"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      ) : null}

      <div className="bg-slate-950 pb-8 text-white">
        <div
          className="container flex flex-col md:flex-row md:justify-around
        "
        >
          <div className="">
            <Logo className="mx-auto mt-3 h-6 w-auto md:mt-0" />
            <section className="mt-5 flex items-center justify-center self-center md:justify-start">
              <a
                title="Pierek Clutch.co"
                target="_blank"
                rel="nofollow"
                href="https://clutch.co/profile/pierek#highlights"
                className="w-16 md:w-20"
              >
                <img
                  title="Clutch.co Icon"
                  alt="Linked.in Icon"
                  src="/icons/clutchco.svg"
                />
              </a>

              <a
                title="Pierek LinkedIn"
                target="_blank"
                rel="nofollow"
                href="https://www.linkedin.com/company/pierek"
                className="ml-5 w-10 md:ml-3 md:w-14"
              >
                <img
                  title="LinkedIn Icon"
                  alt="LinkedIn Icon"
                  src="/icons/linkedin.svg"
                />
              </a>

              <a
                title="Pierek Twitter"
                target="_blank"
                rel="nofollow"
                href="https://twitter.com/Pierek_com"
                className="ml-5 w-7 md:ml-3 md:w-9"
              >
                <img
                  title="Twitter Icon"
                  alt="Twitter Icon"
                  src="/icons/twitter.svg"
                />
              </a>
            </section>
          </div>

          <div className="mt-3 flex flex-col md:mt-0">
            <h3 className="my-1 text-lg font-bold md:my-0">Services</h3>
            <DefaultLink name="TypeScript Development " href="/typescript" />
            <DefaultLink name="Node.js Development" href="/node-js" />
            <DefaultLink name="React.js Development " href="/react" />
            <DefaultLink name="Talent as a Service (TaaS)" href="/talents" />
            <DefaultLink name="Search Engine Optimization (SEO)" href="/seo" />
          </div>

          <div className="mt-3 flex flex-col md:mt-0">
            <h3 className="my-1 text-lg font-bold md:my-0">Information</h3>
            <DefaultLink name="Contact" href="/contact" />
            <DefaultLink name="Technologies" href="/technologies" />
            <DefaultLink name="Blog" href="/blog" />
            <DefaultLink name="Case Studies" href="/case-studies" />
          </div>
          <div className="mt-3 md:mt-0">
            <h3 className="my-1 text-lg font-bold md:my-0">Headquater</h3>
            <div>ul. Gliwicka 82</div>
            <div>Szczejkowice, 44-246</div>
            <div>Poland</div>
            <div>contact@pierek.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
