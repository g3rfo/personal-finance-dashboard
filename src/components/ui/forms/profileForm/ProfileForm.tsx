import useProfileForm from "@/hooks/profileForm/useProfileForm";
import NameInput from "../inputs/NameInput";
import { ProfileFormContext } from "@/context/profileFormContext";
import EmailInput from "../inputs/EmailInput";
import SubmitButton from "../../SubmitButton";
import AvatarComponent from "../../AvatarComponent";

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
          placeholder="Enter your full name"
          context={ProfileFormContext}
          label="Full Name"
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
