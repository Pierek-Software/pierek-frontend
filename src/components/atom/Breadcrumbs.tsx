interface IBreadcrumb {
  name: string;
  link: string;
}

export interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: IBreadcrumbsProps) => {
  return (
    <nav>
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs.map((breadcrumb, index) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <li key={index} className="flex items-center">
                <span className="text-sm md:text-lg text-slate-950">
                  {breadcrumb.name}
                </span>
              </li>
            );
          }
          return (
            <li key={index} className="flex items-center">
              <a
                href={breadcrumb.link}
                className="text-sm md:text-lg text-slate-500"
              >
                {breadcrumb.name}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mx-2"
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
