import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../public/SVG/Arrow1.svg";

interface GradientButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<GradientButtonProps> = ({ text, href = "#" }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 px-6 py-2 text-white font-medium rounded-[10px] bg-gradient-to-l from-[#2575FC] to-[#0052D3] transition-all"
    >
      <span>{text}</span>
      <Image
        src={Arrow}
        alt="Arrow"
        width={16}
        height={16}
        className="w-4 h-4"
      />
    </Link>
  );
};

export default Button;
