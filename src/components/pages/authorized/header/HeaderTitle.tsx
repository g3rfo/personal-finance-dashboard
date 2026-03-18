interface HeaderTitleProps {
  title: string;
  description: string;
}

function HeaderTitle({ title, description }: HeaderTitleProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-[#6B7280]">{description}</p>
    </div>
  );
}

export default HeaderTitle;
