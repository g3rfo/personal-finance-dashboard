import type { FormActionType } from "@/types/form.type";
import { createContext } from "react";

export const TransactionFormTypeContext = createContext<FormActionType>("create");
export const CategoryFormTypeContext = createContext<FormActionType>("create");
