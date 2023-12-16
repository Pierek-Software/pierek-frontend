import HeadComponent from "../../components/atom/Head";
import ArticleCard from "../../components/molecules/ArticleCard";
import data from "../../data/case-studies.json";

const { default: Footer } = require("../../components/templates/Footer");
const { default: Navbar } = require("../../components/templates/Navbar");

function CaseStudies() {
  return (
    <>
      <HeadComponent
        title="Case Studies"
        description="Get information about how pierek solve problems in companies, building trust in internet as a new generation brand"
      />
      <main>
        <Navbar background wave />

        <h1 className="container mx-auto py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
          Case Studies
        </h1>
        <p className="container mx-auto text-2xl font-light md:text-4xl">
          Because proof of work is interesting
        </p>
        <section className="container mx-auto mt-8 flex flex-wrap justify-center">
          {data.map((item) => (
            <div key={item.id} className="p-3">
              <ArticleCard {...item} />
            </div>
          ))}
        </section>
        <Footer />
      </main>
    </>
  );
}
export default CaseStudies;
