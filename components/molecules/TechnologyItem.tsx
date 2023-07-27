import React from "react";

export interface TechnologyItemProps {
  id: string;
  name: string;
  iconPath: string;
}

function TechnologyItem(props: TechnologyItemProps) {
  return (
    <div
      className="px-5 py-2 m-4 
      rounded border border-black
     hover:bg-slate-200 hover:cursor-pointer"
    >
      <img
        className="h-10 w-10 m-auto"
        src={`/icons/${props.iconPath}`}
        alt={props.name}
      />
      <h2 className="text-center text-black text-lg font-semibold">
        {props.name}
      </h2>
    </div>
  );
}

export default TechnologyItem;
