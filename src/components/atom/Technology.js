function Technology(props) {
  return (
    // <a href="">
    <div
      className="
    m-1 flex flex-col
    justify-center p-1
    hover:bg-slate-950 hover:text-white
    "
    >
      {props.src ? (
        <img
          style={{
            fill: "#000000",
          }}
          className="m-auto text-6xl"
          src={props.src}
        />
      ) : (
        <i className={`${props.icon} m-auto text-4xl md:text-6xl`}></i>
      )}

      <p className="text-md text-center md:text-lg">{props.name}</p>
    </div>
    // </a>
  );
}
export default Technology;
