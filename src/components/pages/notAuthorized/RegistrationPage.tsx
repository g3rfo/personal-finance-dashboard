import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { registerUser } from "@/features/store/asyncThunks/userThunks";
import { useAppDispatch } from "@/features/store/hooks";
import type { UserRegistrationData } from "@/types/user.type";
import { isUserAlreadyExist } from "@/utils/userData";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface RegistrationFormData extends UserRegistrationData {
  passwordConfirm: string;
}

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [pending, setPending] = useState<boolean>(false);

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

      if (data.password !== data.passwordConfirm) {
        setError("passwordConfirm", {
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
      alert("Registration error:" + error);
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
        <FieldGroup className="gap-4">
          <FieldLegend data-variant="title">Registration</FieldLegend>
          <Field>
            <FieldLabel className="text-md" htmlFor="fullName">
              Full Name
            </FieldLabel>
            <Input
              id="fullName"
              type="text"
              {...register("fullName", {
                required: "Full name is required",
              })}
            />
            {errors.fullName && (
              <FieldDescription className="text-destructive">
                {errors.fullName.message}
              </FieldDescription>
            )}
          </Field>
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
          <Field>
            <FieldLabel className="text-md" htmlFor="passwordConfirm">
              Confirm Password
            </FieldLabel>
            <Input
              id="passwordConfirm"
              type="password"
              {...register("passwordConfirm", {
                required: "Password confirm is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.passwordConfirm && (
              <FieldDescription className="text-destructive">
                {errors.passwordConfirm.message}
              </FieldDescription>
            )}
          </Field>
          <Button className="text-base" type="submit" disabled={pending}>
            {pending ? <Spinner className="size-6" /> : "Register"}
          </Button>
          <Link to="/auth" className="text-base text-primary hover:underline">
            Already have an account? Sign in
          </Link>
        </FieldGroup>
      </form>
    </div>
  );
}

export default RegistrationPage;
