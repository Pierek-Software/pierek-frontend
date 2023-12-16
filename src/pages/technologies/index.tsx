import React from "react";

import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";
import technologies from "../../data/technologies.json";
import {
  categoryToCategoryName,
  technologiesGroupedByCategory,
} from "../../mappers";
import TechnologyItem from "../../components/molecules/TechnologyItem";
import { Header } from "../../components/Typography";
import HeadComponent from "../../components/atom/Head";

function TechnologyNode({ category }) {
  return (
    <section className="mt-4">
      <h3 className="text-lg font-extrabold">
        {categoryToCategoryName[category]}
      </h3>
      <div className="flex flex-wrap justify-center border-4 border-black">
        {Object.values(
          technologiesGroupedByCategory(technologies)[category],
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
      <HeadComponent
        title="Technologies"
        description="Web development technologies that allow to build your ideas, refactor existing code to new one or add new fetures to existing codebase"
      />
      <Navbar background wave />
      <main className="container mx-auto">
        <section>
          <h1 className="py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
            Technologies
          </h1>
          <p className="text-2xl font-light md:text-4xl">
            Because choosing technology is crucial
          </p>
        </section>

        <TechnologyNode category={0} />
        <TechnologyNode category={6} />
        <TechnologyNode category={3} />
        <TechnologyNode category={2} />
        <TechnologyNode category={5} />
        <TechnologyNode category={1} />
        <TechnologyNode category={4} />

        <section>
          <h2 className="py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
            Tools & Quality of Life
          </h2>
          <p className="text-2xl font-light md:text-4xl">
            Fast, Efficient, Gamebreaking
          </p>
        </section>

        <Header level={3}>Browser Addons</Header>

        <ul className="text-xl">
          <li>uBlock - block ads</li>
          <li>
            SponsorBlock - skip YouTube non interested part of video, skip
            sponsors, intro, outro
          </li>
          <li>JSON Formatter - nice looking JSON</li>
          <li>Bookmarks clean up - remove bookmarks duplication</li>
          <li>SEO META in 1 CLICK - All SEO information in one extension</li>
          <li>Poper Blocker - block pop ups, cookie consent</li>
        </ul>

        <section className="mt-8 flex justify-center rounded bg-gradient-to-b from-slate-700 to-slate-950 p-5 hover:cursor-pointer hover:from-slate-600 hover:to-slate-950">
          <a href="/contact">
            <h2 className="py-6 text-2xl font-bold text-white md:text-4xl">
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
