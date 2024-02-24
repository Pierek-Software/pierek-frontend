export const categoryToCategoryName = {
  0: "Programming Languages",
  1: "Databases",
  2: "Version Control Platforms",
  3: "Backend Frameworks",
  4: "Backend Libraries",
  5: "Cloud Platforms",
  6: "Containerization",
  7: "Runtime Environment",
  8: "Style Frameworks / Componenets",
  9: "Frontend Frameworks",
  10: "Frontend Libraries",
};

export const technologiesGroupedByCategory = (technologies: any[]) =>
  technologies.reduce((acc, cur) => {
    const { category } = cur;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(cur);
    return acc;
  }, {});
