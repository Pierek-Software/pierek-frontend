import { Header, DictionaryLink } from "../Typography";

export interface DictionaryProps {
  paragraphs: string[];
}

const Dictionary = (props: DictionaryProps) => {
  return (
    <nav className="flex flex-col md:ml-3 md:border-b-2 md:border-l-2 md:border-orange-400 md:pb-3 md:pl-3">
      <Header linkable={false} level={2}>
        Dictionary
      </Header>
      {props.paragraphs.map((text, index) => {
        return (
          <DictionaryLink
            classId={text}
            className="my-1 hover:underline"
            key={index}
          >
            {`${index + 1}. ${text}`}
          </DictionaryLink>
        );
      })}
    </nav>
  );
};

export default Dictionary;
