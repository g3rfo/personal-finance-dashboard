function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between flex-wrap">
      {children}
    </div>
  );
}

export default PageHeader;
