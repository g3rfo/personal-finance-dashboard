import Popup from "@/components/ui/Popup";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import PageLayout from "../PageLayout";

function CategoriesPage() {
  return (
    <PageLayout
      title="Categories"
      description="Organize your transactions with custom categories"
      popup={
        <Popup
          trigger={
            <Button>
              <IconPlus /> Add Category
            </Button>
          }
          title="Add Category"
          description=""
          content={null}
        />
      }
    />
  );
}

export default CategoriesPage;
