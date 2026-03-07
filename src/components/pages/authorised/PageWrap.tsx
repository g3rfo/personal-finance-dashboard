import { useEffect } from "react";
import Aside from "../../aside/Aside";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { fetchTransactions } from "@/features/store/asyncThunks/transactionsThunks";

function PageWrap({ children }: { children: React.ReactNode }) {
  const { loading, error } = useAppSelector(
    (state) => state.transactions,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <div className="w-full h-full flex">
      <Aside />
      <div className="ml-63.5 p-8 flex-1 flex flex-col gap-6">
        {children}
        {loading && <p>Loading transactions...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>
    </div>
  );
}

export default PageWrap;
