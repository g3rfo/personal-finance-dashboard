import { useEffect } from "react";
import Aside from "../../aside/Aside";
import { fetchCategories } from "@/features/store/asyncThunks/categoriesThunks";
import { useAppDispatch } from "@/features/store/hooks";

function PageWrap({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-w-2xl w-screen h-screen flex">
      <Aside />
      <div className="ml-63.5 p-8 min-h-full h-fit flex-1 flex flex-col gap-6">{children}</div>
    </div>
  );
}

export default PageWrap;
