function Technology(props) {
  return (
    <a href="">
      <div
        className="
    flex justify-center flex-col
    p-1 m-1
    hover:bg-slate-600 hover:text-white
    "
      >
        {props.src ? (
          <img
            style={{
              fill: "#000000",
            }}
            className="text-6xl m-auto"
            src={props.src}
          />
        ) : (
          <i className={`${props.icon} text-4xl md:text-6xl m-auto`}></i>
        )}

        <p className="text-md text-center md:text-lg">{props.name}</p>
      </div>
    </a>
  );
}
export default Technology;
