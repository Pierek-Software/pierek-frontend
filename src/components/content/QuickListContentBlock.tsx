import ApiClient from "../../api";
import Opinions from "./atomic/Opinions";

const apiClient = new ApiClient();

function QuickListContentBlock(props) {
  return (
    <>
      <div>
        {props.section?.value?.map(
          (
            quickListItemValue: {
              product_id: any;
              advantages: any[];
              disadvantages: any[];
            },
            quickListItemIndex: any,
          ) => {
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
                <label className="mb-2 block">Product ID</label>
                <input
                  type="text"
                  value={quickListItemValue?.product_id || ""}
                  onChange={async (e) => {
                    props.handleChange(
                      props.contentIndex,
                      `value[${quickListItemIndex}].product_id`,
                      e.target.value,
                    );

                    const api = await apiClient.getProductById(+e.target.value);

                    props.handleChange(
                      props.contentIndex,
                      `value[${quickListItemIndex}].product`,
                      api,
                    );
                  }}
                  className="w-full border p-2"
                  placeholder="Product Name"
                />

                <Opinions
                  handleAdd={props.handleAdd}
                  handleChange={props.handleChange}
                  contentIndex={props.contentIndex}
                  quickListItemValue={quickListItemValue}
                  quickListItemIndex={quickListItemIndex}
                />
              </div>
            );
          },
        )}
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
