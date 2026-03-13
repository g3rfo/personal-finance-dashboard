import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
} from "../../ui/field";
import { Button } from "../../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/features/store/hooks";
import axios from "axios";
import { loginUser } from "@/features/store/slices/userSlice";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const apiURL = import.meta.env.VITE_SERVER_URL;

type AuthFormData = {
  email: string;
  password: string;
};

function AuthPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthFormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [pending, setPending] = useState<boolean>(false);

  const onSubmit: SubmitHandler<AuthFormData> = async (data: AuthFormData) => {
    try {
      setPending(true);

      const response = await axios.get(`${apiURL}/users`, {
        params: {
          email: data.email,
          password: data.password,
        },
      });

      if (!response.data.length) {
        setError("email", {
          type: "server",
          message: "Invalid email or password",
        });
        return;
      }

      const user = response.data[0];

      dispatch(loginUser({ name: user.name, email: user.email }));
      localStorage.setItem("token", user.id);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed: " + error);
      return;
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 p-6 bg-white rounded-lg shadow-md"
      >
        <FieldGroup>
          <FieldLegend data-variant="title">
            Sign in to your account
          </FieldLegend>
          <Field>
            <FieldLabel className="text-md" htmlFor="email">
              Email
            </FieldLabel>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <FieldDescription className="text-destructive">
                {errors.email.message}
              </FieldDescription>
            )}
          </Field>
          <Field>
            <FieldLabel className="text-md" htmlFor="password">
              Password
            </FieldLabel>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <FieldDescription className="text-destructive">
                {errors.password.message}
              </FieldDescription>
            )}
          </Field>
          <Button className="text-base" type="submit" disabled={pending}>
            {pending ? <Spinner className="size-6" /> : "Sign In"}
          </Button>
          <Link
            to="/register"
            className="text-base text-primary hover:underline"
          >
            Don't have an account? Register
          </Link>
        </FieldGroup>
      </form>
    </div>
  );
}

export default AuthPage;
