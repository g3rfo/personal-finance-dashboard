function Empty({ message }: { message?: string }) {
  return <p className="text-center">{message || "No items to display."}</p>;
}

export default Empty;
