import DataManagement from "./dataManagement/DataManagement";
import ProfileInformation from "./ProfileInformaion";

function SettingsContent() {
  return (
    <div className="flex flex-wrap gap-4">
      <ProfileInformation />
      <DataManagement />
    </div>
  );
}

export default SettingsContent;
