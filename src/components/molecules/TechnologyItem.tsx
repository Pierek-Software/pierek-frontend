import React from "react";

export interface TechnologyItemProps {
  id: string;
  name: string;
  iconPath: string;
}

function TechnologyItem(props: TechnologyItemProps) {
  return (
    <div
      className="m-4 rounded border 
      border-black px-5 py-2
     hover:cursor-pointer hover:bg-slate-200"
    >
      <img
        className="m-auto h-10 w-10"
        src={`/icons/${props.iconPath}`}
        alt={props.name}
      />
      <h2 className="text-center text-lg font-semibold text-black">
        {props.name}
      </h2>
    </div>
  );
}

export default TechnologyItem;
