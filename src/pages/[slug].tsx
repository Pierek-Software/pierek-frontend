import { GetStaticPaths, GetStaticProps } from "next";
import ClientLayout from "../layouts/ClientLayout";

function Page() {
  return (
    <ClientLayout
      breadcrumbs={[{ name: "Home Page", link: "/" }]}
    ></ClientLayout>
  );
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slug: "can-apple-macbook-air-2020-m1-run-teamfight-tactics-tft",
        },
      },
    ],
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);

  return {
    props: {},
  };
};

export default Page;
