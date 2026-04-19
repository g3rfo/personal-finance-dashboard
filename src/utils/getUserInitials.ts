export const getUserInitials = (fullName: string): string => {
  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return initials;
};
