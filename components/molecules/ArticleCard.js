import { JavaScriptIcon, TypeScriptIcon } from "../atom/Icon";

function ArticleCard({ nda, title, description, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full">
      {/* <img className="w-full" src={image} alt="Sunset in the mountains" /> */}
      <div className="px-6 py-4 flex-1">
        <div className="font-bold text-xl mb-2">{title}</div>

        <div className="font-semibold text-lg mb-2">
          {nda === true ? (
            <>
              <i className="fa-solid fa-lock"></i>
              <span className="ml-2">NDA</span>
            </>
          ) : (
            "Hello World"
          )}
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="py-3 flex justify-center align-middle bg-slate-400">
        <div className="px-3">
          <TypeScriptIcon />
        </div>
        <div className="px-3">
          <JavaScriptIcon />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
