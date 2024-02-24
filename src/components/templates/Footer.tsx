import React from "react";
import Logo from "../Logo";
import { Link } from "../Link";

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

      <div className="bg-gray-950 pb-8 text-white">
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

          <div className="my-3 flex flex-col space-y-2 md:space-y-0">
            <h3 className="text-lg font-bold">Services</h3>
            <Link href="/typescript">TypeScript Development</Link>
            <Link href="/node-js">Node.js Development</Link>
            <Link href="/react">React Development</Link>
            <Link href="/seo">Search Engine Optimization (SEO)</Link>
            <Link href="/security">Security</Link>
          </div>

          <div className="my-3 flex flex-col space-y-2 md:space-y-0">
            <h3 className="text-lg font-bold">Information</h3>
            <Link href="/contact">Contact</Link>
            <Link href="/technologies">Technologies</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/orgs/Pierek-Software/repositories"
            >
              Open Source
            </Link>

            <Link href="/policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service (ToS)</Link>
          </div>

          <div className="my-3 space-y-2 md:space-y-0">
            <h3 className="text-lg font-bold">Headquarter</h3>
            <div>Pierek LTD</div>
            <div>ul. Gliwicka 82</div>
            <div>44-246 Szczejkowice</div>
            <div>Poland</div>
            <div>kamil.wilim@pierek.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
