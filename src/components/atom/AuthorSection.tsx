const AuthorSection = ({
  avatar,
  firstName,
  lastName,
  createdDate,
  updatedDate,
}) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${firstName} ${lastName}`}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{`${firstName} ${lastName}`}</h2>
          <p className="text-gray-500 text-sm">Author</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-600 text-sm">Created: {createdDate}</p>
        <p className="text-gray-600 text-sm">Updated: {updatedDate}</p>
      </div>
    </div>
  );
};
export default AuthorSection;
