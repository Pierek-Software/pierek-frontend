export function slugify(text: string) {
  return text
    .trim() 
    .replace(/\s+/g, "-") 
    .replace(/\./g, "-")
    .toLowerCase(); 
}