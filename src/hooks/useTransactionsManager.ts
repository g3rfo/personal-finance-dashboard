import { fetchFilteredTransactions } from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { useEffect } from "react";

function useTransactionsManager() {
  const { monthFrom, monthTo, type, category } = useAppSelector(
    (state) => state.transactionsFilter,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchFilteredTransactions({
        monthFrom,
        monthTo,
        type,
        category,
        pageNumber: 1,
      }),
    );
  }, [monthFrom, monthTo, type, category, dispatch]);
}

export default useTransactionsManager;
