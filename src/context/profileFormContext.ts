import type useProfileForm from "@/hooks/profileForm/useProfileForm";
import { createContext } from "react";

export const ProfileFormContext = createContext<ReturnType<
  typeof useProfileForm
> | null>(null);
