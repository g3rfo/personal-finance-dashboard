function Outline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full flex justify-center gap-3 items-center border-2 border-border box-border ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default Outline;
