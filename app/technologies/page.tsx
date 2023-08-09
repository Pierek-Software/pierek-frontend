import React from "react";

import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";
import technologies from "../../data/technologies.json";
import {
  categoryToCategoryName,
  technologiesGroupedByCategory,
} from "../../mappers";
import TechnologyItem from "../../components/molecules/TechnologyItem";

function TechnologyNode({ category }) {
  return (
    <section className="mt-4">
      <h3 className="text-lg font-extrabold">
        {categoryToCategoryName[category]}
      </h3>
      <div className="flex flex-wrap justify-center border-black border-4">
        {Object.values(
          technologiesGroupedByCategory(technologies)[category]
        ).map((technology: { id: string; title: string; iconPath: string }) => {
          return (
            <TechnologyItem
              key={technology.id}
              id={technology.id}
              name={technology.title}
              iconPath={technology.iconPath}
            />
          );
        })}
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <>
      <Navbar background wave />
      <main className="mx-auto container">
        <section>
          <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
            Technologies
          </h1>
          <p className="text-2xl md:text-4xl font-light">
            Because choosing right tools is crucial
          </p>
        </section>

        <TechnologyNode category={0} />
        <TechnologyNode category={6} />
        <TechnologyNode category={3} />
        <TechnologyNode category={2} />
        <TechnologyNode category={5} />
        <TechnologyNode category={1} />
        <TechnologyNode category={4} />

        <section className="mt-8 flex justify-center bg-gradient-to-b from-slate-700 to-slate-950 hover:from-slate-600 hover:to-slate-950 hover:cursor-pointer p-5 rounded">
          <a href="/contact">
            <h2 className="text-2xl py-6 md:text-4xl font-bold text-white">
              Interested in offer? <span className="underline">Contact us</span>
            </h2>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Technologies;
