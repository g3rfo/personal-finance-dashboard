import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileForm from "@/components/ui/forms/profileForm/ProfileForm";

function ProfileInformation() {
  return (
    <Card className="flex-1 min-w-135">
      <CardHeader>
        <CardTitle className="text-lg">Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <ProfileForm />
      </CardContent>
    </Card>
  );
}

export default ProfileInformation;
