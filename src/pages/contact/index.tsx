import Breadcrumbs from "../../components/atom/Breadcrumbs";
import HeadComponent from "../../components/atom/Head";
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
      <HeadComponent
        title="Contact Page"
        description="Pierek contact page"
        keywords={["contact, information"]}
      />

      <main className="h-screen bg-slate-950">
        <Navbar background={false} wave={false} />
        <div className="container">
          <Breadcrumbs
            theme="dark"
            breadcrumbs={[
              { name: "Home Page", link: "/" },
              { name: "Contact", link: "#" },
            ]}
          />
          <section className="mt-28 flex flex-col items-center justify-center text-center text-2xl font-extrabold text-white md:mt-40 md:flex-row md:text-6xl lg:text-8xl">
            <h1 className="pr-3" id="email" ref={inputRef}>
              contact@pierek.com
            </h1>

            <button
              onClick={() => {
                handleCopyToClipboard();
              }}
              id="copyEmailButton"
              className=" mt-4 rounded-full bg-slate-700 px-4 py-2 text-xl font-bold text-white hover:bg-slate-950 md:text-2xl"
            >
              {copy === true ? "Copied" : "Copy"}
            </button>
          </section>

          <h2 className="pt-5 text-center text-sm font-light text-white md:text-4xl">
            Because contact should be easy
          </h2>

          <section
            className="
          mt-3 text-center text-xl font-extrabold text-white
          md:mt-8 md:text-3xl
          "
          >
            <h1>Line: pierek</h1>
          </section>
        </div>
      </main>

      <Footer wave={false} />
    </>
  );
}
