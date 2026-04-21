import { AuthFormContext } from "@/context/forms/authFormContext";
import useAuthForm from "@/hooks/authAndRegForms/useAuthForm";
import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";
import SubmitButton from "../../custom/SubmitButton";

function AuthForm() {
  const contextValue = useAuthForm();
  const Provider = AuthFormContext.Provider;

  const { handleFormSubmit, pending } = contextValue;

  return (
    <Provider value={contextValue}>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <EmailInput context={AuthFormContext} />
        <PasswordInput context={AuthFormContext} />
        <div className="flex">
          <SubmitButton pending={pending} title="Sign In" />
        </div>
      </form>
    </Provider>
  );
}

export default AuthForm;
