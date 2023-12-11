import { isoDateToRRRRMMDD } from "../../utils";
import { Header } from "../Typography";

const AuthorSection = ({
  avatar,
  firstName,
  lastName,
  description,
  createdDate,
  updatedDate,
}) => {
  return (
    <div className="">
      <Header level={2} linkable={false}>
        Author ✍️
      </Header>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${firstName} ${lastName}`}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{`${firstName} ${lastName}`}</h2>
          <p className="text-sm text-gray-500">Author</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="my-3">
          <p>{description}</p>
        </div>
        <p className="my-1 text-sm text-gray-600">
          Created: {isoDateToRRRRMMDD(createdDate)}
        </p>
        <p className="my-1 text-sm text-gray-600">
          Updated: {isoDateToRRRRMMDD(updatedDate)}
        </p>
      </div>
    </div>
  );
};
export default AuthorSection;
