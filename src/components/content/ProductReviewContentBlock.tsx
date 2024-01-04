import ApiClient from "../../api";

const apiClient = new ApiClient();

function ProductReviewContentBlock(props) {
  return (
    <div className="mt-4">
      <label className="mb-2 block">Product ID</label>
      <input
        type="text"
        value={props.sections[props.contentIndex].product_id || ""}
        onChange={async (e) => {
          props.handleChange(props.contentIndex, `product_id`, e.target.value);

          const api = await apiClient.getProductById(+e.target.value);

          props.handleChange(props.contentIndex, `product`, api);
        }}
        className="w-full border p-2"
        placeholder="Product Name"
      />

      {props.sections[props.contentIndex].advantages?.map(
        (
          advantage: string | number | readonly string[],
          advantageIndex: any,
        ) => {
          return (
            <input
              type="text"
              value={advantage}
              className="bg-red-500"
              key={`advantage-${advantageIndex}`}
              onChange={(e) =>
                props.handleChange(
                  props.contentIndex,
                  `advantages[${advantageIndex}]`,
                  e.target.value,
                )
              }
            />
          );
        },
      )}

      <button
        className="my-2 w-1/3 rounded bg-green-300 p-2 text-white"
        onClick={() =>
          props.handleAdd(props.contentIndex, `advantages`, "Test")
        }
      >
        + Add Advantage
      </button>
    </div>
  );
}

export default ProductReviewContentBlock;
