const timeline = [
  {
    id: 2,
    name: "Chat GPT 4.0",
    text: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    date: new Date("2022-01-01"),
    button: {
      link: "https://openai.com/gpt-4",
    },
  },
  {
    id: 1,
    name: "Chat GPT 3.5",
    text: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    date: new Date("2021-01-01"),
    button: undefined,
  },
  {
    id: 0,
    name: "Chat GPT 3.0",
    date: new Date("2020-01-01"),
    text: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
    button: {
      link: "https://openai.com/blog/chatgpt",
    },
  },
];

function TimelineNode(props) {
  return (
    <li class={`mb-10 ml-6`}>
      <span class="absolute flex items-center justify-center w-6 h-6 bg-slate-300 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          class="w-2.5 h-2.5 text-slate-950"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {props.data.name}
        {props.latest === true ? (
          <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
            Latest
          </span>
        ) : null}
      </h3>
      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Released on {props.data.date.toLocaleDateString()}
      </time>
      <p
        className={`
          ${
            props.data.button ? "mb-4" : null
          } + "text-base font-normal text-gray-500 dark:text-gray-400"
            `}
      >
        {props.data.text}
      </p>
      {props.data.button ? (
        <a
          rel="noopener noreferrer nofollow"
          target="_blank"
          href={props.data.button.link}
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <svg
            class="w-3.5 h-3.5 mr-2.5"
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
    <ol class="relative border-l mt-5 border-gray-200 dark:border-gray-700">
      {timeline.map((timelineItem, index) => {
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
