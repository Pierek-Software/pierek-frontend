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

      <main className="bg-slate-950 h-screen">
        <Navbar background={false} wave={false} />
        <div className="container">
          <Breadcrumbs
            theme="dark"
            breadcrumbs={[
              { name: "Home Page", link: "/" },
              { name: "Contact", link: "#" },
            ]}
          />
          <section className="flex md:flex-row flex-col justify-center items-center font-extrabold text-white text-center text-2xl md:text-6xl lg:text-8xl mt-28 md:mt-40">
            <h1 className="pr-3" id="email" ref={inputRef}>
              contact@pierek.com
            </h1>

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

          <h2 className="text-sm pt-5 text-white text-center md:text-4xl font-light">
            Because contact should be easy
          </h2>
        </div>
      </main>

      <Footer wave={false} />
    </>
  );
}
