"use client";

import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";
import React, { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef(null);

  const [copy, setCopy] = useState(false);

  const handleCopyToClipboard = () => {
    if (inputRef.current) {
      const tempInput = document.createElement("input");
      tempInput.value = inputRef.current.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      setCopy(true);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-slate-800 to-slate-950 h-screen">
        <Navbar background={false} wave={false} />
        <section className="flex md:flex-row flex-col justify-center items-center font-extrabold text-white text-center text-2xl md:text-8xl mt-28 md:mt-40">
          <h2 className="pr-3" id="email" ref={inputRef}>
            contact@pierek.com
          </h2>

          <button
            onClick={() => {
              handleCopyToClipboard();
            }}
            id="copyEmailButton"
            className=" bg-slate-700 mt-4 hover:bg-slate-950 text-xl md:text-2xl text-white font-bold py-2 px-4 rounded-full"
          >
            {copy === true ? "Copied" : "Copy"}
          </button>
        </section>

        <p className="text-sm pt-5 text-white text-center md:text-4xl font-light">
          Because contact should be easy
        </p>
      </section>

      <Footer wave={false} />
    </>
  );
}
