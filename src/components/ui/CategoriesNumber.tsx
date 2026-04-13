interface CategoriesNumberProps {
  number: number;
  type: "income" | "expense";
}

function CategoriesNumber({ number, type }: CategoriesNumberProps) {
  return (
    <div
      className={`rounded-xl py-1 px-2 ${type === "income" ? "bg-[#DCFCE7] text-[#15803D]" : "bg-[#FEE2E2] text-[#B91C1C]"}`}
    >
      <p className="text-sm font-medium">{number} categories</p>
    </div>
  );
}

export default CategoriesNumber;
