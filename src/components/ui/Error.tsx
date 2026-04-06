function Error({ message }: { message: string | null }) {
  return (
    <div className="p-4">
      <p className="text-red-500">{message ? message : "An error occurred"}</p>
    </div>
  );
}

export default Error;
