import { Spinner } from "../spinner";

function Loading() {
  return (
    <div className="flex items-center justify-center h-32">
      <Spinner className="w-8 h-8" color="var(--primary)" />
    </div>
  );
}

export default Loading;
