import ApiClient from "../../../api";
import withAuth from "../../../layouts/withAuth";
import usePage from "../../../hooks/admin/usePage";
import PageEditor from "../../../components/PageEditor";

export type HandleChangeType = "section-quickLink-advantage";

export type THandleChangeGeneric = (path: string, value: any) => void;
export type THandleRemove = (path: string, index: string) => any;
export type THandleGetGeneric = (path: string) => any;
export type THandleAddGeneric = (path: string, value: any) => any;
export type THandleMoveGeneric = (
  path: string,
  index: string,
  offset: number,
) => any;

const HomePage = () => {
  const usePageHook = usePage({});
  return (
    <div>
      <PageEditor {...usePageHook} />
      <button
        onClick={() => {
          localStorage.removeItem("page");
        }}
      >
        Clear Cache
      </button>

      <button
        onClick={() => {
          const apiClient = new ApiClient();
          apiClient.createPage(usePageHook.page);
        }}
      >
        Create
      </button>
      <div className="m-5">{JSON.stringify(usePageHook.page)}</div>
    </div>
  );
};

export default withAuth(HomePage);
