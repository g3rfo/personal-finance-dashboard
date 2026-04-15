export const stringToCamelCase = (str: string): string => {
  return str
    .split(" ")
    .map((word, index) => {
      return index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};
