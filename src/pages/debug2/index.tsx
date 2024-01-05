import { useEffect, useState } from "react";
import set from "lodash.set";
import get from "lodash.get";
import QuickListContentBlock from "../../components/content/QuickListContentBlock";
import ProductReviewContentBlock from "../../components/content/ProductReviewContentBlock";
import Page from "../../components/content/Page";

const SectionTypes = ["markdown", "product_review", "quick_list"];

export type HandleChangeType = "section-quickLink-advantage";

const HomePage = () => {
  const [page, setPage] = useState({
    title: "",
    description: "",
    contentBlocks: [],
  });

  const handlePageChange = (key, value) => {
    const updatedPage = { ...page, [key]: value };
    setPage(updatedPage);
  };

  useEffect(() => {
    // Save to localStorage
    if (page.contentBlocks) {
      localStorage.setItem("contentBlocks", JSON.stringify(page.contentBlocks));
    }

    if (page.title) {
      localStorage.setItem("page", JSON.stringify(page));
    }
  }, [page.contentBlocks, page.title]);

  useEffect(() => {
    const savedPage = JSON.parse(localStorage.getItem("page"));
    const savedContentBlocks = JSON.parse(
      localStorage.getItem("contentBlocks"),
    );

    setPage(savedPage || page);
    setPage({ ...page, contentBlocks: savedContentBlocks });
  }, []);

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
    setPage({ ...page, contentBlocks: output });
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

  const handleChange = (contentIndex, path, value) => {
    const updatedContentBlocks = [...page.contentBlocks];
    set(updatedContentBlocks[contentIndex], path, value);
    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  const handleChangeGeneric = (path, value) => {
    console.log("PATH", path);
    console.log("VALUE", value);
    const updatedPage = { ...page };
    set(updatedPage, path, value);
    console.log(updatedPage);
    setPage(updatedPage);
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

  const handleOutputJson = () => {
    // console.log(JSON.stringify({ ...page, sections: contentBlocks }, null, 2));
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Page Builder</h1>
      <Page handlePageChange={handlePageChange} pageData={page} />
      {page.contentBlocks?.map((section, contentIndex) => (
        <div key={contentIndex} className="my-4 border-2 p-5">
          <label className="my-2 block">Section Type</label>
          <select
            value={section.type}
            onChange={(e) => handleTypeChange(contentIndex, e.target.value)}
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

          {section.type === "markdown" && (
            <textarea
              value={section.value}
              onChange={(e) =>
                handleChangeGeneric(
                  `contentBlocks[${contentIndex}].value`,
                  e.target.value,
                )
              }
              className="my-5 w-full border-2 p-5"
            />
          )}

          {section.type === "quick_list" && (
            <QuickListContentBlock
              section={section}
              handleRemoveQuickList={handleRemoveQuickList}
              handleAdd={handleAdd}
              contentIndex={contentIndex}
              handleChange={handleChange}
            />
          )}

          {section.type === "product_review" && (
            <ProductReviewContentBlock
              sections={page.contentBlocks}
              contentBlocks={page.contentBlocks}
              contentBlock={page.contentBlocks[contentIndex]}
              contentBlockIndex={contentIndex}
              contentIndex={contentIndex}
              handleAdd={handleAdd}
              handleChange={handleChange}
              valuePath={page.contentBlocks[contentIndex].value}
            />
          )}

          <div className="mt-2 flex">
            <button
              className="mr-1 w-1/2 rounded bg-blue-500 p-2 text-white"
              onClick={() => move(page.contentBlocks, contentIndex, -1)}
            >
              Move Up
            </button>
            <button
              onClick={() => move(page.contentBlocks, contentIndex, 1)}
              className="ml-1 w-1/2 rounded bg-blue-500 p-2 text-white"
            >
              Move Down
            </button>
          </div>

          <button
            className="mt-2 w-full rounded bg-red-500 p-2 text-white"
            onClick={() => handleRemoveSection(contentIndex)}
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

      <div className="mt-4">
        <button
          className="rounded bg-blue-500 p-2 text-white"
          onClick={handleOutputJson}
        >
          Output JSON
        </button>
      </div>

      <div className="m-5">{JSON.stringify(page)}</div>
    </div>
  );
};

export default HomePage;
