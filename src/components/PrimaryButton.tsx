import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  link: string;
}

export default function PrimaryButton({ text, link }: ButtonProps) {
  return (
    <Link
      to={link}
      className="flex h-14 w-48 items-center justify-center rounded-full bg-red-600 transition duration-200 hover:shadow-lg"
    >
      <div className="text-lg font-medium tracking-wider text-white">
        {text}
      </div>
    </Link>
  );
}
