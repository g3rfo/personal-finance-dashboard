import type useRegistrationForm from "@/hooks/authAndRegForms/useRegistrationForm";
import { createContext } from "react";

export const RegistrationFormContext = createContext<ReturnType<
  typeof useRegistrationForm
> | null>(null);
