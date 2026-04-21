import { Link } from "react-router-dom";

interface LinkWrapProps {
  link: string;
  message: string;
}

function LinkWrap({ link, message }: LinkWrapProps) {
  return (
    <Link to={link} className="text-base text-primary hover:underline">
      {message}
    </Link>
  );
}

export default LinkWrap;
