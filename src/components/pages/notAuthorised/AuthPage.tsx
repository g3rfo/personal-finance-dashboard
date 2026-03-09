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

const apiURL = import.meta.env.VITE_SERVER_URL;

type AuthFormData = {
  email: string;
  password: string;
};

function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthFormData> = async (data: AuthFormData) => {
    try {
      const response = await axios.get(`${apiURL}/users`, {
        params: {
          email: data.email,
          password: data.password,
        },
      });

      if (!response.data.length) {
        alert("Invalid credentials");
        return;
      }

      const user = response.data[0];

      dispatch(loginUser({ name: user.name, email: user.email }));
      localStorage.setItem("token", user.id);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed: " + error);
      return;
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 p-6 bg-white rounded-lg shadow-md"
      >
        <FieldGroup>
          <FieldLegend>Sign in to your account</FieldLegend>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
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
              <FieldDescription>{errors.email.message}</FieldDescription>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
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
              <FieldDescription>{errors.password.message}</FieldDescription>
            )}
          </Field>
          <Button type="submit">Sign In</Button>
          <Link to="/register" className="text-sm text-primary hover:underline">
            Don't have an account? Register
          </Link>
        </FieldGroup>
      </form>
    </div>
  );
}

export default AuthPage;
