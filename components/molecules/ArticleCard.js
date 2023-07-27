/* eslint-disable @next/next/no-img-element */
import {
  JavaScriptIcon,
  LambdaIcon,
  MicroserviceIcon,
  NodeJsIcon,
  TypeScriptIcon,
} from "../atom/Icon";

const categoryToIcon = {
  finance: <i className="pl-2 h-6 w-6 fa-solid fa-coins"></i>,
  media: <i className="pl-2 h-6 w-6 fa-solid fa-photo-film"></i>,
};

function ArticleCard({ nda, title, description, image, category, tags }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full">
      {/* <img className="w-full" src={image} alt="Sunset in the mountains" /> */}
      <div className="p-6 flex-1">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-semibold text-lg mb-2">
          {nda === true ? (
            <>
              <span> Client: NDA</span>
              <i className="pl-2 fa-solid fa-lock"></i>
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
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="py-3 flex justify-center align-middle border-t-2">
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
      </div>
    </div>
  );
}

export default ArticleCard;
