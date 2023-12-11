import timeline from "../../data/timeline";

const timelineSortedByDate = timeline.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

const tagToColor = {
  Frontend: "bg-green-100 text-green-800",
  Backend: "bg-red-100 text-red-800",
  "Software Development": "bg-slate-200 text-slate-800",
  "Artificial Intelligence": "bg-purple-100 text-purple-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  TypeScript: "bg-blue-100 text-blue-800",
  Design: "bg-orange-100 text-orange-800",
};

function TimelineNode(props) {
  return (
    <li className={`mb-10 ml-6`}>
      <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 ring-8 ring-white ">
        <svg
          className="h-2.5 w-2.5 text-slate-950"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900">
        {props.data.name}
        {props.latest === true ? (
          <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
            Latest
          </span>
        ) : null}
      </h3>
      <section className="mb-2 flex flex-wrap">
        {props?.data.tags?.map((tag) => (
          // eslint-disable-next-line react/jsx-key
          <span
            className={`${tagToColor[tag]} mr-2 mt-2 rounded px-2.5 py-0.5 text-sm font-medium text-gray-800`}
          >
            {tag}
          </span>
        ))}
      </section>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
        Released on {new Date(props.data.date).toLocaleDateString()}
      </time>
      <p
        className={`
          ${
            props.data.button ? "mb-4" : null
          } + "text-base text-gray-500" font-normal
            `}
      >
        {props.data.text}
      </p>
      {props.data.button ? (
        <a
          rel="noopener noreferrer nofollow"
          target="_blank"
          href={props.data.button.link}
          className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200"
        >
          <svg
            className="mr-2.5 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
          Learn more
        </a>
      ) : null}
    </li>
  );
}

function Timeline() {
  return (
    <ol className="relative mt-5 border-l border-gray-200">
      {timelineSortedByDate.map((timelineItem, index) => {
        return (
          <TimelineNode
            latest={index === 0 ? true : false}
            key={timelineItem.id}
            data={timelineItem}
          />
        );
      })}
    </ol>
  );
}

export default Timeline;
