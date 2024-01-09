import { useEffect } from "react";

import QuickListContentBlock from "../../../../components/content/QuickListContentBlock";
import ProductReviewContentBlock from "../../../../components/content/ProductReviewContentBlock";
import Page from "../../../../components/content/Page";
import ApiClient from "../../../../api";
import withAuth from "../../../../layouts/withAuth";
import { useRouter } from "next/router";
import usePage from "../../../../hooks/admin/usePage";

const SectionTypes = ["markdown", "product_review", "quick_list"];

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
  const router = useRouter();
  const {
    page,
    setPage,
    handleAdd,
    handleAddGeneric,
    handleAddSection,
    handleChangeGeneric,
    handleGetGeneric,
    handleMoveGeneric,
    handleRemoveGeneric,
    handleRemoveQuickList,
    handleRemoveSection,
    handleTypeChange,
  } = usePage();

  useEffect(() => {
    const getPageById = async () => {
      const apiClient = new ApiClient();
      const { id } = router.query;

      if (!id) {
        return;
      }

      const page = await apiClient.adminGetPageById(id as string);

      setPage({ ...page, contentBlocks: page.content });
    };

    getPageById();
  }, [router]);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Page Builder</h1>
      <Page
        handleChangeGeneric={handleChangeGeneric}
        handleGetGeneric={handleGetGeneric}
      />
      {page?.contentBlocks?.map((contentBlock, contentBlockIndex) => (
        <div key={contentBlockIndex} className="my-4 border-2 p-5">
          <label className="my-2 block">Section Type</label>
          <select
            value={contentBlock.type}
            onChange={(e) =>
              handleTypeChange(contentBlockIndex, e.target.value)
            }
            className="w-full border p-2"
          >
            <option value="" disabled>
              Select Type
            </option>
            {SectionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {contentBlock.type === "markdown" && (
            <textarea
              value={contentBlock.value}
              onChange={(e) =>
                handleChangeGeneric(
                  `contentBlocks[${contentBlockIndex}].value`,
                  e.target.value,
                )
              }
              className="my-5 w-full border-2 p-5"
            />
          )}

          {contentBlock.type === "quick_list" && (
            <QuickListContentBlock
              contentBlock={contentBlock}
              handleRemoveQuickList={handleRemoveQuickList}
              handleAdd={handleAdd}
              contentIndex={contentBlockIndex}
              handleGetGeneric={handleGetGeneric}
              handleChangeGeneric={handleChangeGeneric}
              handleAddGeneric={handleAddGeneric}
            />
          )}

          {contentBlock.type === "product_review" && (
            <ProductReviewContentBlock
              contentBlockIndex={contentBlockIndex}
              handleAddGeneric={handleAddGeneric}
              handleChangeGeneric={handleChangeGeneric}
              handleGetGeneric={handleGetGeneric}
              handleMoveGeneric={handleMoveGeneric}
              handleRemoveGeneric={handleRemoveGeneric}
            />
          )}

          <div className="mt-2 flex">
            <button
              className="mr-1 w-1/2 rounded bg-blue-500 p-2 text-white"
              onClick={() =>
                handleMoveGeneric(
                  "contentBlocks",
                  contentBlockIndex.toString(),
                  -1,
                )
              }
            >
              Move Up
            </button>
            <button
              onClick={() =>
                handleMoveGeneric(
                  "contentBlocks",
                  contentBlockIndex.toString(),
                  1,
                )
              }
              className="ml-1 w-1/2 rounded bg-blue-500 p-2 text-white"
            >
              Move Down
            </button>
          </div>

          <button
            className="mt-2 w-full rounded bg-red-500 p-2 text-white"
            onClick={() => handleRemoveSection(contentBlockIndex)}
          >
            Remove Section
          </button>
        </div>
      ))}

      <button
        className="my-2 rounded bg-green-500 p-2 text-white"
        onClick={handleAddSection}
      >
        + Add Section
      </button>

      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear Cache
      </button>

      <button
        onClick={() => {
          const apiClient = new ApiClient();
          apiClient.updatePage(page);
        }}
      >
        Update
      </button>
      <div className="m-5">{JSON.stringify(page)}</div>
    </div>
  );
};

export default withAuth(HomePage);
