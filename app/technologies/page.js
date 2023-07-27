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
  {
    id: 8,
    title: "GitHub",
    category: 2,
    iconPath: "github.svg",
  },
  {
    id: 8,
    title: "GitLab",
    category: 2,
    iconPath: "gitlab.svg",
  },
  {
    id: 9,
    title: "BitBucket",
    category: 2,
    iconPath: "bitbucket.svg",
  },
  { id: 10, title: "Next.js", category: 3, iconPath: "nextjs.svg" },
  { id: 11, title: "Nest.js", category: 3, iconPath: "nestjs.svg" },
  { id: 23, title: "Node.js", category: 3, iconPath: "nodejs.svg" },

  { id: 12, title: "Express", category: 4, iconPath: "express.svg" },
  { id: 13, title: "Koa", category: 4, iconPath: "koa.svg" },
  { id: 14, title: "React", category: 4, iconPath: "react.svg" },
  { id: 15, title: "ESLint", category: 4, iconPath: "eslint.svg" },
  { id: 16, title: "Prettier", category: 4, iconPath: "prettier.svg" },
  { id: 17, title: "Jest", category: 4, iconPath: "jest.svg" },
  { id: 18, title: "Mocha", category: 4, iconPath: "mocha.svg" },
  { id: 19, title: "Amazon Web Services", category: 5, iconPath: "aws.svg" },
  {
    id: 20,
    title: "Google Cloud Platfotm",
    category: 5,
    iconPath: "gcp.svg",
  },
  { id: 21, title: "Microsoft Azure", category: 5, iconPath: "azure.svg" },
  { id: 22, title: "Docker", category: 6, iconPath: "docker.svg" },
  { id: 23, title: "Kubernetes", category: 6, iconPath: "kubernetes.svg" },
];

const categoryToCategoryName = {
  0: "Programming Languages",
  1: "Databases",
  2: "Version Control Platforms",
  3: "Frameworks",
  4: "Libraries",
  5: "Cloud Platforms",
  6: "Containerization",
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
        <TechnologyNode category={6} />
        <TechnologyNode category={3} />
        <TechnologyNode category={2} />
        <TechnologyNode category={5} />
        <TechnologyNode category={1} />
        <TechnologyNode category={4} />
      </main>

      <Footer />
    </>
  );
}

export default Technologies;
