import { useAppDispatch } from "@/features/store/hooks";
import { loginUser } from "@/features/store/slices/userSlice";
import type {
  UserAuthenticationData,
  UserServerResponse,
} from "@/types/user.type";
import axios from "axios";
import { useState } from "react";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { useNavigate } from "react-router";

function useAuthForm() {
  const apiURL = import.meta.env.VITE_SERVER_URL;

  // Default form values
  const defaultValues: UserAuthenticationData = {
    email: "",
    password: "",
  };

  // Form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserAuthenticationData>({ defaultValues });

  // Profile state management
  const [pending, setPending] = useState(false);

  // Form handlers
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserAuthenticationData> = async (formData) => {
    try {
      setPending(true);

      const { data } = await axios.get<UserServerResponse[]>(
        `${apiURL}/users`,
        {
          params: {
            ...formData,
          },
        },
      );

      if (!data || data.length === 0) {
        setError("email", {
          type: "server",
          message: "Invalid email or password",
        });
        return;
      }

      dispatch(
        loginUser({
          fullName: data[0].fullName,
          email: data[0].email,
          token: data[0].id,
        }),
      );
      navigate("/dashboard");
    } catch (error) {
      setError("email", {
        type: "server",
        message: "Login failed. Please try again.",
      });
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  const onInvalid: SubmitErrorHandler<UserAuthenticationData> = () => {
    setPending(false);
  };

  const handleFormSubmit = handleSubmit(onSubmit, onInvalid);

  return { register, errors, pending, handleFormSubmit };
}

export default useAuthForm;
