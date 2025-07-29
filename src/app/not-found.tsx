"use client";

import Link from "next/link";
import Image from "next/image";
import ErrorSvg from "../../public/Image/error/error.svg";

export default function NotFound() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <div className=" w-full">
        <Image
          src={ErrorSvg}
          alt="404 Error Illustration"
          className="mx-auto lg:h-[65vh]"
          priority
        />

        <Link
          href="/"
          className="inline-block px-6 py-3 text-white rounded-lg transition-all duration-200 [background:linear-gradient(270deg,#2058FF_0%,#004BC2_100%)] hover:opacity-90"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
