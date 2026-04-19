import { deleteAllCategories } from "@/features/store/asyncThunks/categoriesThunks";
import { deleteAllTransactions } from "@/features/store/asyncThunks/transactionsThunks";
import { deleteUserData } from "@/features/store/asyncThunks/userThunks";
import { useAppDispatch } from "@/features/store/hooks";
import { resetData, userIdVerification } from "@/utils/userData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useDeleteUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("token");

  const [pending, setPending] = useState<boolean>(false);

  const handleDeleteAccount = async () => {
    try {
      setPending(true);
      userIdVerification(userId);

      await dispatch(deleteUserData());
      await dispatch(deleteAllTransactions(userId || "")).unwrap();
      await dispatch(deleteAllCategories(userId || "")).unwrap();

      resetData();
      navigate("/auth");
    } catch (error) {
      console.error("Error deleting user account:", error);
      alert("An error occurred while deleting your account. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return { handleDeleteAccount, pending };
}

export default useDeleteUser;
