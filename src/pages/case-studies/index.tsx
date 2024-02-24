import data from "../../data/case-studies.json";

import ClientLayout from "../../layouts/ClientLayout";

function CaseStudies() {
  return (
    <ClientLayout
      title="Case Studies"
      description="Get information about how Kamil Wilim solve problems in companies, building trust in internet as a new generation brand"
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "Case Studies", link: "#" },
      ]}
      keywords={["Case Studies"]}
      author={"Kamil Wilim"}
      structuredDataJSON={""}
    >
      <h1 className="text-4xl font-bold text-black md:text-8xl">
        Case Studies
      </h1>
      <p className="text-2xl font-light md:text-4xl">
        Kamil Wilim proof of work
      </p>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {data.map((item, index) => (
          <div key={index}>
            <CaseStudyCard {...item} />
          </div>
        ))}
      </section>
    </ClientLayout>
  );
}
export default CaseStudies;

export function CaseStudyCard({
  nda,
  title,
  description,
  category,
  client,
  clientUrl,
  provider,
  providerUrl,
  notables,
}) {
  return (
    <div className="flex h-full flex-col rounded-lg text-gray-900 shadow">
      <div className="space-y-3 p-5 ">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-lg font-semibold md:min-h-14">
          {nda === true ? (
            <>
              <span> Client: NDA</span>
              <i className="fa-solid fa-lock pl-2"></i>
            </>
          ) : (
            <>
              <div>
                <span>Client: </span>
                <a
                  className="hover:underline"
                  href={clientUrl}
                  target="blank"
                  rel="nofollow"
                >
                  {client}
                </a>
              </div>
              <div>
                <span>Provider: </span>
                <a
                  className="hover:underline"
                  href={providerUrl}
                  target="blank"
                  rel="nofollow"
                >
                  {provider}
                </a>
              </div>
            </>
          )}
        </div>
        <div className="font-lg">
          <span>Industry: {category}</span>
        </div>
        <ul className="list-inside list-disc text-base md:min-h-20">
          {notables?.map((notable, index) => {
            return (
              <li className="" key={index}>
                {notable}
              </li>
            );
          })}
        </ul>
        <p className="text-base text-gray-800">{description}</p>
      </div>
    </div>
  );
}
