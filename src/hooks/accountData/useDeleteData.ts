import { deleteAllCategories } from "@/features/store/asyncThunks/categoriesThunks";
import { deleteAllTransactions } from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch } from "@/features/store/hooks";
import { resetAnalyticsData } from "@/features/store/slices/analyticsDataSlice";
import { userIdVerification } from "@/utils/userData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useDeleteData() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("token");

  const [pending, setPending] = useState<boolean>(false);

  const handleDeleteData = async () => {
    try {
      setPending(true);
      userIdVerification(userId);

      await dispatch(deleteAllTransactions(userId || "")).unwrap();
      await dispatch(deleteAllCategories(userId || "")).unwrap();

      dispatch(resetAnalyticsData());
      navigate("/dashboard");
    } catch (error) {
      console.error("Error deleting user data:", error);
      alert("An error occurred while deleting your data. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return { handleDeleteData, pending };
}

export default useDeleteData;
