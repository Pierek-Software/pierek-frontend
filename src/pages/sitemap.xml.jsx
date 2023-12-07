import ApiClient from "../api/index";

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const apiClient = new ApiClient();

  const response = await apiClient.getSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.write(response);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
