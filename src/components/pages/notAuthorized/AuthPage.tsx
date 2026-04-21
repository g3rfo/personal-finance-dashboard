import AuthForm from "@/components/ui/forms/authAndRegForms/AuthForm";
import PageWrap from "./PageWrap";
import LinkWrap from "./LinkWrap";
import FormWrap from "./FormWrap";

function AuthPage() {
  return (
    <PageWrap>
      <FormWrap
        title="Sign in to your account"
        form={<AuthForm />}
        link={
          <LinkWrap
            link="/registration"
            message="Don't have an account? Register"
          />
        }
      />
    </PageWrap>
  );
}

export default AuthPage;
