import technologies from "../../data/technologies.json";
import {
  categoryToCategoryName,
  technologiesGroupedByCategory,
} from "../../mappers";
import ClientLayout from "../../layouts/ClientLayout";
import { ContactCTA } from "../../components/cta";

export interface TechnologyItemProps {
  id: string;
  name: string;
  iconPath: string;
}

function TechnologyItem(props: TechnologyItemProps) {
  return (
    <div
      className="m-4 rounded border border-gray-800 
      px-5 py-2 hover:cursor-pointer
     hover:bg-gray-200  lg:min-w-60"
    >
      <img
        className="m-auto h-10 w-10"
        src={`/icons/${props.iconPath}`}
        alt={props.name}
      />
      <h2 className="text-center text-lg font-semibold text-black">
        {props.name}
      </h2>
    </div>
  );
}

function TechnologyNode({ category }) {
  return (
    <section className="mt-4">
      <h3 className="text-lg font-extrabold">
        {categoryToCategoryName[category]}
      </h3>
      <div className="flex flex-wrap justify-center border-4 border-gray-800">
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
    <ClientLayout
      title="Technologies"
      description="Web development technologies that allow to build your ideas, refactor existing code to new one or add new fetures to existing codebase"
      keywords={["Technologies"]}
      author={"Kamil Wilim"}
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "Technologies", link: "#" },
      ]}
      structuredDataJSON={""}
    >
      <h1 className="text-4xl font-bold text-black md:text-8xl">
        Technologies
      </h1>
      <p className="text-2xl font-light md:text-4xl">
        What tools i use to build applications
      </p>

      <div className="mt-3 border-4 border-gray-800">
        <h2 className="bg-gray-800 py-2 pl-2 text-xl font-extrabold text-white">
          Frontend
        </h2>
        <div className="p-3">
          <TechnologyNode category={9} />
          {/* <TechnologyNode category={10} /> */}
          <TechnologyNode category={8} />
        </div>
      </div>

      <div className="mt-3 border-4 border-gray-800">
        <h2 className="bg-gray-800 py-2 pl-2 text-xl font-extrabold text-white">
          Backend
        </h2>
        <div className="p-3">
          <TechnologyNode category={3} />
          <TechnologyNode category={7} />

          <TechnologyNode category={1} />
        </div>
        {/* <TechnologyNode category={4} /> */}
      </div>

      <TechnologyNode category={0} />
      <TechnologyNode category={6} />

      <TechnologyNode category={2} />
      <TechnologyNode category={5} />

      <ContactCTA />
    </ClientLayout>
  );
}

export default Technologies;
