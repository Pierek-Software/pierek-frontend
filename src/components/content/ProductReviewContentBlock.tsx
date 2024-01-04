import ApiClient from "../../api";
import Opinions from "./atomic/Opinions";

const apiClient = new ApiClient();

function ProductReviewContentBlock(props) {
  return (
    <div className="mt-4">
      <label className="mb-2 block">Product ID</label>
      <input
        type="text"
        value={props.sections[props.contentIndex].value.product_id || ""}
        onChange={async (e) => {
          props.handleChange(
            props.contentIndex,
            `value.product_id`,
            e.target.value,
          );

          const api = await apiClient.getProductById(+e.target.value);

          props.handleChange(props.contentIndex, `value.product`, api);
        }}
        className="w-full border p-2"
        placeholder="Product Name"
      />

      <Opinions
        path={`value.`}
        handleAdd={props.handleAdd}
        handleChange={props.handleChange}
        contentIndex={props.contentIndex}
        opinionsObject={props.sections[props.contentIndex].value}
        keyPrefix={`key-quick-list-${props.contentIndex}`}
      />
    </div>
  );
}

export default ProductReviewContentBlock;
