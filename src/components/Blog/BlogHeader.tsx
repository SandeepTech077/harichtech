"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BlogHeaderProps {
  title: string;
  banner: StaticImageData;
  mobileBanner: StaticImageData;
}

export const BlogHeader = ({ title, banner, mobileBanner }: BlogHeaderProps) => {
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="relative w-full">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200 group"
        aria-label="Go back"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
      </button>

      {/* Hero Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        {!imageError ? (
          <>
            {/* Desktop Banner */}
            <Image
              src={banner}
              alt={title}
              fill
              priority
              className="object-cover hidden sm:block"
              onError={() => setImageError(true)}
            />
            {/* Mobile Banner */}
            <Image
              src={mobileBanner}
              alt={title}
              fill
              priority
              className="object-cover block sm:hidden"
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          // Fallback gradient background
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800" />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <div className="w-24 h-1 bg-white/80 mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};