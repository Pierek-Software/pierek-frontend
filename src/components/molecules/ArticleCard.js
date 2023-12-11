const categoryToIcon = {
  finance: <i className="fa-solid fa-coins h-6 w-6 pl-2"></i>,
  media: <i className="fa-solid fa-photo-film h-6 w-6 pl-2"></i>,
};

function ArticleCard({ nda, title, description, category }) {
  return (
    <div className="flex h-full max-w-sm flex-col overflow-hidden rounded shadow-md">
      <div className="flex-1 p-6">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <div className="mb-2 text-lg font-semibold">
          {nda === true ? (
            <>
              <span> Client: NDA</span>
              <i className="fa-solid fa-lock pl-2"></i>
            </>
          ) : (
            "Hello World"
          )}
        </div>
        <div className="mb-2 font-medium">
          <>
            <span>Category: {category}</span>
            {categoryToIcon[category.toLowerCase()]}
          </>
        </div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
