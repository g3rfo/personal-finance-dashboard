import useProfileForm from "@/hooks/profileForm/useProfileForm";
import NameInput from "../inputs/NameInput";
import { ProfileFormContext } from "@/context/forms/profileFormContext";
import EmailInput from "../inputs/EmailInput";
import AvatarComponent from "../../custom/AvatarComponent";
import SubmitButton from "../../custom/SubmitButton";

function ProfileForm() {
  const contextValue = useProfileForm();
  const Provider = ProfileFormContext.Provider;

  const { handleFormSubmit, pending } = contextValue;

  return (
    <Provider value={contextValue}>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="flex justify-center items-center">
          <AvatarComponent size="form" />
        </div>
        <NameInput
          label="Full Name"
          placeholder="Enter your full name"
          context={ProfileFormContext}
        />
        <EmailInput context={ProfileFormContext} />
        <div className="flex">
          <SubmitButton pending={pending} title="Save Profile" />
        </div>
      </form>
    </Provider>
  );
}

export default ProfileForm;
