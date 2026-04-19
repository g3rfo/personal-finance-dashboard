import PageLayout from "../PageLayout";
import SettingsContent from "./SettingsContent";

function SettingsPage() {
  return (
    <PageLayout
      title="Settings"
      description="Manage your account settings and preferences"
      content={<SettingsContent />}
    />
  );
}

export default SettingsPage;
