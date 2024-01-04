// pages/index.js

import { useState } from "react";
import ApiClient from "../../api";

const SectionTypes = ["markdown", "product_review", "quick_list"];

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

  const handleQuickItemEdit = (
    sectionIndex,
    quickListItemIndex,
    field,
    value,
  ) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].value[quickListItemIndex][field] = value;
    setSections(updatedSections);
  };

  const handleAddQuickItemAdvantage = (sectionIndex, quickListItemIndex) => {
    const newAdvantage = "";
    const updatedSections = [...sections];

    console.log(sectionIndex, quickListItemIndex);

    console.log(updatedSections[sectionIndex].value[quickListItemIndex]);

    if (
      !Array.isArray(
        updatedSections[sectionIndex].value[quickListItemIndex].advantages,
      )
    ) {
      updatedSections[sectionIndex].value[quickListItemIndex].advantages = [];
    }

    updatedSections[sectionIndex].value[quickListItemIndex].advantages = [
      ...updatedSections[sectionIndex].value[quickListItemIndex].advantages,
      newAdvantage,
    ];

    setSections(updatedSections);
  };

  const handleAddQuickItem = (sectionIndex) => {
    const newQuickItem = { product_id: undefined };

    // Create a copy of the sections array
    const updatedSections = [...sections];

    // Check if the value field is an array, if not, initialize it as an empty array
    if (!Array.isArray(updatedSections[sectionIndex].value)) {
      updatedSections[sectionIndex].value = [];
    }

    // Create a new array with the updated value field
    updatedSections[sectionIndex].value = [
      ...updatedSections[sectionIndex].value,
      newQuickItem,
    ];

    // Update the state with the new array
    setSections(updatedSections);
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

  const handleValueChange = (index, field, value) => {
    const updatedSections = [...sections];
    console.log(updatedSections[index]);
    updatedSections[index].value[field] = value;
    setSections(updatedSections);
  };

  const handleOutputJson = () => {
    console.log(JSON.stringify({ ...pageData, content: sections }, null, 2));
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
      {sections.map((section, index) => (
        <div key={index} className="my-4">
          <label className="my-2 block">Section Type</label>
          <select
            value={section.type}
            onChange={(e) => handleTypeChange(index, e.target.value)}
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
                      <>
                        <label className="mb-2 block">Product ID</label>
                        <input
                          type="text"
                          value={quickListItemValue.product_id || ""}
                          onChange={async (e) => {
                            handleQuickItemEdit(
                              index,
                              quickListItemIndex,
                              "product_id",
                              e.target.value,
                            );

                            const api = await apiClient.getProductById(
                              +e.target.value,
                            );
                            handleQuickItemEdit(
                              index,
                              quickListItemIndex,
                              "product",
                              api,
                            );
                          }}
                          className="w-full border p-2"
                          placeholder="Product Name"
                        />

                        <label className="mb-2 block">Product ID</label>
                        <input
                          type="text"
                          value={quickListItemValue.product_id || ""}
                          onChange={async (e) => {
                            handleQuickItemEdit(
                              index,
                              quickListItemIndex,
                              "product_id",
                              e.target.value,
                            );

                            const api = await apiClient.getProductById(
                              +e.target.value,
                            );
                            handleQuickItemEdit(
                              index,
                              quickListItemIndex,
                              "product",
                              api,
                            );
                          }}
                          className="w-full border p-2"
                          placeholder="Product Name"
                        />

                        {quickListItemValue.advantages?.map((advantage) => {
                          <p>{advantage}</p>;
                        })}
                        <div>
                          <button
                            onClick={(e) =>
                              handleAddQuickItemAdvantage(
                                index,
                                quickListItemIndex,
                              )
                            }
                          >
                            + Add Advantage
                          </button>
                        </div>

                        <p key={`quickListItem-${quickListItemIndex}`}>
                          {JSON.stringify(quickListItemValue)}
                        </p>
                      </>
                    );
                  },
                )}
              </div>

              <button onClick={(e) => handleAddQuickItem(index)}>
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
                  handleValueChange(index, "name", e.target.value)
                }
                className="w-full border p-2"
                placeholder="Product Name"
              />

              <label className="mb-2 mt-2 block">Product ASIN</label>
              <input
                type="text"
                value={section.value?.asin || ""}
                onChange={(e) =>
                  handleValueChange(index, "asin", e.target.value)
                }
                className="w-full border p-2"
                placeholder="Product ASIN"
              />
            </div>
          )}

          <button
            className="mt-2 rounded bg-red-500 p-2 text-white"
            onClick={() => handleRemoveSection(index)}
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
    </div>
  );
};

export default HomePage;
