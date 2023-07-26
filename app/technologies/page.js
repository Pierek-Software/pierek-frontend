/* eslint-disable @next/next/no-img-element */

const { default: Footer } = require("../../components/templates/Footer");
const { default: Navbar } = require("../../components/templates/Navbar");

const technologies = [
  {
    id: 1,
    title: "JavaScript",
    category: 0,
    iconPath: "javascript.svg",
  },

  {
    id: 2,
    title: "TypeScript",
    category: 0,
    iconPath: "typescript.svg",
  },
  {
    id: 3,
    title: "PostgresSQL",
    category: 1,
    iconPath: "postgresql.svg",
  },
  {
    id: 4,
    title: "MySQL",
    category: 1,
    iconPath: "mysql.svg",
  },
  {
    id: 5,
    title: "Redis",
    category: 1,
    iconPath: "redis.svg",
  },
  {
    id: 6,
    title: "Elasticsearch",
    category: 1,
    iconPath: "elasticsearch.svg",
  },
  {
    id: 7,
    title: "MongoDB",
    category: 1,
    iconPath: "mongodb.svg",
  },
];

const categoryToCategoryName = {
  0: "Programming Languages",
  1: "Databases",
};

const technologiesGroupedByCategory = technologies.reduce((acc, cur) => {
  const { category } = cur;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(cur);
  return acc;
}, {});

function TechnologyNode({ category }) {
  return (
    <section className="mt-4">
      <h3 className="text-lg font-extrabold">
        {categoryToCategoryName[category]}
      </h3>
      <div className="flex flex-wrap justify-center border-black border-4">
        {Object.values(technologiesGroupedByCategory[category]).map(
          (technology) => {
            console.log(technology);
            return (
              <div
                key={technology.id}
                className="px-4 py-2 m-2 rounded border border-black hover:bg-slate-200 hover:cursor-pointer"
              >
                <img
                  className="h-10 w-10 m-auto"
                  src={`/icons/${technology.iconPath}`}
                  alt={technology.title}
                />
                <h2 className="text-center text-black text-lg font-semibold">
                  {technology.title}
                </h2>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <>
      <Navbar background wave />
      <main className="mx-auto container">
        <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
          Technologies
        </h1>
        <p className="text-2xl md:text-4xl font-light">
          Because choosing right tools is crucial
        </p>

        <TechnologyNode category={0} />
        <TechnologyNode category={1} />
      </main>

      <Footer />
    </>
  );
}

export default Technologies;
