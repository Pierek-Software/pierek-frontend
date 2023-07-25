import { DiscoverMoreButton } from "../atom/Button";
import ArticleCard from "../molecules/ArticleCard";

const data = [
  {
    id: 0,
    title: "Microservice refactor in banking app",
    description:
      "Old microservice need to be upgraded from JavaScript to TypeScript, also upgrade database library and write tests.",
    image: "https://picsum.photos/1920/1080",
    nda: true,
  },
  {
    id: 1,
    title: "Microservice and code refactor in video streaming app",
    description:
      "New microservice for handling every file format preview, also refactor old codebase from JavaScript to TypeScript to be more readable and maintainable.",
    image: "https://picsum.photos/1920/1080",
    nda: true,
  },
];

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
            {data.map((item) => (
              <div key={item.id} className="p-3">
                <ArticleCard {...item} />
              </div>
            ))}
          </section>
        </div>
        <DiscoverMoreButton url="/case-studies" />
      </div>
    </section>
  );
}

export default CaseStudiesSection;
