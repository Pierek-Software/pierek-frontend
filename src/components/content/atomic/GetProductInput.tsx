import ApiClient from "../../../api";
import { THandleChangeGeneric, THandleGetGeneric } from "../../../pages/debug2";

export interface IGetProductInputProps {
  handleGetGeneric: THandleGetGeneric;
  handleChangeGeneric: THandleChangeGeneric;
  rootPath: string;
}

function GetProductInput(props: IGetProductInputProps) {
  console.log("GET PRODUCT INPUT", props);
  const apiClient = new ApiClient();

  return (
    <div className="">
      <label className="mb-2 block">Product ID</label>
      <input
        type="text"
        value={props.handleGetGeneric(`${props.rootPath}.product_id`)}
        onChange={async (e) => {
          props.handleChangeGeneric(
            `${props.rootPath}.product_id`,
            e.target.value,
          );

          const api = await apiClient.getProductById(+e.target.value);

          props.handleChangeGeneric(
            `${props.rootPath}.product`,
            api && e.target.value !== "" ? true : false,
          );
        }}
        className="w-full border p-2"
        placeholder="Product Name"
      />
      <p>
        {props.handleGetGeneric(`${props.rootPath}.product`) ? "OK" : "NOT OK"}
      </p>
    </div>
  );
}

export default GetProductInput;
