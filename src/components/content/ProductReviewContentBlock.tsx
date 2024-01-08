import GetProductInput from "./atomic/GetProductInput";
import Opinions from "./atomic/Opinions";

function MarkdownInput(props) {
  return (
    <textarea
      value={props.handleGetGeneric(`${props.rootPath}.markdown`, "markdown")}
      onChange={(e) =>
        props.handleChangeGeneric(`${props.rootPath}.markdown`, e.target.value)
      }
      className="my-5 w-full border-2 p-5"
    />
  );
}

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
      <MarkdownInput
        rootPath={`contentBlocks[${props.contentBlockIndex}].value`}
        handleGetGeneric={props.handleGetGeneric}
        handleChangeGeneric={props.handleChangeGeneric}
      />
    </div>
  );
}

export default ProductReviewContentBlock;
