import { useEffect, useState } from "react";
import set from "lodash.set";
import get from "lodash.get";
import QuickListContentBlock from "../../../../components/content/QuickListContentBlock";
import ProductReviewContentBlock from "../../../../components/content/ProductReviewContentBlock";
import Page from "../../../../components/content/Page";
import ApiClient from "../../../../api";
import withAuth from "../../../../layouts/withAuth";
import { useRouter } from "next/router";

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

  const [page, setPage] = useState({});

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

  function move(array, index, offset) {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    let updatedIndex = index + offset;
    if (updatedIndex < 0) {
      updatedIndex++;
    } else if (updatedIndex >= array.length) {
      updatedIndex -= array.length;
    }
    output.splice(updatedIndex, 0, element);
    setPage((prevPage) => ({ ...prevPage, contentBlocks: output }));
    return output;
  }

  const handleAddSection = () => {
    const newSection = { type: "", value: {} };
    setPage({ ...page, contentBlocks: [...page.contentBlocks, newSection] });
  };

  const handleTypeChange = (index, selectedType) => {
    const updatedContentBlocks = [...page.contentBlocks];
    updatedContentBlocks[index].type = selectedType;
    updatedContentBlocks[index].value = {};

    if (selectedType === "quick_list") {
      updatedContentBlocks[index].value = [];
    }

    if (selectedType === "markdown") {
      updatedContentBlocks[index].value = "";
    }

    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  const handleRemoveSection = (index) => {
    const updatedContentBlocks = [...page.contentBlocks];
    updatedContentBlocks.splice(index, 1);
    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  const handleRemoveGeneric: THandleRemove = (path, index) => {
    const updatedContentBlocks = [...get(page, path, [])];
    updatedContentBlocks.splice(parseInt(index, 10), 1);
    handleChangeGeneric(path, updatedContentBlocks);
  };
  const handleAddGeneric = (path: string, value: any) => {
    const updatedPage = { ...page };

    let originalValue = get(page, path);
    if (!originalValue) {
      originalValue = [];
    }

    set(page, path, [...originalValue, value]);

    setPage(updatedPage);
  };

  const handleChangeGeneric = (path: string, value: any): void => {
    const updatedPage = { ...page };
    set(updatedPage, path, value);
    setPage(updatedPage);
  };

  const handleMoveGeneric: THandleMoveGeneric = (path, index, offset) => {
    const updatedContentBlocks = move(
      get(page, path, []),
      parseInt(index, 10),
      offset,
    );

    handleChangeGeneric(path, updatedContentBlocks);
  };

  const handleGetGeneric = (path: string) => {
    const value = get(page, path);
    return value;
  };

  const handleRemoveQuickList = (contentIndex, quickListIndex) => {
    const updatedContentBlocks = [...page.contentBlocks];
    updatedContentBlocks[contentIndex].value.splice(quickListIndex, 1);
    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  const handleAdd = (contentIndex, path, value) => {
    const updatedContentBlocks = [...page.contentBlocks];

    let originalValue = get(updatedContentBlocks[contentIndex], path);
    if (!originalValue) {
      originalValue = [];
    }

    set(updatedContentBlocks[contentIndex], path, [...originalValue, value]);

    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

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
