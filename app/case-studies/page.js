import ArticleCard from "../../components/molecules/ArticleCard";

const { default: Footer } = require("../../components/templates/Footer");
const { default: Navbar } = require("../../components/templates/Navbar");

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

function CaseStudies() {
  return (
    <main>
      <Navbar background wave />

      <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black container mx-auto">
        Case Studies
      </h1>
      <p className="text-2xl md:text-4xl font-light container mx-auto">
        Because proof of work is interesting
      </p>
      <section className="container mt-8 mx-auto flex flex-wrap justify-center">
        {data.map((item) => (
          <div key={item.id} className="p-3">
            <ArticleCard {...item} />
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
export default CaseStudies;
