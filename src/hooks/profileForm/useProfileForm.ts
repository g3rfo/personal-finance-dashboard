import { updateUserData } from "@/features/store/asyncThunks/userThunks";
import { useAppDispatch } from "@/features/store/hooks";
import type { User } from "@/types/user.type";
import { isUserAlreadyExist } from "@/utils/userData";
import { useState } from "react";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";

function useProfileForm() {
  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem("userData") || "{}") as User;

  // Default form values
  const defaultValues: User = {
    fullName: userData.fullName || "",
    email: userData.email || "",
  };

  // Form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>({ defaultValues });

  // Profile state management
  const [pending, setPending] = useState<boolean>(false);
  // Form handlers
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      setPending(true);

      if (!data) {
        return;
      }

      if (
        data.fullName === userData.fullName &&
        data.email === userData.email
      ) {
        setError("fullName", {
          type: "manual",
          message: "This is your current full name",
        });
        setError("email", {
          type: "manual",
          message: "This is your current email",
        });

        return;
      }

      const isUserExists = await isUserAlreadyExist(data.email);

      if (data.email !== userData.email && isUserExists === true) {
        setError("email", {
          type: "manual",
          message: "User with this email already exists",
        });
        return;
      } else if (isUserExists === null) {
        setError("email", {
          type: "manual",
          message: "Failed to check user existence",
        });
        return;
      }

      await dispatch(updateUserData(data));
      console.log("Form submitted with data:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setPending(false);
    }
  };

  const onInvalid: SubmitErrorHandler<User> = () => {
    setPending(false);
  };

  const handleFormSubmit = handleSubmit(onSubmit, onInvalid);

  return { register, handleSubmit, errors, pending, handleFormSubmit };
}

export default useProfileForm;
