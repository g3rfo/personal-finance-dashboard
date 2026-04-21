import { Avatar, AvatarFallback } from "../avatar";

interface AvatarComponentProps {
  size?: "data" | "form";
}

function AvatarComponent({ size = "data" }: AvatarComponentProps) {
  const fullName: string =
    JSON.parse(localStorage.getItem("userData") || "{}")?.fullName || "";

  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const avatarSize = size === "data" ? "lg" : "2xl";

  return (
    <Avatar size={avatarSize}>
      <AvatarFallback className="bg-linear-270 from-[#4ADE80] to-[#16A34A] text-background font-bold">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}

export default AvatarComponent;
