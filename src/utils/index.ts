/* eslint-disable no-useless-escape */
export function slugify(text: string) {
  return text
    .trim()
    .replace(/\s+/g, "-")
    .replace(/\./g, "-")
    .replace(/\,-/g, "-")
    .replace(/\:/g, "-")
    .replace(/\"/g, "-")
    .replace(/-{2,}/g, "-")
    .toLowerCase();
}

export function isoDateToRRRRMMDD(isoDate: string) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1 and pad with '0'
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

export function truncate(title, maxLength = 15) {
  if (title.length > maxLength) {
    // Find the first space after the specified max length
    const spaceIndex = title.indexOf(" ", maxLength);

    if (spaceIndex !== -1) {
      // Truncate the title after the first word and add three dots
      const truncatedTitle = title.substring(0, spaceIndex) + "...";
      return truncatedTitle;
    } else {
      // If no space is found, simply truncate the title and add three dots
      const truncatedTitle = title.substring(0, maxLength) + "...";
      return truncatedTitle;
    }
  } else {
    // If the title is already within the limit, return it as is
    return title;
  }
}
