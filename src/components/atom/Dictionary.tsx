import { Header, DictionaryLink } from "../Typography";

export interface DictionaryProps {
  dictionaryItem: {
    name: string;
    value: string;
  }[];
}

const Dictionary = (props: DictionaryProps) => {
  return (
    <nav className="flex flex-col md:ml-3 md:border-b-2 md:border-l-2 md:border-orange-400 md:pb-3 md:pl-3">
      <Header linkable={false} level={2}>
        Dictionary
      </Header>
      {props.dictionaryItem.map((dictionaryItem, index) => {
        return (
          <DictionaryLink
            classId={dictionaryItem.value}
            className="my-1 hover:underline"
            key={index}
          >
            {`${index + 1}. ${dictionaryItem.name}`}
          </DictionaryLink>
        );
      })}
    </nav>
  );
};

export default Dictionary;
