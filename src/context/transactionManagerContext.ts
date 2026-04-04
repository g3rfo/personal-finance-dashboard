import type useManagerContent from "@/hooks/useManagerContent";
import { createContext } from "react";

export const TransactionManagerContext = createContext<ReturnType<typeof useManagerContent> | null>(null);