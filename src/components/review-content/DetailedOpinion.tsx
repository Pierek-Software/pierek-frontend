import { Header } from "../Typography";

export const DetailedOpinions = ({ advantages, disadvantages, brand }) => {
  return (
    <div className="text-justify md:ml-3">
      <Header linkable={false} level={4}>
        {`${brand.name} is good because:`}
      </Header>
      <div className="flex flex-col text-left">
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md md:my-0">
          {advantages.map((advantageDetailed, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span className="mr-2">✅</span>
                {advantageDetailed}
              </p>
            );
          })}
        </div>

        <Header linkable={false} level={4}>
          {`${brand.name} is bad because:`}
        </Header>
        <div className="my-1 flex flex-col items-stretch justify-stretch rounded-md md:my-0">
          {disadvantages.map((disadvantageDetailed, index) => {
            return (
              <p key={index} className="my-2 flex">
                <span className="mr-2">❌</span>
                {disadvantageDetailed}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
