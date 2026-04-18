import type { Transaction, TransactionData } from "@/types/transaction.type";

export type ParsedTransaction = Omit<TransactionData, "userId">;

export function parseTransactionCSV(csv: string): ParsedTransaction[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];

  const transactionKeys = [
    "id",
    "userId",
    "name",
    "amount",
    "type",
    "category",
    "date",
  ] as const satisfies ReadonlyArray<keyof Transaction>;

  try {
    if (
      !transactionKeys.every((key, index) => key === lines[0].split(",")[index])
    ) {
      throw new Error("CSV header does not match expected format");
    }

    const data = lines.slice(1).map((line) => {
      const values = Object.fromEntries(
        line.split(",").map((v, i) => [i, i === 3 ? v : v.slice(1, -1)]),
      );

      const obj: ParsedTransaction = {
        name: values[2],
        amount: parseFloat(values[3]),
        type: values[4] as "income" | "expense",
        category: values[5],
        date: values[6],
      };

      if (!values[2] || !values[4] || !values[5] || !values[6]) {
        throw new Error(`Missing required fields in line: ${line}`);
      }
      if (isNaN(obj.amount)) {
        throw new Error(`Invalid amount value: ${values[3]}`);
      }

      return obj;
    });

    return data;
  } catch (error) {
    console.error("Error parsing CSV:", error);
    return [] as ParsedTransaction[];
  }
}
