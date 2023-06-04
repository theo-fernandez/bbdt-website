import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  link: string;
}

export default function SecondaryButton({ text, link }: ButtonProps) {
  return (
    <Link
      to={link}
      className="flex h-14 w-48 items-center justify-center rounded-full border-2 border-red-600 bg-white transition duration-200 hover:shadow-lg"
    >
      <div className="text-lg font-medium tracking-wider text-red-600">
        {text}
      </div>
    </Link>
  );
}
