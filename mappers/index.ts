export const categoryToCategoryName = {
  0: "Programming Languages",
  1: "Databases",
  2: "Version Control Platforms",
  3: "Frameworks",
  4: "Libraries",
  5: "Cloud Platforms",
  6: "Containerization",
};

export const technologiesGroupedByCategory = (technologies) => technologies.reduce((acc, cur) => {
  const { category } = cur;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(cur);
  return acc;
}, {});

