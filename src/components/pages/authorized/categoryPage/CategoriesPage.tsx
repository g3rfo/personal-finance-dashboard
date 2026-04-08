import PageLayout from "../PageLayout";
import AddCategoryPopup from "@/components/ui/popups/AddCategoryPopup";
import CategoriesContent from "./CategoriesContent";

function CategoriesPage() {
  return (
    <PageLayout
      title="Categories"
      description="Organize your transactions with custom categories"
      popup={<AddCategoryPopup />}
      content={<CategoriesContent />}
    />
  );
}

export default CategoriesPage;
