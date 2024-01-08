import GetProductInput from "./atomic/GetProductInput";
import Opinions from "./atomic/Opinions";

function ProductReviewContentBlock(props) {
  return (
    <div className="mt-4">
      <GetProductInput
        rootPath={`contentBlocks[${props.contentBlockIndex}].value`}
        handleGetGeneric={props.handleGetGeneric}
        handleChangeGeneric={props.handleChangeGeneric}
      />
      <Opinions
        rootPath={`contentBlocks[${props.contentBlockIndex}].value`}
        handleGetGeneric={props.handleGetGeneric}
        handleChangeGeneric={props.handleChangeGeneric}
        handleAddGeneric={props.handleAddGeneric}
        handleMoveGeneric={props.handleMoveGeneric}
        handleRemoveGeneric={props.handleRemoveGeneric}
      />
    </div>
  );
}

export default ProductReviewContentBlock;
