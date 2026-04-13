import { fetchFilteredTransactions } from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { useEffect } from "react";

function useTransactionsManager() {
  const { monthFrom, monthTo, type, category } = useAppSelector(
    (state) => state.transactionsFilter,
  );
  const { hasFetched, query } = useAppSelector(
    (state) => state.transactions.filtered,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const isSameQueryAsFetchedState =
      hasFetched &&
      query?.monthFrom === monthFrom &&
      query?.monthTo === monthTo &&
      query?.type === type &&
      query?.category === category;

    if (isSameQueryAsFetchedState) {
      return;
    }

    dispatch(
      fetchFilteredTransactions({
        monthFrom,
        monthTo,
        type,
        category,
        pageNumber: 1,
      }),
    );
  }, [monthFrom, monthTo, type, category, dispatch, hasFetched, query]);
}

export default useTransactionsManager;
