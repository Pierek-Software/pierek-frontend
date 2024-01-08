import {
  THandleChangeGeneric,
  THandleGetGeneric,
} from "../../pages/debug/index";

export interface IPageProps {
  handleChangeGeneric: THandleChangeGeneric;
  handleGetGeneric: THandleGetGeneric;
}

function Page(props: IPageProps) {
  return (
    <div>
      <div>
        <label className="mb-2 block">Title</label>
        <input
          value={props.handleGetGeneric("title") || ""}
          onChange={(e) => props.handleChangeGeneric("title", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Description</label>
        <input
          value={props.handleGetGeneric("description") || ""}
          onChange={(e) =>
            props.handleChangeGeneric("description", e.target.value)
          }
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Image</label>
        <input
          value={props.handleGetGeneric("image") || ""}
          onChange={(e) => props.handleChangeGeneric("image", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Author ID</label>
        <input
          value={props.handleGetGeneric("author_id") || ""}
          onChange={(e) =>
            props.handleChangeGeneric("author_id", e.target.value)
          }
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Created At</label>
        <input
          value={props.handleGetGeneric("created_at") || ""}
          onChange={(e) =>
            props.handleChangeGeneric("created_at", e.target.value)
          }
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Updated At</label>
        <input
          value={props.handleGetGeneric("updated_at") || ""}
          onChange={(e) =>
            props.handleChangeGeneric("updated_at", e.target.value)
          }
          className="w-full border p-2"
          type="text"
        />
      </div>
    </div>
  );
}

export default Page;
