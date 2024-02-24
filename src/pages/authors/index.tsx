import ApiClient from "../../api";
import ClientLayout from "../../layouts/ClientLayout";

export default function Page({ authors }) {
  return (
    <ClientLayout
      title="Authors"
      description="Authors page"
      keywords={["authors"]}
      author={""}
      structuredDataJSON={""}
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "Authors", link: "#" },
      ]}
    >
      <section>
        <h1 className="text-4xl font-bold text-black md:text-8xl">Authors</h1>
        <p className="text-2xl font-light md:text-4xl">
          Because authority and trust is needed
        </p>
      </section>

      <div className="flex">
        {authors.map((author) => {
          return (
            <div key={author.id} className="md:max-w-sm">
              <a
                href={`/authors/${author.first_name.toLowerCase()}-${author.last_name.toLowerCase()}`}
              >
                <AuthorCard {...author} />
              </a>
            </div>
          );
        })}
      </div>
    </ClientLayout>
  );
}

export async function getStaticProps() {
  const apiClient = new ApiClient();
  const authors = await apiClient.getAuthors();
  return {
    props: { authors },
  };
}

const AuthorCard = ({ avatar, first_name, last_name, description }) => {
  return (
    <div className="rounded-md border-2 p-5">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${first_name} ${last_name}`}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{`${first_name} ${last_name}`}</h2>
          <p className="text-sm text-gray-700">Author</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="my-3 text-justify">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
