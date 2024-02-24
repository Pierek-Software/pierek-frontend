import ClientLayout from "../layouts/ClientLayout";

export default function Page() {
  return (
    <ClientLayout
      title="404 Page"
      description="404 Page"
      keywords={["404 Page"]}
      author={""}
      structuredDataJSON={""}
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "404", link: "#" },
      ]}
    >
      <h1 className="mx-auto text-center text-5xl font-bold md:text-8xl">
        404 Not Found
      </h1>
    </ClientLayout>
  );
}
