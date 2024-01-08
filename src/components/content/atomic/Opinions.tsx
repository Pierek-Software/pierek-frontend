import {
  THandleGetGeneric,
  THandleChangeGeneric,
  THandleAddGeneric,
  THandleMoveGeneric,
  THandleRemove,
} from "../../../pages/debug";

export interface IOpinionsProps {
  handleGetGeneric: THandleGetGeneric;
  handleChangeGeneric: THandleChangeGeneric;
  handleAddGeneric: THandleAddGeneric;
  handleMoveGeneric: THandleMoveGeneric;
  handleRemoveGeneric: THandleRemove;
  rootPath: string;
}

export function Opinions(props: IOpinionsProps) {
  return (
    <div>
      {props
        .handleGetGeneric(props.rootPath)
        .advantages?.map((_, advantageIndex) => {
          return (
            <div
              className="flex items-center justify-center space-x-4"
              key={`${props.rootPath}-advantages-${advantageIndex}`}
            >
              <input
                type="text"
                value={props.handleGetGeneric(
                  props.rootPath + `.advantages[${advantageIndex}]`,
                )}
                className="my-3 w-full border-2 p-5"
                onChange={(e) => {
                  props.handleChangeGeneric(
                    props.rootPath + `.advantages[${advantageIndex}]`,
                    e.target.value,
                  );
                }}
              />
              <div className="flex items-center justify-between space-x-3">
                <button
                  onClick={(e) =>
                    props.handleMoveGeneric(
                      props.rootPath + `.advantages`,
                      advantageIndex,
                      -1,
                    )
                  }
                  className="h-8 w-8 rounded-full bg-slate-200"
                >
                  ⬆️
                </button>
                <button
                  onClick={(e) =>
                    props.handleMoveGeneric(
                      props.rootPath + `.advantages`,
                      advantageIndex,
                      1,
                    )
                  }
                  className="h-8 w-8 rounded-full bg-slate-200"
                >
                  ⬇️
                </button>
                <button
                  onClick={(e) =>
                    props.handleRemoveGeneric(
                      props.rootPath + `.advantages`,
                      advantageIndex,
                    )
                  }
                  className="h-8 w-8 rounded-full bg-slate-200"
                >
                  ❌
                </button>
              </div>
            </div>
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
