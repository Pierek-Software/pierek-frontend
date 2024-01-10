import { useEffect } from "react";

import ApiClient from "../../../../api";
import withAuth from "../../../../layouts/withAuth";
import { useRouter } from "next/router";
import usePage from "../../../../hooks/admin/usePage";
import PageEditor from "../../../../components/PageEditor";

const HomePage = () => {
  const router = useRouter();
  const usePageHook = usePage();

  useEffect(() => {
    const getPageById = async () => {
      const apiClient = new ApiClient();
      const { id } = router.query;

      if (!id) {
        return;
      }

      const page = await apiClient.adminGetPageById(id as string);

      usePageHook.setPage({ ...page, contentBlocks: page.content });
    };

    getPageById();
  }, [router]);

  return (
    <div className="container">
      <PageEditor {...usePageHook} />
      <button
        className="my-2 rounded bg-yellow-500 p-2 text-white"
        onClick={() => {
          const apiClient = new ApiClient();
          apiClient.updatePage(usePageHook.page);
        }}
      >
        Update
      </button>
      <div className="m-5">{JSON.stringify(usePageHook.page)}</div>
    </div>
  );
};

export default withAuth(HomePage);
