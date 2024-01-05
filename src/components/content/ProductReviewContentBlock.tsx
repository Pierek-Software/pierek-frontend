import GetProductInput from "./atomic/GetProductInput";
import Opinions from "./atomic/Opinions";

function ProductReviewContentBlock(props) {
  return (
    <div className="mt-4">
      <GetProductInput {...props} />
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
