import { useEffect } from "react";
import Aside from "../../aside/Aside";
import { useAppDispatch } from "@/features/store/hooks";
import { fetchTransactions } from "@/features/store/asyncThunks/transactionsThunks";
import { fetchCategories } from "@/features/store/asyncThunks/categoriesThunks";

function PageWrap({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="w-full h-full flex">
      <Aside />
      <div className="ml-63.5 p-8 flex-1 flex flex-col gap-6">{children}</div>
    </div>
  );
}

export default PageWrap;
