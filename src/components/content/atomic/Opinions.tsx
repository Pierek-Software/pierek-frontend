export function Opinions(props) {
  return (
    <div>
      {props.opinionsObject?.advantages?.map(
        (
          advantage: string | number | readonly string[],
          advantageIndex: any,
        ) => {
          return (
            <input
              type="text"
              value={advantage}
              className="my-3 w-full border-2 p-5"
              key={`${props.keyPrefix}-${advantageIndex}`}
              onChange={(e) =>
                props.handleChange(
                  props.contentIndex,
                  props.path + `advantages[${advantageIndex}]`,
                  e.target.value,
                )
              }
            />
          );
        },
      )}
      <button
        className="my-2 w-full rounded bg-green-300 p-2 text-white"
        onClick={() =>
          props.handleAdd(props.contentIndex, props.path + `advantages`, "Test")
        }
      >
        + Add Advantage
      </button>

      {props.opinionsObject?.disadvantages?.map(
        (
          disadvantage: string | number | readonly string[],
          advantageIndex: any,
        ) => {
          return (
            <input
              type="text"
              value={disadvantage}
              className="my-3 w-full border-2 p-5"
              key={`${props.keyPrefix}-${advantageIndex}`}
              onChange={(e) =>
                props.handleChange(
                  props.contentIndex,
                  props.path + `disadvantages[${advantageIndex}]`,
                  e.target.value,
                )
              }
            />
          );
        },
      )}
      <button
        className="my-2 w-full rounded bg-red-300 p-2 text-white"
        onClick={() =>
          props.handleAdd(
            props.contentIndex,
            props.path + `disadvantages`,
            "Test",
          )
        }
      >
        + Add Disadvantage
      </button>
    </div>
  );
}

export default Opinions;
