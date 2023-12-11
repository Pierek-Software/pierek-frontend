import {
  JavaScriptIcon,
  LambdaIcon,
  MicroserviceIcon,
  NodeJsIcon,
  TypeScriptIcon,
} from "../atom/Icon";

const categoryToIcon = {
  finance: <i className="fa-solid fa-coins h-6 w-6 pl-2"></i>,
  media: <i className="fa-solid fa-photo-film h-6 w-6 pl-2"></i>,
};

function ArticleCard({ nda, title, description, image, category, tags }) {
  return (
    <div className="flex h-full max-w-sm flex-col overflow-hidden rounded shadow-lg">
      {/* <img className="w-full" src={image} alt="Sunset in the mountains" /> */}
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
      {/* <div className="py-3 flex justify-center align-middle border-t-2">
        {tags
          .map((tag) => {
            switch (tag) {
              case "TypeScript":
                return <TypeScriptIcon />;
              case "JavaScript":
                return <JavaScriptIcon />;
              case "Microservice":
                return <MicroserviceIcon />;
              case "AWS":
                return (
                  <img
                    className="h-10 w-10 m-auto"
                    src={`/icons/aws.svg`}
                    alt="AWS"
                  />
                );
              case "Node.js":
                return <NodeJsIcon />;
              default:
                return <></>;
            }
          })
          .map((icon) => (
            <div key={icon} className="px-3">
              {icon}
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default ArticleCard;
