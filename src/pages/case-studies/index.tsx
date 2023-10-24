import ArticleCard from "../../components/molecules/ArticleCard";
import data from "../../data/case-studies.json";

const { default: Footer } = require("../../components/templates/Footer");
const { default: Navbar } = require("../../components/templates/Navbar");

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
