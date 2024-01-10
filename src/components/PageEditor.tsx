import QuickListContentBlock from "./content/QuickListContentBlock";
import ProductReviewContentBlock from "./content/ProductReviewContentBlock";
import Page from "./content/Page";

const SectionTypes = ["markdown", "product_review", "quick_list"];

const PageEditor = (props) => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Page Builder</h1>
      <Page
        handleChangeGeneric={props.handleChangeGeneric}
        handleGetGeneric={props.handleGetGeneric}
      />
      {props.page?.contentBlocks?.map((contentBlock, contentBlockIndex) => (
        <div key={contentBlockIndex} className="my-4 border-2 p-5">
          <label className="my-2 block">Section Type</label>
          <select
            value={contentBlock.type}
            onChange={(e) =>
              props.handleTypeChange(contentBlockIndex, e.target.value)
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
                props.handleChangeGeneric(
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
              handleRemoveQuickList={props.handleRemoveQuickList}
              handleAdd={props.handleAdd}
              contentIndex={contentBlockIndex}
              handleGetGeneric={props.handleGetGeneric}
              handleChangeGeneric={props.handleChangeGeneric}
              handleAddGeneric={props.handleAddGeneric}
            />
          )}

          {contentBlock.type === "product_review" && (
            <ProductReviewContentBlock
              contentBlockIndex={contentBlockIndex}
              handleAddGeneric={props.handleAddGeneric}
              handleChangeGeneric={props.handleChangeGeneric}
              handleGetGeneric={props.handleGetGeneric}
              handleMoveGeneric={props.handleMoveGeneric}
              handleRemoveGeneric={props.handleRemoveGeneric}
            />
          )}

          <div className="mt-2 flex">
            <button
              className="mr-1 w-1/2 rounded bg-blue-500 p-2 text-white"
              onClick={() =>
                props.handleMoveGeneric(
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
                props.handleMoveGeneric(
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
            onClick={() => props.handleRemoveSection(contentBlockIndex)}
          >
            Remove Section
          </button>
        </div>
      ))}

      <button
        className="my-2 rounded bg-green-500 p-2 text-white"
        onClick={props.handleAddSection}
      >
        + Add Section
      </button>
    </div>
  );
};

export default PageEditor;
