import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface BlogCardProps {
    image: StaticImageData;
    title: string;
    dateAndBy: string;
    descibation: string;
    btnTitle: string;
    btnArrow: StaticImageData;
    showSectionTitle?: boolean;
  }
  
 export const BlogCard: React.FC<BlogCardProps> = ({
    image,
    title,
    dateAndBy,
    descibation,
    btnTitle,
    btnArrow,
    showSectionTitle = false
  }) => {
    return (
      <>
        {showSectionTitle && (
          <div className="col-span-full text-left">
            <h2 className="text-3xl font-bold">
             Recent <span className="text-blue-500">Blogs</span>
            </h2>
          </div>
        )}
  
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          {/* Blog Image */}
          <div className="relative h-74 w-full">
            <Image src={image} alt={title} fill className="object-contain" />
          </div>
  
          {/* Blog Content */}
          <div className="">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-[#0052D3] text-sm mb-3">{dateAndBy}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">{descibation}</p>
            </div>
  
            <Link
              href={`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors bg-gray-300 w-full p-4"
            >
              <span className="font-medium flex-1">{btnTitle}</span>
              <span>
                <Image src={btnArrow} alt="Arrow" width={16} height={16} />
              </span>
            </Link>
          </div>
        </div>
      </>
    );
  };
  