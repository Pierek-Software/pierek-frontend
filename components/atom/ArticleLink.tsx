export function GithubLink({ url }) {
  return (
    <section className="mt-8 flex justify-center border-2 hover:cursor-pointer p-1 rounded">
      <a target="_blank" rel="noreferrer" href={url}>
        <h2 className="flex  justify-center items-center text-2xl py-1 md:text-2xl font-bold">
          <span>
            <img alt="Github Logo" src="/icons/github.svg" />
          </span>
          Github Link 🔗
        </h2>
      </a>
    </section>
  );
}
