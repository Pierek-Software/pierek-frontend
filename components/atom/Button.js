export function DiscoverMoreButton(props) {
  return (
    <a href={props.url}>
      <div className="flex flex-col justify-center items-center text-center">
        <i class="fas fa-angle-double-right text-6xl md:text-8xl hover:text-slate-500 cursor-pointer"></i>
        <span>Discover more</span>
      </div>
    </a>
  );
}
