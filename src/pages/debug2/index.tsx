// pages/index.js

import { useState } from "react";
import ApiClient from "../../api";
import set from "lodash.set";
import unset from "lodash.unset";
import get from "lodash.get";

const SectionTypes = ["markdown", "product_review", "quick_list"];

export type HandleChangeType = "section-quickLink-advantage";

const apiClient = new ApiClient();

const HomePage = () => {
  const [pageData, setPageData] = useState({});
  const [sections, setSections] = useState([]);

  const handlePageChange = (key, value) => {
    const updatedPageData = { ...pageData, [key]: value };
    setPageData(updatedPageData);
  };

  const handleAddSection = () => {
    const newSection = { type: "", value: {} };
    setSections([...sections, newSection]);
  };

  const handleTypeChange = (index, selectedType) => {
    const updatedSections = [...sections];
    updatedSections[index].type = selectedType;

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

    const originalValue = get(updatedSections[contentIndex], path);

    set(updatedSections[contentIndex], path, [...originalValue, value]);

    setSections(updatedSections);
  };

  const handleOutputJson = () => {
    console.log(JSON.stringify({ ...pageData, sections }, null, 2));
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Page Builder</h1>
      <div>
        <label className="mb-2 block">Title</label>
        <input
          value={pageData.title || ""}
          onChange={(e) => handlePageChange("title", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Description</label>
        <input
          value={pageData.description || ""}
          onChange={(e) => handlePageChange("description", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Image</label>
        <input
          value={pageData.image || ""}
          onChange={(e) => handlePageChange("image", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Created At</label>
        <input
          value={pageData.created_at || ""}
          onChange={(e) => handlePageChange("created_at", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Updated At</label>
        <input
          value={pageData.updated_at || ""}
          onChange={(e) => handlePageChange("updated_at", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
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
            <>
              <div>
                {section?.value?.map(
                  (quickListItemValue, quickListItemIndex) => {
                    return (
                      <div
                        className="m-5 border-2 p-5"
                        key={`quickListItem-${quickListItemIndex}`}
                      >
                        <div className="flex justify-end">
                          <button
                            onClick={(e) =>
                              handleRemoveQuickList(
                                contentIndex,
                                quickListItemIndex,
                              )
                            }
                            className="my-2 rounded bg-red-900 p-2 text-white"
                          >
                            Delete Quick List
                          </button>
                        </div>
                        <label className="mb-2 block">Product ID</label>
                        <input
                          type="text"
                          value={quickListItemValue?.product_id || ""}
                          onChange={async (e) => {
                            handleChange(
                              contentIndex,
                              `value[${quickListItemIndex}].product_id`,
                              e.target.value,
                            );

                            const api = await apiClient.getProductById(
                              +e.target.value,
                            );

                            handleChange(
                              contentIndex,
                              `value[${quickListItemIndex}].product`,
                              api,
                            );
                          }}
                          className="w-full border p-2"
                          placeholder="Product Name"
                        />

                        <div className="flex">
                          <button
                            className="my-2 w-1/3 rounded bg-green-300 p-2 text-white"
                            onClick={() =>
                              handleAdd(
                                contentIndex,
                                `value[${quickListItemIndex}].advantages`,
                                "Test",
                              )
                            }
                          >
                            + Add Advantage
                          </button>
                        </div>

                        {quickListItemValue?.advantages?.map(
                          (advantage, advantageIndex) => {
                            return (
                              <input
                                type="text"
                                value={advantage}
                                className="bg-red-500"
                                key={`advantage-${advantageIndex}`}
                                onChange={(e) =>
                                  handleChange(
                                    contentIndex,
                                    `value[${quickListItemIndex}].advantages[${advantageIndex}]`,
                                    e.target.value,
                                  )
                                }
                              />
                            );
                          },
                        )}
                      </div>
                    );
                  },
                )}
              </div>

              <button
                className="my-2 w-1/2 rounded bg-green-400 p-2 text-white"
                onClick={() =>
                  handleAdd(contentIndex, `value`, {
                    product_id: 0,
                    advantages: [],
                    disadvantages: [],
                  })
                }
              >
                + Add Quick Item
              </button>
            </>
          )}

          {section.type === "product_review" && (
            <div className="mt-4">
              <label className="mb-2 block">Product Name</label>
              <input
                type="text"
                value={section.value?.name || ""}
                onChange={(e) =>
                  handleChange(contentIndex, "value.name", e.target.value)
                }
                className="w-full border p-2"
                placeholder="Product Name"
              />

              <label className="mb-2 mt-2 block">Product ASIN</label>
              <input
                type="text"
                value={section.value?.asin || ""}
                onChange={(e) =>
                  handleChange(contentIndex, "value.asin", e.target.value)
                }
                className="w-full border p-2"
                placeholder="Product ASIN"
              />
            </div>
          )}

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

      <div className="m-5">{JSON.stringify({ pageData, sections })}</div>
    </div>
  );
};

export default HomePage;
