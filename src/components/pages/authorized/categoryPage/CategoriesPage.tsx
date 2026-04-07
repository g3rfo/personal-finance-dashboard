import Popup from "@/components/ui/Popup";
import HeaderTitle from "../header/HeaderTitle";
import PageHeader from "../header/PageHeader";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

function CategoriesPage() {
  return (
    <>
      <PageHeader>
        <HeaderTitle
          title="Categories"
          description="Organize your transactions with custom categories"
        />
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
      </PageHeader>
    </>
  );
}

export default CategoriesPage;
