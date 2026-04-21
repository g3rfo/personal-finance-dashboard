import PageWrap from "./PageWrap";
import FormWrap from "./FormWrap";
import RegistrationForm from "@/components/ui/forms/authAndRegForms/RegistrationForm";
import LinkWrap from "./LinkWrap";

function RegistrationPage() {
  return (
    <PageWrap>
      <FormWrap
        title="Register a new account"
        form={<RegistrationForm />}
        link={
          <LinkWrap link="/auth" message="Already have an account? Sign in" />
        }
      />
    </PageWrap>
  );
}

export default RegistrationPage;
