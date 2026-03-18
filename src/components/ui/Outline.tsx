interface OutlineProps {
  children: React.ReactNode;
  className?: string;
}

function Outline({ children, className }: OutlineProps) {
  return (
    <div
      className={`w-full flex justify-center gap-3 items-center border-2 border-border box-border ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default Outline;
