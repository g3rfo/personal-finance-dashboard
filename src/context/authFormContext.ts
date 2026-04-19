import type useAuthForm from "@/hooks/authAndRegForms/useAuthForm";
import { createContext } from "react";

export const AuthFormContext = createContext<ReturnType<
  typeof useAuthForm
> | null>(null);
