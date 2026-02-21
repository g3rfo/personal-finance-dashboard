import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./features/store/hooks";
import {
  fetchTransactions,
} from "./features/store/asyncThunks/transactionsThunks";

function App() {
  const { transactions, loading, error } = useAppSelector(
    (state) => state.transactions,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransactions(1));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            {tx.type.toUpperCase()}: {tx.category} - ${tx.amount} on {tx.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
