import Aside from "../../aside/Aside";

function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <Aside />
      <div className="ml-63.5 p-8 flex-1">{children}</div>
    </div>
  );
}

export default PageWrap;
