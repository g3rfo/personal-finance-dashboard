import {
  parseTransactionCSV,
  type ParsedTransaction,
} from "./parseTransactionCSV";

export function readTransactionsCSVFile(
  file: File,
): Promise<ParsedTransaction[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const text = reader.result as string;
        const data = parseTransactionCSV(text);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = reject;

    reader.readAsText(file);
  });
}
