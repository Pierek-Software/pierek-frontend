import { DiscoverMoreButton } from "../atom/Button";
import ArticleCard from "../molecules/ArticleCard";
import data from "../../data/case-studies.json";

function CaseStudiesSection() {
  return (
    <section className="container mx-auto">
      <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-gray-900">
        Case Studies
      </h1>
      <p className="text-2xl md:text-4xl font-light">
        Because proof of work is interesting
      </p>
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="flex md:flex-row flex-col md:max-w-6xl">
          <section className="mt-8 flex flex-wrap justify-center">
            <div key={data[0].id} className="p-3">
              <ArticleCard {...data[0]} />
            </div>
            <div key={data[1].id} className="p-3">
              <ArticleCard {...data[1]} />
            </div>
          </section>
        </div>
        <DiscoverMoreButton url="/case-studies" />
      </div>
    </section>
  );
}

export default CaseStudiesSection;
