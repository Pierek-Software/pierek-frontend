export function DiscoverMoreButton(props) {
  return (
    <a href={props.url}>
      <div className="flex flex-col items-center justify-center text-center">
        <i className="fas fa-angle-double-right cursor-pointer text-6xl hover:text-slate-500 md:text-8xl"></i>
        <span>Discover more</span>
      </div>
    </a>
  );
}
