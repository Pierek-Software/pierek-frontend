function Page(props) {
  return (
    <div>
      <div>
        <label className="mb-2 block">Title</label>
        <input
          value={props.pageData.title || ""}
          onChange={(e) => props.handlePageChange("title", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Description</label>
        <input
          value={props.pageData.description || ""}
          onChange={(e) =>
            props.handlePageChange("description", e.target.value)
          }
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Image</label>
        <input
          value={props.pageData.image || ""}
          onChange={(e) => props.handlePageChange("image", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Author ID</label>
        <input
          value={props.pageData.author_id || ""}
          onChange={(e) => props.handlePageChange("author_id", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Created At</label>
        <input
          value={props.pageData.created_at || ""}
          onChange={(e) => props.handlePageChange("created_at", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block">Updated At</label>
        <input
          value={props.pageData.updated_at || ""}
          onChange={(e) => props.handlePageChange("updated_at", e.target.value)}
          className="w-full border p-2"
          type="text"
        />
      </div>
    </div>
  );
}

export default Page;
