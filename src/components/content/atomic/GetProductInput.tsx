import ApiClient from "../../../api";

function GetProductInput(props) {
  console.log("GET PRODUCT INPUT", props);
  const apiClient = new ApiClient();

  return (
    <div className="flex content-center items-center">
      <div className="w-full">
        <label className="mb-2 block">Product ID</label>
        <input
          type="text"
          value={props.valuePath.product_id || ""}
          onChange={async (e) => {
            props.handleChange(
              props.contentIndex,
              `value.product_id`,
              e.target.value,
            );

            const api = await apiClient.getProductById(+e.target.value);

            props.handleChange(
              props.contentIndex,
              `value.product`,
              api ? true : false,
            );
          }}
          className="w-full border p-2"
          placeholder="Product Name"
        />
      </div>
      <div>
        <p>{props.valuePath.product ? "OK" : "NOT OK"}</p>
      </div>
    </div>
  );
}

export default GetProductInput;
