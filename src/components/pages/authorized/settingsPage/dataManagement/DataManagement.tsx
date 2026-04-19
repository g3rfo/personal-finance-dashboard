import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExportDataManager from "./managers/ExportDataManager";
import ImportDataManager from "./managers/ImportDataManager";
import DeleteManagerData from "./managers/DeleteDataManager";
import { FieldSeparator } from "@/components/ui/field";
import AccountDataManager from "./managers/AccountDataManager";

function DataManagement() {
  return (
    <Card className="flex-1 min-w-135">
      <CardHeader>
        <CardTitle className="text-lg">Data Management</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ExportDataManager />
        <ImportDataManager />
        <DeleteManagerData />
        <FieldSeparator />
        <AccountDataManager />
      </CardContent>
    </Card>
  );
}

export default DataManagement;
