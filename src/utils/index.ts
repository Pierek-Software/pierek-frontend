/* eslint-disable no-useless-escape */
export function slugify(text: string) {
  return text
    .trim()
    .replace(/\s+/g, "-")
    .replace(/\./g, "-")
    .replace(/\,-/g, "-")
    .toLowerCase();
}

export function isoDateToRRRRMMDD(isoDate: string) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1 and pad with '0'
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}
