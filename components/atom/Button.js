export function DiscoverMoreButton(props) {
  return (
    <a href={props.url}>
      <div className="flex flex-col justify-center items-center text-center">
        <i className="fas fa-angle-double-right text-6xl md:text-8xl hover:text-slate-500 cursor-pointer"></i>
        <span>Discover more</span>
      </div>
      {/* <img className="h-40 w-auto mx-auto" src="/splash.svg" />
      <p
        className="relative text-lg 
      md:-top-20
      -top-20 left-5"
      >
        Discover more
      </p> */}
    </a>
  );
}
