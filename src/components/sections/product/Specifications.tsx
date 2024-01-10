const SpecificationToIcon = {
  CPU: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
    </svg>
  ),
  GPU: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-green-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v6h-2zm0 2h2v2h-2z"
      />
    </svg>
  ),
  RAM: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-purple-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v6h-2zm0 2h2v2h-2z"
      />
    </svg>
  ),
  Storage: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-red-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4H2v16h2M4 4h16M20 4h2v16h-2M20 4H4v16h16z"
      />
    </svg>
  ),
  Weight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-indigo-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v6h-2zm0 2h2v2h-2z"
      />
    </svg>
  ),
  Dimensions: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-orange-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 21h18M3 10h18M3 14h18M3 6h18"
      />
    </svg>
  ),
};

function SpecificationItem({ name, value }) {
  return (
    <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
      <div className="mr-4">{SpecificationToIcon[name]}</div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function ProductSpecificationsSection({ specifications }) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Specifications</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SpecificationItem name={"CPU"} value={specifications["CPU"]} />

        <SpecificationItem name={"GPU"} value={specifications["GPU"]} />

        <SpecificationItem name={"RAM"} value={specifications["RAM"]} />

        <SpecificationItem name={"Storage"} value={specifications["Storage"]} />

        <SpecificationItem name={"Weight"} value={specifications["Weight"]} />

        <SpecificationItem
          name={"Dimensions"}
          value={specifications["Dimensions"]}
        />
      </div>
    </div>
  );
}

export default ProductSpecificationsSection;
