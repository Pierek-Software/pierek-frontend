import React from "react";
import { DefaultLink, OriginalLink } from "../atom/Link";
import Logo from "../atom/Logo";

export interface FooterProps {
  wave?: boolean;
}

function Footer({ wave = true }: FooterProps) {
  return (
    <footer>
      {wave === true ? (
        <svg
          className="mt-10 -mb-0.5"
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

      <div className="bg-slate-950 text-white pb-8">
        <div
          className="container flex flex-col md:flex-row md:justify-around
        "
        >
          <Logo className="hidden md:block h-5 md:h-6 lg:h-7 w-auto mx-auto" />
          <div className="flex flex-col mt-3 md:mt-0">
            <h3 className="text-md font-bold">Information</h3>
            <DefaultLink name="Technologies" href="/technologies" />
            <DefaultLink name="Case Studies" href="/case-studies" />
            <DefaultLink name="Futurology" href="/futurology" />
          </div>
          <div className="mt-3 md:mt-0">
            <h3 className="text-md font-bold">Headquater</h3>
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
