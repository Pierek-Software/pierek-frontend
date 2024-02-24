import React, { useRef, useState } from "react";
import ClientLayout from "../../layouts/ClientLayout";

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
    <ClientLayout
      title="Contact Page"
      description="Pierek contact page"
      keywords={["contact, information"]}
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "Contact", link: "#" },
      ]}
      author={""}
      structuredDataJSON={""}
    >
      <section className="flex flex-col items-center justify-center text-center text-2xl md:flex-row md:text-6xl">
        <h1 className="mr-3" id="email" ref={inputRef}>
          kamil.wilim@pierek.com
        </h1>

        <button
          onClick={() => {
            handleCopyToClipboard();
          }}
          id="copyEmailButton"
          className=" mt-4 rounded-full border-2 px-4 py-2 text-xl font-bold md:text-2xl"
        >
          {copy === true ? "Copied" : "Copy"}
        </button>
      </section>

      <h2 className="text-center text-sm font-light md:text-4xl">
        Because contact should be easy
      </h2>
    </ClientLayout>
  );
}
