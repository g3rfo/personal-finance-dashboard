import { registerUser } from "@/features/store/asyncThunks/userThunks";
import { useAppDispatch } from "@/features/store/hooks";
import type { UserRegistrationData } from "@/types/user.type";
import { isUserAlreadyExist } from "@/utils/userData";
import { useState } from "react";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface RegistrationFormData extends UserRegistrationData {
  confirmPassword: string;
}

function useRegistrationForm() {
  // Default form values
  const defaultValues: RegistrationFormData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegistrationFormData>({ defaultValues });

  // Profile state management
  const [pending, setPending] = useState(false);

  // Form handlers
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    try {
      setPending(true);

      const isUserExist = await isUserAlreadyExist(data.email);

      if (isUserExist === true) {
        setError("email", {
          type: "server",
          message: "User with this email already exists",
        });
        return;
      } else if (isUserExist === null) {
        setError("email", {
          type: "server",
          message: "Failed to check user existence",
        });
        return;
      }

      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: "Passwords do not match",
        });
        return;
      }

      await dispatch(
        registerUser({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        }),
      ).unwrap();

      navigate("/dashboard");
    } catch (error) {
      setError("fullName", {
        type: "server",
        message: "Registration failed. Please try again.",
      });
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  const onInvalid: SubmitErrorHandler<RegistrationFormData> = () => {
    setPending(false);
  };

  const handleFormSubmit = handleSubmit(onSubmit, onInvalid);

  return { register, errors, pending, handleFormSubmit };
}

export default useRegistrationForm;
