import { DiscoverMoreButton } from "../atom/Button";
import ArticleCard from "../molecules/ArticleCard";
import data from "../../data/case-studies.json";

function CaseStudiesSection() {
  return (
    <section className="container mx-auto">
      <h1 className="py-2 text-4xl font-bold text-gray-900 md:py-5 md:text-8xl">
        Case Studies
      </h1>
      <p className="text-2xl font-light md:text-4xl">
        Because proof of work is interesting
      </p>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col md:max-w-6xl md:flex-row">
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
