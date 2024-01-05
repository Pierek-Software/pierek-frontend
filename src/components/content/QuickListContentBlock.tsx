import GetProductInput from "./atomic/GetProductInput";
import Opinions from "./atomic/Opinions";

function QuickListContentBlock(props) {
  return (
    <>
      <div>
        {props.contentBlock?.value?.map((_, quickListItemIndex: any) => {
          return (
            <div
              className="m-5 border-2 p-5"
              key={`quickListItem-${quickListItemIndex}`}
            >
              <div className="flex justify-end">
                <button
                  onClick={(e) =>
                    props.handleRemoveQuickList(
                      props.contentIndex,
                      quickListItemIndex,
                    )
                  }
                  className="my-2 rounded bg-red-900 p-2 text-white"
                >
                  Delete Quick List
                </button>
              </div>

              <GetProductInput
                handleChangeGeneric={props.handleChangeGeneric}
                handleGetGeneric={props.handleGetGeneric}
                rootPath={`contentBlocks[${props.contentIndex}].value[${quickListItemIndex}]`}
              />

              <label className="my-5">Description</label>
              <textarea
                value={props.handleGetGeneric(
                  `contentBlocks[${props.contentIndex}].value[${quickListItemIndex}].description`,
                )}
                onChange={(e) =>
                  props.handleChangeGeneric(
                    `contentBlocks[${props.contentIndex}].value[${quickListItemIndex}].description`,
                    e.target.value,
                  )
                }
                className="h-40 w-full border-2"
              />

              <Opinions
                handleAddGeneric={props.handleAddGeneric}
                handleChangeGeneric={props.handleChangeGeneric}
                handleGetGeneric={props.handleGetGeneric}
                rootPath={`contentBlocks[${props.contentIndex}].value[${quickListItemIndex}]`}
              />
            </div>
          );
        })}
      </div>

      <button
        className="my-2 rounded bg-green-400 p-2 text-white"
        onClick={() =>
          props.handleAdd(props.contentIndex, `value`, {
            product_id: 0,
            advantages: [],
            disadvantages: [],
          })
        }
      >
        + Add Quick Item
      </button>
    </>
  );
}

export default QuickListContentBlock;
