import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";
import useRegistrationForm from "@/hooks/authAndRegForms/useRegistrationForm";
import { RegistrationFormContext } from "@/context/forms/registrationFormContext";
import NameInput from "../inputs/NameInput";
import ConfirmPasswordInput from "../inputs/SubmitPasswordInput";
import SubmitButton from "../../custom/SubmitButton";

function RegistrationForm() {
  const contextValue = useRegistrationForm();
  const Provider = RegistrationFormContext.Provider;

  const { handleFormSubmit, pending } = contextValue;

  return (
    <Provider value={contextValue}>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <NameInput
          label="Full Name"
          placeholder="Enter your full name"
          context={RegistrationFormContext}
        />
        <EmailInput context={RegistrationFormContext} />
        <PasswordInput context={RegistrationFormContext} />
        <ConfirmPasswordInput context={RegistrationFormContext} />
        <div className="flex">
          <SubmitButton pending={pending} title="Register" />
        </div>
      </form>
    </Provider>
  );
}

export default RegistrationForm;
