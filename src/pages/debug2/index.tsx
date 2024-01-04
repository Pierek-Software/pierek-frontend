import { useState } from "react";
import set from "lodash.set";
import get from "lodash.get";
import QuickListContentBlock from "../../components/content/QuickListContentBlock";
import ProductReviewContentBlock from "../../components/content/ProductReviewContentBlock";
import Page from "../../components/content/Page";

const SectionTypes = ["markdown", "product_review", "quick_list"];

export type HandleChangeType = "section-quickLink-advantage";

const HomePage = () => {
  const [pageData, setPageData] = useState({});
  const [sections, setSections] = useState([
    { type: "markdown", value: {} },
    { type: "product_review", value: {} },
  ]);

  const handlePageChange = (key, value) => {
    const updatedPageData = { ...pageData, [key]: value };
    setPageData(updatedPageData);
  };

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
    setSections(output);
    return output;
  }

  const handleAddSection = () => {
    const newSection = { type: "", value: {} };
    setSections([...sections, newSection]);
  };

  const handleTypeChange = (index, selectedType) => {
    const updatedSections = [...sections];
    updatedSections[index].type = selectedType;
    updatedSections[index].value = {};

    if (selectedType === "quick_list") {
      updatedSections[index].value = [];
    }

    setSections(updatedSections);
  };

  const handleRemoveSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const handleChange = (contentIndex, path, value) => {
    const updatedSections = [...sections];
    set(updatedSections[contentIndex], path, value);
    setSections(updatedSections);
  };

  const handleRemoveQuickList = (contentIndex, quickListIndex) => {
    const updatedSections = [...sections];
    updatedSections[contentIndex].value.splice(quickListIndex, 1);
    setSections(updatedSections);
  };

  const handleAdd = (contentIndex, path, value) => {
    const updatedSections = [...sections];

    let originalValue = get(updatedSections[contentIndex], path);
    if (!originalValue) {
      originalValue = [];
    }

    set(updatedSections[contentIndex], path, [...originalValue, value]);

    setSections(updatedSections);
  };

  const handleOutputJson = () => {
    // console.log(JSON.stringify({ ...pageData, sections }, null, 2));
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Page Builder</h1>
      <Page handlePageChange={handlePageChange} pageData={pageData} />
      {sections.map((section, contentIndex) => (
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
              sections={sections}
              contentIndex={contentIndex}
              handleAdd={handleAdd}
              handleChange={handleChange}
            />
          )}

          <div className="mt-2 flex">
            <button
              className="mr-1 w-1/2 rounded bg-blue-500 p-2 text-white"
              onClick={() => move(sections, contentIndex, -1)}
            >
              Move Up
            </button>
            <button
              onClick={() => move(sections, contentIndex, 1)}
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

      <div className="m-5">{JSON.stringify(sections)}</div>
    </div>
  );
};

export default HomePage;
