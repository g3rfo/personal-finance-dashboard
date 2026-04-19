import type { Transaction } from "@/types/transaction.type";

export function exportTransactionsToCSV(data: Transaction[], filename: string) {
  if (!data.length) return;

  const headers = Object.keys(data[0]) as Array<keyof Transaction>;

  const csv = [
    headers.join(","),
    ...data.map((row) =>
      headers.map((field) => JSON.stringify(row[field] ?? "")).join(","),
    ),
  ].join("\n");

  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  a.click();
  URL.revokeObjectURL(url);
}
