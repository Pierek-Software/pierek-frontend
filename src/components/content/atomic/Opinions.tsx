import { THandleGetGeneric, THandleChangeGeneric } from "../../../pages/debug2";

export interface IOpinionsProps {
  handleGetGeneric: THandleGetGeneric;
  handleChangeGeneric: THandleChangeGeneric;
  handleAddGeneric: any;
  rootPath: string;
}

export function Opinions(props: IOpinionsProps) {
  return (
    <div>
      {props
        .handleGetGeneric(props.rootPath)
        .advantages?.map((_, advantageIndex) => {
          return (
            <input
              type="text"
              value={props.handleGetGeneric(
                props.rootPath + `.advantages[${advantageIndex}]`,
              )}
              className="my-3 w-full border-2 p-5"
              key={`${props.rootPath}-advantages-${advantageIndex}`}
              onChange={(e) => {
                props.handleChangeGeneric(
                  props.rootPath + `.advantages[${advantageIndex}]`,
                  e.target.value,
                );
              }}
            />
          );
        })}
      <button
        className="my-2 w-full rounded bg-green-300 p-2 text-white"
        onClick={() =>
          props.handleAddGeneric(props.rootPath + `.advantages`, "Test")
        }
      >
        + Add Advantage
      </button>

      {props
        .handleGetGeneric(props.rootPath)
        ?.disadvantages?.map((disadvantage, advantageIndex: any) => {
          return (
            <input
              type="text"
              value={props.handleGetGeneric(
                props.rootPath + `.disadvantages[${advantageIndex}]`,
              )}
              className="my-3 w-full border-2 p-5"
              key={`${props.rootPath}-disadvantages-${advantageIndex}`}
              onChange={(e) =>
                props.handleChangeGeneric(
                  props.rootPath + `.disadvantages[${advantageIndex}]`,
                  e.target.value,
                )
              }
            />
          );
        })}
      <button
        className="my-2 w-full rounded bg-red-300 p-2 text-white"
        onClick={() =>
          props.handleAddGeneric(props.rootPath + `.disadvantages`, "Test")
        }
      >
        + Add Disadvantage
      </button>
    </div>
  );
}

export default Opinions;
