interface IBreadcrumb {
  name: string;
  link: string;
}

export type IBreadcrumbsProps = {
  breadcrumbs: IBreadcrumb[];
  theme?: "default" | "dark";
};

const Breadcrumbs = ({ breadcrumbs, theme = "default" }: IBreadcrumbsProps) => {
  return (
    <nav className="container my-5">
      <ol className="inline-flex list-none p-0">
        {breadcrumbs.map((breadcrumb, index) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <li key={index} className="flex items-center">
                <span
                  className={`text-md ${
                    theme === "default" ? "text-slate-950" : "text-white"
                  }`}
                >
                  {breadcrumb.name}
                </span>
              </li>
            );
          }
          return (
            <li key={index} className="flex items-center">
              <a
                href={breadcrumb.link}
                className={`text-md ${
                  theme === "default" ? "text-slate-500" : "text-slate-200"
                }`}
              >
                {breadcrumb.name}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={theme === "default" ? "black" : "white"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mx-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
