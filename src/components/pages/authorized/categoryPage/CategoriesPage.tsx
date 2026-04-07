import PageLayout from "../PageLayout";
import AddCategoryPopup from "@/components/ui/popups/AddCategoryPopup";

function CategoriesPage() {
  return (
    <PageLayout
      title="Categories"
      description="Organize your transactions with custom categories"
      popup={<AddCategoryPopup />}
    />
  );
}

export default CategoriesPage;
