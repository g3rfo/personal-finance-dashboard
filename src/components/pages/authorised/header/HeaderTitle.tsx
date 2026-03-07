function HeaderTitle({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-[#6B7280]">{description}</p>
    </div>
  );
}

export default HeaderTitle;