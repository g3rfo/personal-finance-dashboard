import { Button } from "../button";
import { CardFooter } from "../card";
import { FieldSeparator } from "../field";

function ViewMore({ viewMoreHandler }: { viewMoreHandler: () => void }) {
  return (
    <CardFooter className="flex justify-center">
      <FieldSeparator className="flex-1" />
      <Button
        variant="outline"
        size="sm"
        className="text-[#374151] border-none shadow-none"
        onClick={viewMoreHandler}
      >
        View More...
      </Button>
      <FieldSeparator className="flex-1" />
    </CardFooter>
  );
}

export default ViewMore;
